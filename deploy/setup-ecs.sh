#!/bin/bash
# ============================================================
# kingm-site 一键部署脚本（在阿里云 ECS 内运行）
# 适用系统：Alibaba Cloud Linux 3（RHEL / dnf 系）
# 作用：安装 Nginx + 配置静态站点目录 + 放行 80 端口
# 用法：把本文件传到 ECS 后执行  bash setup-ecs.sh
# ============================================================
set -e

echo "== 1. 安装 Nginx =="
dnf install -y nginx

echo "== 2. 创建站点目录 =="
mkdir -p /var/www/kingm-site

echo "== 3. 写入 Nginx 站点配置 =="
cat > /etc/nginx/conf.d/kingm-site.conf <<'EOF'
server {
    listen 80;
    server_name _;   # 备案通过后改成你的域名，如 kingm.site
    root /var/www/kingm-site;
    index index.html;

    # gzip 压缩（显著减少出流量，直接省流量费）
    gzip on;
    gzip_min_length 1024;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml font/woff2;

    # HTML 入口：不缓存（发新版后访客立刻看到，不卡旧页面）
    location = /index.html {
        add_header Cache-Control "no-cache";
    }

    # Vite 构建产物（文件名带 hash）：永久缓存，^~ 提升优先级
    location ^~ /assets/ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # 其他静态资源：长缓存 30 天
    location ~* \.(png|jpg|jpeg|gif|svg|ico|webp|avif|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
    }

    # SPA 路由回退（刷新子路由不 404）
    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF

echo "== 4. 校验配置并启动 =="
nginx -t
systemctl enable --now nginx

echo "== 完成 =="
echo "Nginx 已启动。下一步请把本机 dist/ 内容传到 /var/www/kingm-site/"
echo "本机执行示例："
echo "  scp -r \"D:\\\\AI Tool\\\\WorkBuddy WorkSpace\\\\2026-07-25-17-33-42\\\\kingm-site\\\\dist\\\\*\" root@<你的公网IP>:/var/www/kingm-site/"
echo "然后浏览器打开 http://<你的公网IP> 即可看到网站"

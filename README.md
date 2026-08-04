# KingM 个人主页

## 在线访问

- GitHub Pages：`https://kingm-dy.github.io/`
- 备用地址（国内直连）：`http://47.104.187.160/`

## 技术栈

- **框架**：React 18 + TypeScript + Vite
- **样式**：Tailwind CSS 3
- **动画**：Framer Motion
- **图标**：Lucide React
- **字体**：Almarai / Instrument Serif（Google Fonts）

## 目录结构

```
KingM-DY.github.io/
├── README.md
└── kingm-site-dist/        # 构建产物（即部署到 GitHub Pages 的内容）
    ├── index.html
    ├── assets/
    │   ├── index-*.js      # 打包后的 JS（含全部页面文案与链接）
    │   └── index-*.css
    ├── favicon.svg
    ├── icons.svg
    └── wechat-qr.png
```

> 本仓库存放的是 **构建后的静态文件**（由 `kingm-site` 源码项目 `npm run build` 生成）。GitHub Pages 直接以 `kingm-site-dist/` 为站点根目录发布。

## 页面内容

- **Hero**：姓名大字 + 标语，浮动粒子与噪点背景。
- **About**：个人定位介绍，滚动逐字渐显。
- **能力卡片（Features）**：
  - 技术开发 → https://github.com/KingM-DY
  - 产品设计 → https://github.com/KingM-DY/AI-Writer
  - 创意视觉（无外链）
- **作品（Projects）**：
  - AI Writer：头条文章自动化生成与发布系统。基于 DeepSeek API 的今日头条文章自动生成、配图、预览审核、一键发布工具。
  - 水果商城：`https://github.com/KingM-DY/fruitshop`
  - 个人主页：`#`


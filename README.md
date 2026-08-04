# KingM 个人主页

金铭（King M）的个人介绍网站，集中展示技术开发、产品设计与创意视觉三个方向的作品与能力。

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

## 如何更新内容

### 方式一：从源码重新构建（推荐）

修改 `kingm-site` 源码项目后构建，将 `dist/` 内容覆盖到本仓库的 `kingm-site-dist/`：

```bash
# 在 kingm-site 源码项目中
npm install
npm run build
# 将生成的 dist/ 拷到本仓库的 kingm-site-dist/ 并提交
```

### 方式二：直接修改构建产物

对于简单的文案 / 链接改动，可直接编辑 `kingm-site-dist/assets/index-*.js` 中的对应字符串（该文件无 SRI 校验，修改后文件名 hash 不一致不影响加载）。修改后提交即可。

## 部署

推送到本仓库的默认分支后，GitHub Pages 会自动发布，无需额外操作。

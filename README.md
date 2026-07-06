# HowToFrontend

这是一个基于 `Vite + React` 的多页面静态站点，页面入口分散在仓库根目录的多个 `.html` 文件中，最终由 Vite 打包到 `dist/` 目录。

## 构建方式

项目使用 `Vite` 构建，多页面入口在 `vite.config.js` 中通过 `rollupOptions.input` 显式声明。

主要构建配置：

- `root: "."`
- `base: "./"`，让静态资源使用相对路径，适合子目录部署
- `outDir: "dist"`
- `public/` 下的静态资源会被复制到构建产物中

## 本地开发

```bash
npm install
npm run dev
```

开发服务器默认启动后，直接访问终端输出的本地地址即可。

## 生产构建

```bash
npm run build
```

构建完成后，产物会输出到 `dist/`，包括：

- `index.html`
- `components.html`
- `lesson-html.html`
- `lesson-html-2.html`
- `lesson-css.html`
- `lesson-css-2.html`
- `lesson-layout.html`
- `lesson-layout-2.html`
- `lesson-js.html`
- `lesson-react.html`
- `prompts.html`
- `assets/` 目录下的 JS、CSS、图片资源

## 预览构建结果

```bash
npm run preview
```

这个命令用于本地检查生产构建后的效果，便于在发布前验证页面和资源引用是否正常。

## 部署到腾讯云 EdgeOne

如果使用 EdgeOne 部署这个项目，建议直接上传 `dist/` 里的全部内容作为站点根目录。

注意两点：

- 不要只上传源码目录，EdgeOne 应该服务的是 `dist/`
- 如果站点不是挂在域名根路径下，`base: "./"` 可以避免 `/assets/...` 这种绝对路径导致的 404

## 常见问题

### 构建后页面 404

优先检查这三个地方：

1. EdgeOne 的发布目录是否指向 `dist/`
2. 是否把 `dist/` 里的所有文件和目录都上传了
3. 站点是否被挂在子路径下，若是，必须使用相对资源路径

### 课程页内部跳转 404

这是多页面站点，不是单页应用路由。页面之间通过 `.html` 文件互相跳转，部署时必须保证这些 HTML 文件都在同一个发布根目录下。

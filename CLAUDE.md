# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

这是一个**前端可视化教学平台**，用于教别人学习前端开发。核心理念：学习者通过网页界面直接修改 HTML、CSS 或 React 代码，实时看到渲染结果，以此理解前端技术。

目标受众是前端初学者，教学内容应循序渐进，示例简洁明了。

## Technology Stack

- **前端框架**: React 19 + Vite
- **样式方案**: Tailwind CSS v4 + 全局 CSS 变量（`src/styles.css` / `templates/styles.css`）
- **组件库**: RetroUI（Neo-brutalist 风格，通过 shadcn CLI 安装，registry 已配置在 `components.json`）
- **代码编辑**: 浏览器内 textarea 实时预览（iframe 渲染）
- **实时预览**: iframe 独立渲染区域

## Design System — Neo-Brutalist (RetroUI 风格)

### 字体

RetroUI 官方字体组合（已在两个 styles.css 中同步）：

| 变量 | 字体 | 用途 |
|------|------|------|
| `--font-display` | **Archivo Black** | 所有标题、section-title、hero |
| `--font-body` | **Space Grotesk** | 正文、UI 文字 |
| `--font-mono` | **IBM Plex Mono** | 代码块、标签、mono label |

```css
--font-display: "Archivo Black", sans-serif;
--font-body: "Space Grotesk", sans-serif;
--font-mono: "IBM Plex Mono", monospace;
```

### 色板

| 变量 | 值 | 用途 |
|------|-----|------|
| `--bg` | `#FFF7E8` | 页面大背景（奶油米色） |
| `--surface` | `#FFFFFF` | 卡片/组件背景 |
| `--surface-2` | `#EFE7D6` | 分区背景、灰米色 |
| `--accent` | `#FFDC58` | 主强调黄（按钮、高亮、badge） |
| `--accent-hover` | `#FFD12E` | 黄色 hover 状态 |
| `--ink` / `--fg` | `#000000` | 文字、描边、阴影 |
| `--muted` | `#6B6355` | 辅助文字 |
| `--nav-dark` | `#1E1E1B` | 导航栏背景（近黑） |
| `--accent-blue` | `#00A8F8` | 点缀蓝（仅用于局部强调） |
| `--accent-green` | `#00C870` | 点缀绿 |
| `--accent-mint` | `#60F0D0` | 点缀薄荷绿 |
| `--accent-pink` | `#D030A8` | 点缀粉紫 |
| `--accent-red` | `#F85850` | 点缀红 |
| `--accent-purple` | `#A088D0` | 点缀紫 |

**原则**：蓝绿粉紫只做点缀，不铺满区块。主强调色始终用 `--accent`（黄）。

### 圆角规则（重要）

**主体组件不要圆角**，遵循方块感原则：

- `--radius-md: 0px` — 卡片、按钮、输入框、弹窗、面板
- `--radius-sm: 2px` — 代码块、小标签、tooltip
- `border-radius: 999px` — 仅限 pill badge / 头像等装饰圆形

### 标题高亮方式

**块状矩形高亮**：`inline-block`，四边等距 padding，黄底色块包裹关键词。效果如 `BLOGS [BLOCKS]` 中 BLOCKS 的高亮方式。

```html
<!-- 块状黄底高亮（用于标题关键词） -->
<span class="title-highlight">BLOCKS</span>

<!-- 小 badge 标签（用于章节标签，如 "WHY RETROUI"） -->
<span class="section-badge">WHY RETROUI</span>
```

CSS 定义（两个 styles.css 同步）：

```css
.title-highlight {
  display: inline-block;
  background: var(--accent);   /* #FFDC58 */
  padding: 6px 12px;
}

.section-badge {
  display: inline-flex;
  padding: 6px 14px;
  border: 2px solid var(--ink);
  background: var(--accent);
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

**核心原则**：黄色只做重点，不铺满页面。高亮单个关键词，形成矩形色块，其余文字保持黑色。

### 阴影系统

```css
--shadow: 4px 4px 0 var(--ink);   /* 标准硬阴影 */
```

所有带 border 的组件 hover 时加 `box-shadow: var(--shadow)`，配合 `transform: translateY(-2px)`。

### Topbar 设计

- 背景：`var(--nav-dark)` `#1E1E1B`（近黑）
- 底部：`border-bottom: 2px solid #000`
- 文字：白色
- 按钮：黄底 `--accent` + 黑边，方形无圆角
- 高度：`min-height: 72px`

## RetroUI 组件安装

```bash
# 安装单个组件
npx shadcn@latest add @retroui/button

# 查看所有可用组件
npx shadcn@latest list @retroui
```

`components.json` 已配置好两个 registry：
- `@retroui` — Radix UI 版本
- `@retroui-base` — Base UI 版本

## Architecture Direction

每个教学模块统一结构：

- **教学内容区**: 知识点说明 + 目标效果展示
- **代码编辑区**: 学习者可直接修改的代码编辑器
- **实时预览区**: 渲染当前代码的视觉效果
- **对比/提示**: 预期效果对比或提示信息


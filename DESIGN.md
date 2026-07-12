---
name: HowToEverything
description: 多轨实战教学平台的 Neo-Brutalist 设计系统：高亮黄、纯黑墨、硬偏移阴影、方形块，以 RetroUI 为视觉血脉。
colors:
  accent: "#FFDC58"
  accent-hover: "#FFD12E"
  ink: "#000000"
  bg: "#FFF7E8"
  surface: "#FFFFFF"
  surface-warm: "#EFE7D6"
  nav-dark: "#1E1E1B"
  muted: "#6B6355"
  accent-blue: "#00A8F8"
  accent-green: "#00C870"
  accent-pink: "#D030A8"
  accent-purple: "#A088D0"
  accent-red: "#F85850"
  accent-mint: "#60F0D0"
typography:
  display:
    fontFamily: '"Archivo Black", "Helvetica Neue", sans-serif'
    fontWeight: 400
    fontSize: "clamp(28px, 3.5vw, 48px)"
    lineHeight: "1.05"
  headline:
    fontFamily: '"Space Grotesk", "Inter", -apple-system, sans-serif'
    fontWeight: 700
    fontSize: "clamp(56px, 8vw, 104px)"
    lineHeight: "1.1"
    letterSpacing: "-0.02em"
  section-title:
    fontFamily: '"Space Grotesk", "Inter", sans-serif'
    fontWeight: 700
    fontSize: "clamp(32px, 4vw, 56px)"
    lineHeight: "1.1"
    letterSpacing: "-0.02em"
  title:
    fontFamily: '"Space Grotesk", "Inter", sans-serif'
    fontWeight: 700
    fontSize: "22px"
    lineHeight: "1.15"
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Space Grotesk", "Inter", -apple-system, sans-serif'
    fontWeight: 400
    fontSize: "17px"
    lineHeight: "1.55"
  label:
    fontFamily: '"IBM Plex Mono", "JetBrains Mono", ui-monospace, monospace'
    fontWeight: 700
    fontSize: "11px"
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "2px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  section: "72px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "13px 18px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "13px 18px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "26px"
  lesson-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 18px 20px"
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 10px"
    typography: "{typography.label}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "13px 14px"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: HowToEverything

## 1. Overview

**Creative North Star: "荧光笔手册（The Highlighter Handbook）"**

这套系统像一本摊开的实用手册：奶油纸底、粗黑墨水、荧光笔黄色块标出重点，方块感、硬阴影、留白充足。它不是发布会海报，也不是技术文档压缩包，而是一个你能直接在上面涂涂改改的工作面。学习者扫一眼就懂层级，动手改一段就能看见效果。

**视觉血脉：RetroUI（Neo-brutalist）。** 本系统的 token、圆角、阴影和组件与 RetroUI 同源：纯黑描边、0 圆角的方块组件、`4px 4px 0` 的硬偏移阴影、加粗几何字、贴纸式徽章与荧光笔高亮块。但我们只取 RetroUI 的**视觉语言**，不取它的**营销腔**。RetroUI 官网那种 "NOT EVERY WEBSITE HAS TO LOOK THE SAME!"、"DESIGNED TO SHIP FAST" 的大字呐喊和 "Fully Customizable" 贴纸轰炸，正是 PRODUCT.md 点名拒绝的"纯营销落地页的空洞包装"。我们的语气是 PRODUCT.md 写的：清晰、克制、可信，像一个有经验的人在讲可执行的表达方式，不喊口号，不堆术语。

面向有一点点互联网产品基础的设计师、产品、运营和后端工程师。他们要的是结构清晰、例子醒目、节奏能呼吸的页面，不是一份密不透风的文档，也不是一面图标墙。

**Key Characteristics:**
- 方块感优先：主体组件 0 圆角，只有 pill 徽章/头像走 `999px`。
- 高亮黄只做重点：动作、激活态、关键词高亮，绝不铺满区块。
- 纯黑墨水是承重墙：文字、描边、硬阴影统一用纯黑 `#000000`。
- 硬阴影是结构而非氛围：静止时偏平，交互时才抬起。
- 三套字体分工明确：Archivo Black 做印章式标签，Space Grotesk 做正文与标题，IBM Plex Mono 做元信息与代码。
- 例子比概念醒目：可交互的演示面承担教学，而不是长段文字。

## 2. Colors: The Highlighter Palette

整套色板像一张奶油纸上压着粗黑墨水，再用一支荧光笔点出该看的地方。

### Primary
- **高亮黄 Highlighter Yellow**（`#FFDC58`，`var(--accent)`）：系统唯一的 Primary。用于主按钮、激活态、关键词高亮块（`.accent-text` / `.title-highlight`）、section kicker 的黄底色块、徽章填充。它是"看这里"的信号弹。
- **深黄 Pressed Yellow**（`#FFD12E`，`var(--accent-hover)`）：黄色 hover/按下态，比主黄略深一档，给出明确反馈。

### Secondary（点缀色，绝不铺满）
点缀色只在局部强调时出现（轨道色、图标、插画、SVG 预览里的语义色），任何一条都不能替代黄色当主强调。
- **电光蓝 Electric Blue**（`#00A8F8`，`--accent-blue`）：Deploy 轨色、技术性强调。
- **苔藓绿 Moss Green**（`#00C870`，`--accent-green` / `--success`）：成功态、JS 相关示例。
- **品红 Magenta**（`#D030A8`，`--accent-pink`）：警示性点缀、Markdown/事件示例。
- **薰衣紫 Lavender**（`#A088D0`，`--accent-purple`）：布局相关示例。
- **警示红 Alert Red**（`#F85850`，`--accent-red`）：错误、危险动作。
- **薄荷 Mint**（`#60F0D0`，`--accent-mint`）：少量装饰点缀。

### Neutral
- **纯黑墨 Pure Ink**（`#000000`，`--ink` / `--fg` / `--border`）：文字、所有描边、硬阴影的颜色。承重墙。
- **奶油纸 Cream Paper**（`#FFF7E8`，`--bg`）：页面大背景，温润不刺眼。
- **纸白 Soft Paper**（`#FFFFFF`，`--surface`）：卡片、组件填充，与奶油底形成轻微层次。
- **暖米 Warm Beige**（`#EFE7D6`，`--surface-warm` / `--surface-2`）：分区背景、次级面板、代码块底。
- **导航黑 Nav Black**（`#1E1E1B`，`--nav-dark` / `--accent-strong`）：导航条、featured 卡片、selected 态的深色块。比纯黑略暖，用于大面积深色区域时不至于死黑。
- **棕灰 Muted Brown**（`#6B6355`，`--muted`）：辅助文字、label、次要说明。在奶油底上对比度满足 WCAG AA。

### Named Rules
**The One Highlighter Rule.** 黄色是信号，不是墙纸。它只出现在动作、激活态和需要被一眼看到的关键词上，单个屏幕里黄色占比保持克制。当黄色开始铺满整个区块，你就把它从"重点"用成了"背景"，系统就垮了。

**The Pure Ink Rule.** 纯黑 `#000000` 是这套 Neo-brutalist 身份的承重部分，不要把它"软化"成带色调的近黑。文字、描边、硬阴影统一走纯黑；只有需要大面积深色面（导航、featured 卡）时才用稍暖的 `--nav-dark`。

**The Accent Discipline Rule.** 蓝绿粉紫红薄荷只做点缀，单点使用，不铺区块，更不能取代黄色当主强调。一条轨道可以有一个点缀色作为身份色（如 Deploy = 蓝），但页面主节奏永远由黑、奶油、黄三角撑起。

## 3. Typography

**Display Font:** Archivo Black（fallback: Helvetica Neue, sans-serif）
**Body / Headline Font:** Space Grotesk（fallback: Inter, system sans）
**Label / Mono Font:** IBM Plex Mono（fallback: JetBrains Mono, ui-monospace）

**Character:** Archivo Black 像一枚印章，宽、重、editorial，专门盖在 section kicker、统计数字和徽章上；Space Grotesk 是 plainspoken 的正文与标题字，承担阅读；IBM Plex Mono 让页面随时切换成"工作笔记"语气，用于 label、提示词和代码。三套字明确分工，不互相串场。

一个重要的细节：最大的 hero/page 标题用的是 **Space Grotesk 700**（紧字距），而不是 Archivo Black。Archivo Black 留给"印章式"的小尺寸高权重元素（kicker、stat、badge）。不要把 Archivo Black 堆到大标题上，那样会过重。

### Hierarchy
- **Display**（Archivo Black，`clamp(28px, 3.5vw, 48px)`，行高 1.05）：section kicker、统计数字、徽章。盖在黄底色块或纯黑上。
- **Headline**（Space Grotesk 700，`clamp(56px, 8vw, 104px)`，行高 1.1，字距 -0.02em）：hero 主标题、页面最强陈述。
- **Section Title**（Space Grotesk 700，`clamp(32px, 4vw, 56px)`，行高 1.1）：章节大标题。
- **Title**（Space Grotesk 700，22px，行高 1.15）：卡片标题、课节小节标题。
- **Body**（Space Grotesk 400，17px，行高 1.55）：解释与阅读段落，行宽控制在 65ch 左右。
- **Label**（IBM Plex Mono 700，11px，字距 0.08em，uppercase）：eyebrow、chip、tab、元信息、代码标签。

### Named Rules
**The Weight-Contrast Rule.** 层级靠字号和字重对比建立（相邻档位比例 ≥1.25），不靠装饰性描边或渐变。Archivo Black 的"重"和 Space Grotesk 400 的"轻"之间的落差，就是页面的节奏感。

**The 65ch Rule.** 正文段落最大行宽 65ch 左右。超过这个宽度，阅读节奏就散了。

## 4. Elevation

这套系统基本是偏平的，但它的"深度"来自一种非常特定的结构手段：**硬偏移阴影**。不是柔和的漫射阴影，而是一块实心黑色向右下平移 `4px 4px 0`，像纸片或贴纸物理地叠在背景上。这是 Neo-brutalist 的核心签名，不是 Material 那种层级投影。

深度也靠 1.5 到 2px 的纯黑描边和充足的留白来传达，而不是靠多层模糊阴影堆叠。绝大多数面静止时是平的，只有当它可点击、被交互时，才"抬起"。

### Shadow Vocabulary
- **Standard Hard Shadow**（`box-shadow: 4px 4px 0 var(--ink)`，即 `var(--shadow)`）：卡片、下拉菜单、结构性强调。静止时的默认硬阴影。
- **Hover Lift**（平移 `translate(-2px,-2px)` + `box-shadow: 6px 6px 0 var(--ink)`）：卡片 hover 时向左上移、阴影变大变长，模拟被拈起一角的物理感。
- **Button Hover Lift**（`translateY(-2px)` + `box-shadow: var(--shadow)`）：按钮 hover 时整体上浮 2px 并落下硬阴影。

### Named Rules
**The Hard-Shadow Rule.** 阴影永远是实心、零模糊、固定偏移（4px 或 6px）的纯黑色块。禁止任何带 blur 的柔和投影、多层投影、彩色 glow。如果你写的阴影里有 `blur` 不为 0，它就不属于这套系统。

**The Flat-At-Rest Rule.** 静止的面保持平静、贴底。阴影是交互（hover、focus、结构性强调）的回应，不是常驻装饰。不要给每个静止卡片都挂阴影。

## 5. Components

### Buttons
按钮紧凑、自信、好扫读。
- **Shape:** 0 圆角（`--radius-md: 0`），1.5px 纯黑描边。
- **Primary:** 高亮黄底 `--accent` + 纯黑文字，padding `13px 18px`，IBM Plex Mono 感的加粗字。
- **Hover / Focus:** 上浮 `translateY(-2px)` + 落下 `var(--shadow)` 硬阴影；focus 走全局 `:focus-visible` 黑色描边外框（见下）。
- **Ghost / Secondary:** 纸白 `--surface` 底 + 纯黑描边 + 纯黑文字，同样的圆角与 padding，用于低优先级动作。
- **Small button / Copy button:** 更紧凑的 padding（`10px 14px`），用于工具栏。

### Tags / Pills
胶囊形是这套方块系统里**唯一**大面积出现的圆角。
- **Tag:** `border-radius: 999px`，1.5px 纯黑描边，纸白底，IBM Plex Mono 12px 加粗 uppercase。
- **is-muted 变体:** 透明底 + 虚线描边 + 棕灰文字，用于"即将推出"等非激活态，与实心的"已上线"明确区分。
- **Brand pill:** 高亮黄底 + 黑边的小胶囊，用于 wordmark 的 "Everything" 部分。

### Cards / Containers
卡片只用于真正独立的内容块，不要到处套卡、更不要卡中卡。
- **Lesson card（签名组件）:** 2px 纯黑描边 + `4px 4px 0` 硬阴影，hover 抬起；上半是固定宽高比（318/174）的预览区，下半是 body。这是门户页的视觉签名。
- **Generic card:** 1.5px 纯黑描边，0 圆角，`26px` 内边距，纸白底。
- **Featured / 深色卡:** 反相，`--nav-dark` 底 + 白字，用于强调块。
- **Corner Style:** 默认 0 圆角。

### Inputs / Fields
输入框像实用的表单控件，不是装饰。
- **Style:** 0 圆角，1.5px 纯黑描边，纸白底，padding `13px 14px`。
- **Focus:** 全局 `:focus-visible`（3px 纯黑外框，offset 2px）；playground 编辑器额外用黄色 ring。
- **Error / Disabled:** 用明确的高对比状态，不要只靠淡淡的变色来传达。

### Navigation
导航薄、sticky、好用。
- **Topbar:** 奶油底（与页面一致）或 `--nav-dark`，底部 2px 纯黑分隔线，最小高度 72px。
- **Links:** IBM Plex Mono 风的加粗 uppercase 小字；hover 简单加深，active/selected 是清晰可读的状态变化。
- **Dropdown:** 触发器带 ▾，菜单是 1.5px 黑边 + 硬阴影的纸白面板。
- **Mobile:** 干净折叠，顺序清晰，不挤压链接；`≤820px` 时 header-inner 改纵向排布。

### Signature Components
- **Highlighter Mark（`.accent-text` / `.title-highlight`）:** `inline-block` 的纯黑文字 + 高亮黄底色块，四边等距 padding（`6px 12px`）。这是"荧光笔划过关键词"的效果，用于标题里点一个词，不要整句涂黄。
- **Section Kicker:** Archivo Black 大字盖在黄底色块上（`padding: 6px 16px`），像贴上去的章节标签，配合一个装饰小图标（指南针/笔）。
- **Sticker Badge（`.section-badge`）:** 黑边黄底的小方块徽章，IBM Plex Mono uppercase，用于 "WHY" 之类的章节标签。RetroUI 的贴纸血统，但克制使用。
- **Hero + Path List:** 首页用一个超大 hero 跟一组纵向有节奏的 lesson-card 网格，这是站点的视觉签名组合。

## 6. Do's and Don'ts

### Do:
- **Do** 让例子和可交互演示面承担教学，不要只堆解释段落。
- **Do** 用高亮黄色块（`.accent-text`）点标题里的一个关键词，形成矩形色块。
- **Do** 保持主体组件 0 圆角；圆角只留给 pill 徽章、头像这类装饰圆形。
- **Do** 用纯黑 `#000000` 统一文字、描边和硬阴影。
- **Do** 让章节之间有明显呼吸（section 间距 `clamp(72px, 7vw, 96px)`），不要所有块一样紧。
- **Do** 正文行宽控制在 65ch 左右，层级靠字号/字重对比建立。
- **Do** 给每个可交互元素完整的 hover / focus-visible / active 状态；focus 用 3px 纯黑外框。
- **Do** 尊重 `prefers-reduced-motion`：交互动效在用户偏好下退化为瞬切。

### Don't:
- **Don't** 把黄色铺满整个区块当背景。黄色是重点信号，铺满就废了（The One Highlighter Rule）。
- **Don't** 把纯黑软化为带色调的近黑；它是承重墙（The Pure Ink Rule）。
- **Don't** 用 `border-left` / `border-right` 大于 1px 做彩色侧边条，那是偷懒的强调。改用整边描边、底色填充或前导图标。
- **Don't** 用渐变文字（`background-clip: text` + gradient）。强调靠字重或字号，颜色用单色。
- **Don't** 用玻璃拟态（backdrop-filter 模糊卡片）当默认。极少且有意为之才行，否则不要。
- **Don't** 把布局压成密不透风的"文档压缩包"；不要到处套一模一样的卡片网格，更不要卡中卡。
- **Don't** 写空洞的营销口号（"DESIGNED TO SHIP FAST" 之类），那是 PRODUCT.md 点名拒绝的"纯营销落地页的空洞包装"和"过度 AI 生成感的模板化卡片墙"。
- **Don't** 用"教前端工程师的课堂腔"来讲内容；语气要面向非前端人，直白、可执行。
- **Don't** 给静止的卡片挂常驻阴影；阴影是 hover/交互的回应，不是装饰（The Flat-At-Rest Rule）。
- **Don't** 用带 blur 的柔和投影或彩色 glow；阴影只能是零模糊的硬偏移黑色块（The Hard-Shadow Rule）。

export const lessons = [
  {
    id: 'heading',
    title: '标题',
    description: 'Markdown 用 # 号表示标题级别，HTML 用 h1~h6 标签。# 越多，标题越小。',
    markdown: `# 一级标题
## 二级标题
### 三级标题`,
    html: `<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>`,
    preview: `<h1>一级标题</h1><h2>二级标题</h2><h3>三级标题</h3>`,
  },
  {
    id: 'paragraph',
    title: '段落与换行',
    description: 'Markdown 空一行创建新段落，HTML 用 <p> 标签包裹段落，<br> 表示强制换行。',
    markdown: `这是第一段。

这是第二段。`,
    html: `<p>这是第一段。</p>

<p>这是第二段。</p>`,
    preview: `<p>这是第一段。</p><p>这是第二段。</p>`,
  },
  {
    id: 'emphasis',
    title: '强调：粗体与斜体',
    description: 'Markdown 用 * 或 _ 包裹文字来表示强调，HTML 用 <strong> 和 <em> 标签。',
    markdown: `**这是粗体**
*这是斜体*
***粗体+斜体***`,
    html: `<strong>这是粗体</strong>
<em>这是斜体</em>
<strong><em>粗体+斜体</em></strong>`,
    preview: `<p><strong>这是粗体</strong><br><em>这是斜体</em><br><strong><em>粗体+斜体</em></strong></p>`,
  },
  {
    id: 'list-unordered',
    title: '无序列表',
    description: 'Markdown 用 - 或 * 开头创建无序列表，HTML 用 <ul> 包裹，每项用 <li>。',
    markdown: `- 苹果
- 香蕉
- 橙子`,
    html: `<ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>橙子</li>
</ul>`,
    preview: `<ul><li>苹果</li><li>香蕉</li><li>橙子</li></ul>`,
  },
  {
    id: 'list-ordered',
    title: '有序列表',
    description: 'Markdown 用数字+点创建有序列表，HTML 用 <ol> 包裹，每项用 <li>。',
    markdown: `1. 第一步
2. 第二步
3. 第三步`,
    html: `<ol>
  <li>第一步</li>
  <li>第二步</li>
  <li>第三步</li>
</ol>`,
    preview: `<ol><li>第一步</li><li>第二步</li><li>第三步</li></ol>`,
  },
  {
    id: 'link',
    title: '链接',
    description: 'Markdown 用 [文字](url) 格式创建链接，HTML 用 <a href="url"> 标签。',
    markdown: `[访问百度](https://www.baidu.com)`,
    html: `<a href="https://www.baidu.com">访问百度</a>`,
    preview: `<a href="https://www.baidu.com" target="_blank">访问百度</a>`,
  },
  {
    id: 'image',
    title: '图片',
    description: 'Markdown 用 ![alt](url) 插入图片，HTML 用 <img> 标签，src 是图片地址，alt 是替代文字。',
    markdown: `![可爱的猫](https://placecats.com/200/150)`,
    html: `<img src="https://placecats.com/200/150" alt="可爱的猫">`,
    preview: `<img src="https://placecats.com/200/150" alt="可爱的猫" style="max-width:200px">`,
  },
  {
    id: 'blockquote',
    title: '引用',
    description: 'Markdown 用 > 开头创建引用块，HTML 用 <blockquote> 标签。',
    markdown: `> 这是一段引用文字
> 可以跨越多行`,
    html: `<blockquote>
  这是一段引用文字
  可以跨越多行
</blockquote>`,
    preview: `<blockquote>这是一段引用文字<br>可以跨越多行</blockquote>`,
  },
  {
    id: 'code',
    title: '代码',
    description: 'Markdown 用反引号 ` 包裹行内代码，用三个反引号包裹代码块。HTML 用 <code> 和 <pre> 标签。',
    markdown: `行内代码：\`console.log("hello")\`

\`\`\`
function greet() {
  return "hello";
}
\`\`\``,
    html: `行内代码：<code>console.log("hello")</code>

<pre><code>function greet() {
  return "hello";
}</code></pre>`,
    preview: `<p>行内代码：<code>console.log("hello")</code></p><pre><code>function greet() {\n  return "hello";\n}</code></pre>`,
  },
  {
    id: 'div',
    title: 'div 与布局容器',
    description: 'Markdown 没有直接对应 div 的语法——div 是 HTML 独有的通用容器，用来把一组内容包裹在一起，方便整体控制样式或布局。可以嵌套使用。',
    markdown: `<!-- Markdown 没有 div，
     只能用缩进表示层级关系 -->

第一组内容
  - 子项 A
  - 子项 B

第二组内容
  - 子项 C`,
    html: `<div class="card">
  <h3>第一组内容</h3>
  <ul>
    <li>子项 A</li>
    <li>子项 B</li>
  </ul>
</div>

<div class="card">
  <h3>第二组内容</h3>
  <ul>
    <li>子项 C</li>
  </ul>
</div>`,
    preview: `<style>.card{border:1px solid #d1d5db;border-radius:8px;padding:12px 16px;margin-bottom:12px;}</style><div class="card"><h3>第一组内容</h3><ul><li>子项 A</li><li>子项 B</li></ul></div><div class="card"><h3>第二组内容</h3><ul><li>子项 C</li></ul></div>`,
  },
  {
    id: 'hr',
    title: '分割线',
    description: 'Markdown 用三个或更多 --- 创建水平分割线，HTML 用 <hr> 标签。',
    markdown: `上面的内容

---

下面的内容`,
    html: `<p>上面的内容</p>

<hr>

<p>下面的内容</p>`,
    preview: `<p>上面的内容</p><hr><p>下面的内容</p>`,
  },
];

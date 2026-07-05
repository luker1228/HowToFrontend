import React from "react";
import { CycleText, PageFrame, SiteNav } from "./site-components.jsx";

const guides = [
  {
    label: "HTML",
    title: "HTML：负责结构。",
    perspectives: [
      { text: "HTML vs Markdown", href: "/lesson-html.html" },
      { text: "HTML vs Figma：图层树就是标签树", href: "/lesson-html-2.html" },
    ],
  },
  {
    label: "CSS",
    title: "CSS：负责样式。",
    perspectives: [
      { text: "CSS 基础", href: "/lesson-css.html" },
      { text: "CSS vs Figma：属性面板就是 CSS", href: "/lesson-css-2.html" },
    ],
  },
  {
    label: "JavaScript",
    title: "JavaScript：负责交互。",
    href: "/lesson-js.html",
    cta: "进入 JavaScript 课 →",
  },
  {
    label: "组件",
    title: "组件：负责复用。",
    href: "/components.html",
    cta: "打开组件词典 →",
  },
];

const resources = [
  {
    label: "模板意识",
    title: "页面模板入口",
    copy: "把登录页、后台页、文章页理解成固定构成块，而不是每次从空白页开始想。",
    href: "/lesson-html.html",
    cta: "从课程里拆模板 →",
  },
  {
    label: "组件词典",
    title: "组件认知页",
    copy: "遇到“这个界面块该怎么叫”时，直接回到组件页补词汇，不再模糊描述。",
    href: "/components.html",
    cta: "打开组件页 →",
  },
  {
    label: "提示词库",
    title: "智能助手提示词库",
    copy: "页面生成、页面修改、组件拆分、接口对接四类提示词，够你开始真实协作。",
    href: "/prompts.html",
    cta: "打开提示词库 →",
  },
];

const faqs = [
  {
    title: "智能助手都能写代码了，为什么还要学这些？",
    copy: "因为问题不在“能不能生成”，而在“你能不能描述清楚要生成什么”。组件、状态和页面结构，是你和智能助手对齐的语言。",
    open: true,
  },
  {
    title: "是不是应该一开始就学组件化框架？",
    copy: "不是。先搞懂结构、布局和状态，再看组件化组织方式，理解会扎实很多。",
  },
  {
    title: "我没有设计感，能做出能看的页面吗？",
    copy: "可以。你不需要先成为设计师，但要先知道页面由哪些块组成、块之间怎么排，以及每个状态长什么样。",
  },
];

export function IndexPage() {
  return (
    <PageFrame title="非前端人的前端战术手册">
      <div className="site-shell">
        <header className="site-header">
          <div className="container site-header-inner">
            <a className="brand-mark" href="/index.html">
              <span>后端前端中心</span>
              <span className="brand-pill">手册</span>
            </a>
            <SiteNav />
            <div className="header-actions">
              <div className="header-search">
                <input className="search-input" type="search" placeholder="搜索前端战术手册..." aria-label="搜索前端战术手册" />
              </div>
              <a className="button" href="/lesson-html.html">开始学习 →</a>
            </div>
          </div>
        </header>

        <main className="container">
          <section className="hero">
            <div className="hero-grid">
              <div className="hero-copy-block">
                <h1 className="hero-title-structured">非前端人的<span className="accent-text">前端战术手册</span></h1>
                <p className="hero-subtitle-structured">
                  默认你已经有一点互联网基础。从 HTML、CSS、JavaScript 到 React，用 AI 写出看得见的页面，适合
                  <CycleText items={["设计师", "产品", "运营", "后端"]} />
                  同学一起看。
                </p>
                <div className="hero-actions">
                  <a className="button" href="/lesson-html.html">开始学习 →</a>
                </div>
                <div className="hero-search-card bare">
                  <div className="hero-tags">
                    {["结构与标签", "布局与样式", "状态与事件", "组件化基础", "组件描述", "后端转前端"].map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <aside className="hero-note">
                <span className="micro-label">这份手册解决什么</span>
                <p className="hero-note-copy">不是系统培养前端工程师，而是帮设计师、产品、运营和后端快速获得“能看懂页面、能拆组件、能让智能助手改对前端”的表达能力。</p>
              </aside>
            </div>
          </section>

          <section className="section" id="guides">
            <div className="section-header">
              <div>
                <span className="section-kicker">学习路径</span>
              </div>
            </div>
            <div className="path-list">
              {guides.map((guide) => (
                <article key={guide.title} className="path-item">
                  <span className="path-icon" aria-hidden="true">◆</span>
                  <div className="path-head">
                    <span className="path-label">{guide.label}</span>
                    <h3>{guide.title}</h3>
                  </div>
                  {guide.copy && <p>{guide.copy}</p>}
                  {guide.perspectives && (
                    <ul className="path-sub path-perspectives">
                      {guide.perspectives.map((p) => (
                        <li key={p.text}>
                          <a href={p.href}>
                            <span>{p.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  {guide.cta && <a className="row-link" href={guide.href}>{guide.cta}</a>}
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="resources">
            <div className="section-header">
              <div>
                <span className="section-kicker">资源入口</span>
                <h2 className="section-title">除了课程，首页只保留三个真正会反复用到的入口。</h2>
              </div>
            </div>
            <div className="resource-grid">
              {resources.map((resource) => (
                <article key={resource.title} className="module-card resource-card">
                  <span className="micro-label">{resource.label}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.copy}</p>
                  <a className="row-link" href={resource.href}>{resource.cta}</a>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="faq">
            <div className="section-header">
              <div>
                <span className="section-kicker">常见问题</span>
                <h2 className="section-title">剩下只回答三个最常见的问题，然后就开始动手。</h2>
              </div>
            </div>
            <div className="faq-grid">
              {faqs.map((faq) => (
                <details key={faq.title} className="faq-item" open={faq.open}>
                  <summary>{faq.title}</summary>
                  <p>{faq.copy}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="cta-panel">
            <div>
              <span className="section-kicker">从结构开始</span>
              <h2 className="cta-title">先学会描述页面，再让智能助手帮你把页面写出来。</h2>
              <p>从结构第一课开始，再一路推进到组件词汇和提示词库。</p>
            </div>
            <a className="button" href="/lesson-html.html">开始学习 →</a>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-col">
              <a className="brand-mark" href="/index.html">
                <span>后端前端中心</span>
                <span className="brand-pill">手册</span>
              </a>
              <p className="card-copy">给设计师、产品、运营和后端的前端战术手册：理解结构、样式、交互与组件语言。</p>
            </div>
            <div className="footer-col">
              <span className="footer-caption">课程</span>
              <a href="/lesson-html.html">结构课</a>
              <a href="/lesson-css.html">样式课</a>
              <a href="/lesson-js.html">交互课</a>
              <a href="/lesson-react.html">先认词</a>
            </div>
            <div className="footer-col">
              <span className="footer-caption">资料库</span>
              <a href="/components.html">组件页</a>
              <a href="/prompts.html">提示词页</a>
            </div>
            <div className="footer-col">
              <span className="footer-caption">目录</span>
              <a href="#guides">页面结构</a>
              <a href="#resources">资源入口</a>
              <a href="#faq">常见问题</a>
            </div>
          </div>
        </footer>
      </div>
    </PageFrame>
  );
}

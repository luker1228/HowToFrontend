import React from "react";
import { CycleText, PageFrame, SiteNav, withBase } from "@/shared/ui/site-components.jsx";
import { TRACKS } from "@/tracks/registry.js";
import { frontendTrack } from "@/tracks/frontend/manifest.jsx";

const faqs = [
  {
    title: "智能助手都能写代码了，为什么还要学这些？",
    copy: `因为问题不在"能不能生成"，而在"你能不能描述清楚要生成什么"。结构、状态和组件，是你和智能助手对齐的语言。`,
    open: true,
  },
  {
    title: "howToEverything 的课要怎么上？",
    copy: "每条轨循序渐进，每节课都能直接改代码、实时看效果。先跑通最小例子，再理解概念，最后让 AI 帮你扩展。",
  },
  {
    title: "没有基础能跟上吗？",
    copy: "可以。每条轨都从「是什么、为什么」讲起，不假设你已是该领域工程师，但默认你愿意动手改一改、跑一跑。",
  },
];

export function IndexPage() {
  return (
    <PageFrame title="howToEverything">
      <div className="site-shell">
        <header className="site-header">
          <div className="container site-header-inner">
            <a className="brand-mark" href={withBase("index.html")}>
              <span>howTo</span>
              <span className="brand-pill">Everything</span>
            </a>
            <SiteNav />
            <div className="header-actions">
              <div className="header-search">
                <input className="search-input" type="search" placeholder="搜索教程..." aria-label="搜索教程" />
              </div>
              <a className="button" href={withBase(frontendTrack.href)}>开始学习 →</a>
            </div>
          </div>
        </header>

        <main className="container">
          <section className="hero">
            <div className="hero-grid">
              <div className="hero-copy-block">
                <div className="hero-title-wrap">
                  <h1 className="hero-title-structured">
                    <span className="hero-title-row1">
                      howTo
                      <img aria-hidden="true" className="hero-decor hero-decor-heart" src={withBase("decor/heart.svg")} alt="" />
                    </span>
                    <span className="accent-text">Everything</span>
                  </h1>
                </div>
                <p className="hero-subtitle-structured">
                  一个个看得见、改得动的实战教程。从 <CycleText items={["前端 Frontend", "K8s", "更多 …"]} /> 开始，边改边学，用 AI 把知识变成能跑起来的东西。
                </p>
                <div className="hero-actions">
                  <a className="button" href={withBase(frontendTrack.href)}>开始学习 →</a>
                </div>
                <div className="hero-search-card bare">
                  <div className="hero-tags">
                    {["前端", "K8s", "边改边学", "实战优先", "AI 协作"].map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <aside className="hero-note">
                <span className="micro-label">这是什么</span>
                <p className="hero-note-copy">howToEverything 是一个多轨实战教学平台：每条轨专注一个领域，每节课都能直接改代码、实时看效果。前端轨已上线，K8s 等更多轨陆续推出。</p>
              </aside>
            </div>
          </section>

          <section className="section" id="tracks">
            <div className="section-header">
              <div className="section-kicker-wrap">
                <img aria-hidden="true" className="section-decor-compas" src={withBase("decor/compas.svg")} alt="" />
                <span className="section-kicker">学习轨 Tracks</span>
              </div>
            </div>
            <div className="lesson-card-grid">
              {TRACKS.map((track) => (
                <a key={track.id} className="lesson-card" href={withBase(track.href)}>
                  <div className="lesson-card-preview" style={{ background: track.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "30px", color: "var(--ink)", letterSpacing: "0.02em" }}>
                      {track.name}
                    </span>
                  </div>
                  <div className="lesson-card-body">
                    <span className={`tag${track.status === "soon" ? " is-muted" : ""}`}>
                      {track.status === "live" ? "已上线" : "即将推出"}
                    </span>
                    <h3 className="lesson-card-title">{track.name}</h3>
                    <p className="lesson-card-copy">{track.blurb}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="section" id="guides">
            <div className="section-header">
              <div className="section-kicker-wrap">
                <img aria-hidden="true" className="section-decor-compas" src={withBase("decor/compas.svg")} alt="" />
                <span className="section-kicker">{frontendTrack.name} 轨 · 当前课程</span>
              </div>
            </div>
            <div className="lesson-card-grid">
              {frontendTrack.lessons.map((lesson) => (
                <a key={lesson.href} className="lesson-card" href={withBase(lesson.href)}>
                  <div className="lesson-card-preview">
                    {lesson.preview}
                  </div>
                  <div className="lesson-card-body">
                    <span className="lesson-card-label">{lesson.label}</span>
                    <h3 className="lesson-card-title">{lesson.title}</h3>
                    <p className="lesson-card-copy">{lesson.copy}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="section section-spacious" id="faq">
            <div className="section-header">
              <div>
                <div className="section-kicker-wrap">
                  <img aria-hidden="true" className="section-decor-pen" src={withBase("decor/pen_design.svg")} alt="" />
                  <span className="section-kicker">常见问题</span>
                </div>
                <p className="section-subtitle">先回答三个最常见的问题，然后就开始动手。</p>
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

        </main>

        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-col">
              <a className="brand-mark" href={withBase("index.html")}>
                <span>howTo</span>
                <span className="brand-pill">Everything</span>
              </a>
              <p className="card-copy">howToEverything：多轨实战教学平台，每节课都能直接改代码、实时看效果。从前端开始，更多领域陆续上线。</p>
            </div>
            <div className="footer-col">
              <span className="footer-caption">前端轨课程</span>
              <a href={withBase("lesson-html.html")}>结构课</a>
              <a href={withBase("lesson-css.html")}>样式课</a>
              <a href={withBase("lesson-js.html")}>交互课</a>
              <a href={withBase("lesson-react.html")}>先认词</a>
              <a href={withBase("lesson-layout.html")}>布局第一课</a>
              <a href={withBase("lesson-layout-2.html")}>布局第二课</a>
            </div>
            <div className="footer-col">
              <span className="footer-caption">学习轨</span>
              {TRACKS.map((track) => (
                <a key={track.id} href={withBase(track.href)}>
                  {track.name}{track.status === "soon" ? "（即将推出）" : ""}
                </a>
              ))}
              <a href={withBase("prompts.html")}>提示词页</a>
            </div>
            <div className="footer-col">
              <span className="footer-caption">目录</span>
              <a href="#tracks">学习轨</a>
              <a href="#guides">前端课程</a>
              <a href="#faq">常见问题</a>
            </div>
          </div>
        </footer>
      </div>
    </PageFrame>
  );
}

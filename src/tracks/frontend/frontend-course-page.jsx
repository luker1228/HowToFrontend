import React, { useMemo, useState } from "react";
import { PageFrame, SiteNav, withBase } from "@/shared/ui/site-components.jsx";
import { frontendTrack } from "@/tracks/frontend/manifest.jsx";

/**
 * Frontend course landing page (/front).
 * Introduces how to learn the course, then lists the lesson catalog.
 */
export function FrontendCoursePage() {
  const [view, setView] = useState("card");

  // Group lessons by topic (derived from the "·"-prefixed label) for the tree view.
  const groups = useMemo(() => {
    const map = new Map();
    for (const lesson of frontendTrack.lessons) {
      const topic = lesson.label.split("·")[0].trim();
      if (!map.has(topic)) map.set(topic, []);
      map.get(topic).push(lesson);
    }
    return Array.from(map, ([topic, lessons]) => ({ topic, lessons }));
  }, []);

  return (
    <PageFrame title={`${frontendTrack.name} · HowToEverything`}>
      <div className="site-shell">
        <header className="site-header">
          <div className="container site-header-inner">
            <a className="brand-mark" href={withBase("index.html")}>
              <span>HowTo</span>
              <span className="brand-pill">Everything</span>
            </a>
            <SiteNav currentPath={frontendTrack.href} />
            <div className="header-actions">
              <a className="ghost-button" href={withBase("index.html")}>← 返回首页</a>
            </div>
          </div>
        </header>

        <main className="container">
          <section className="page-hero">
            <div className="section-kicker-wrap" style={{ marginBottom: "20px" }}>
              <span className="section-kicker">前端课程</span>
            </div>
            <h1 className="page-title" style={{ maxWidth: "none" }}>{frontendTrack.name}</h1>
            <p className="section-subtitle">{frontendTrack.tagline}</p>
          </section>

          <section className="section" id="how">
            <div className="section-kicker-wrap" style={{ marginBottom: "20px" }}>
              <span className="section-kicker">如何学习</span>
            </div>
            <div style={{ maxWidth: "68ch" }}>
              <p style={{ margin: "0 0 14px", fontSize: "var(--text-lg)", lineHeight: 1.75 }}>
                这门课讲前端页面的五块基石：结构（HTML）、样式（CSS）、交互（JavaScript）、组件、布局。每节课都是「讲一点 → 改一段代码 → 立刻看到效果」，不用先背概念，动手改两下就明白。
              </p>
              <p style={{ margin: 0, fontSize: "var(--text-lg)", lineHeight: 1.75 }}>
                建议按目录顺序从 HTML 第一课往下走；只缺某一块，也可以直接跳过去。目标不是把你变成前端工程师，而是让你能把一个页面说清楚，再用 AI 改得对。
              </p>
            </div>
          </section>

          <section className="section" id="catalog">
            <div className="catalog-head">
              <span className="section-kicker">课程目录</span>
              <div className="catalog-view-toggle" role="group" aria-label="目录视图">
                <button type="button" aria-pressed={view === "card"} className={`filter-button${view === "card" ? " active" : ""}`} onClick={() => setView("card")}>卡片</button>
                <button type="button" aria-pressed={view === "tree"} className={`filter-button${view === "tree" ? " active" : ""}`} onClick={() => setView("tree")}>树状</button>
              </div>
            </div>

            {view === "card" ? (
              <div className="lesson-card-grid">
                {frontendTrack.lessons.map((lesson) => (
                  <a key={lesson.href} className="lesson-card" href={withBase(lesson.href)}>
                    <div className="lesson-card-preview">{lesson.preview}</div>
                    <div className="lesson-card-body">
                      <span className="lesson-card-label">{lesson.label}</span>
                      <h3 className="lesson-card-title">{lesson.title}</h3>
                      <p className="lesson-card-copy">{lesson.copy}</p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="catalog-tree">
                {groups.map(({ topic, lessons }) => (
                  <details key={topic} open className="catalog-tree-group">
                    <summary className="catalog-tree-topic">{topic}</summary>
                    <ul className="catalog-tree-list">
                      {lessons.map((lesson) => (
                        <li key={lesson.href}>
                          <a href={withBase(lesson.href)}>
                            <span className="catalog-tree-label">{lesson.label}</span>
                            <span className="catalog-tree-title">{lesson.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </PageFrame>
  );
}

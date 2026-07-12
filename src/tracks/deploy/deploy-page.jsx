import React from "react";
import { PageFrame, SiteNav, withBase } from "@/shared/ui/site-components.jsx";
import { deployTrack } from "@/tracks/deploy/manifest.js";
import { frontendTrack } from "@/tracks/frontend/manifest.jsx";

export function DeployPage() {
  return (
    <PageFrame title={`${deployTrack.name} · HowToEverything`}>
      <div className="site-shell">
        <header className="site-header">
          <div className="container site-header-inner">
            <a className="brand-mark" href={withBase("index.html")}>
              <span>HowTo</span>
              <span className="brand-pill">Everything</span>
            </a>
            <SiteNav currentPath={deployTrack.href} />
            <div className="header-actions">
              <a className="ghost-button" href={withBase("index.html")}>← 返回首页</a>
            </div>
          </div>
        </header>

        <main className="container">
          <section className="section" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
            <div className="section-header">
              <div>
                <div className="section-kicker-wrap">
                  <span className="section-kicker">即将推出</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-hero)", margin: "16px 0" }}>
                  {deployTrack.name}
                </h1>
                <p className="section-subtitle">{deployTrack.tagline}</p>
              </div>
            </div>
            <p className="card-copy" style={{ maxWidth: "560px", margin: "32px auto 0", textAlign: "center" }}>
              {deployTrack.blurb} 这门课程正在筹备中——完成后，你会像前端课程一样，直接改配置、实时看效果，边动手边理解部署。
            </p>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: "32px" }}>
              <a className="button" href={withBase(frontendTrack.href)}>先学前端课程 →</a>
              <a className="ghost-button" href={withBase("index.html")}>返回首页</a>
            </div>
          </section>
        </main>
      </div>
    </PageFrame>
  );
}

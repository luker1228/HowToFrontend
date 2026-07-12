import React from "react";
import { PageFrame, SiteNav, withBase } from "@/shared/ui/site-components.jsx";
import { k8sTrack } from "@/tracks/k8s/manifest.js";
import { frontendTrack } from "@/tracks/frontend/manifest.jsx";

export function K8sPage() {
  return (
    <PageFrame title={`${k8sTrack.name} · howToEverything`}>
      <div className="site-shell">
        <header className="site-header">
          <div className="container site-header-inner">
            <a className="brand-mark" href={withBase("index.html")}>
              <span>howTo</span>
              <span className="brand-pill">Everything</span>
            </a>
            <SiteNav currentPath={k8sTrack.href} />
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
                  <span className="section-kicker">即将推出 · Coming soon</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-hero)", margin: "16px 0" }}>
                  {k8sTrack.name}
                </h1>
                <p className="section-subtitle">{k8sTrack.tagline}</p>
              </div>
            </div>
            <p className="card-copy" style={{ maxWidth: "560px", margin: "32px auto 0", textAlign: "center" }}>
              {k8sTrack.blurb} 这条轨正在筹备中——完成后，你会像前端轨一样，直接改配置、实时看效果，边动手边理解 Kubernetes。
            </p>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: "32px" }}>
              <a className="button" href={withBase(frontendTrack.href)}>先学前端轨 →</a>
              <a className="ghost-button" href={withBase("index.html")}>返回首页</a>
            </div>
          </section>
        </main>
      </div>
    </PageFrame>
  );
}

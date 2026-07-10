import { useEffect } from "react";
import { HashRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { IndexPage } from "@/index-page.jsx";
import { ComponentsPage } from "@/tracks/frontend/lessons/components-page.jsx";
import { PromptsPage } from "@/tracks/frontend/lessons/prompts-page.jsx";
import { LessonHtmlPage } from "@/tracks/frontend/lessons/lesson-html-page.jsx";
import { LessonHtml2Page } from "@/tracks/frontend/lessons/lesson-html-2-page.jsx";
import { LessonCssPage } from "@/tracks/frontend/lessons/lesson-css-page.jsx";
import { LessonCss2Page } from "@/tracks/frontend/lessons/lesson-css-2-page.jsx";
import { LessonJsPage } from "@/tracks/frontend/lessons/lesson-js-page.jsx";
import { LessonLayoutPage } from "@/tracks/frontend/lessons/lesson-layout-page.jsx";
import { LessonLayout2Page } from "@/tracks/frontend/lessons/lesson-layout-2-page.jsx";
import { LessonReactApp } from "@/tracks/frontend/lessons/lesson-react-page.jsx";
import { K8sPage } from "@/tracks/k8s/k8s-page.jsx";

/**
 * Route table. Path = old entry filename without `.html` (`index.html` -> `/`).
 * This mapping also drives the legacy `<a href="x.html">` interceptor below,
 * so the old hardcoded links keep working without being rewritten.
 */
const ROUTES = {
  "/": IndexPage,
  "/components": ComponentsPage,
  "/prompts": PromptsPage,
  "/lesson-html": LessonHtmlPage,
  "/lesson-html-2": LessonHtml2Page,
  "/lesson-css": LessonCssPage,
  "/lesson-css-2": LessonCss2Page,
  "/lesson-js": LessonJsPage,
  "/lesson-layout": LessonLayoutPage,
  "/lesson-layout-2": LessonLayout2Page,
  "/lesson-react": LessonReactApp,
  "/k8s": K8sPage,
};
const ROUTE_PATHS = new Set(Object.keys(ROUTES));

/**
 * Intercept clicks on internal `<a href="*.html">` links (both React-authored
 * pages and the raw HTML injected by legacy lessons) and turn them into
 * in-app route changes. Leaves external links, hash anchors, and
 * modifier-clicks (cmd/ctrl/shift/middle) alone.
 */
function useHtmlLinkNavigation() {
  const navigate = useNavigate();
  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;

      const file = rawHref.split("/").pop().split("?")[0].split("#")[0];
      if (!file.endsWith(".html")) return;

      const name = file.slice(0, -".html".length);
      const path = name === "index" ? "/" : `/${name}`;
      if (!ROUTE_PATHS.has(path)) return;

      event.preventDefault();
      navigate(path);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);
}

/** Reset scroll position on every route change. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Shell() {
  useHtmlLinkNavigation();
  return (
    <>
      <ScrollToTop />
      <Routes>
        {Object.entries(ROUTES).map(([path, Component]) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<IndexPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import { TRACKS } from "@/tracks/registry.js";

export function withBase(path = "") {
  if (!path || path.startsWith("#") || /^[a-z]+:/i.test(path)) return path;
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${normalizedBase}${normalizedPath}`;
}

export function CopyButton({ text, className = "" }) {
  const [label, setLabel] = useState("复制");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setLabel("已复制");
      window.setTimeout(() => setLabel("复制"), 1200);
    } catch {
      setLabel("失败");
    }
  }

  return (
    <button className={`copy-button${className ? ` ${className}` : ""}`} type="button" onClick={handleCopy}>
      {label}
    </button>
  );
}

export function PageFrame({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children;
}

function NavDropdown({ track, currentPath }) {
  const [open, setOpen] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div className={`nav-dropdown${open ? " is-open" : ""}`} ref={ref}>
      <a
        className={`nav-dropdown-link${currentPath === track.href ? " is-current" : ""}`}
        href={withBase(track.href)}
        onClick={() => setOpen(false)}
      >
        {track.name}
      </a>
      <button
        type="button"
        className="nav-dropdown-caret"
        aria-label={`${track.name} 课程目录`}
        aria-expanded={open}
        onClick={(e) => {
          e.preventDefault();
          setOpen((v) => !v);
        }}
      >
        ▾
      </button>
      <div className="nav-dropdown-menu">
        {track.nav.map((p) => (
          <a
            key={p.href}
            href={withBase(p.href)}
            className={currentPath === p.href ? "is-current" : ""}
            onClick={() => setOpen(false)}
          >
            {p.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export function SiteNav({ currentPath = "" }) {
  return (
    <nav className="nav-links">
      {TRACKS.map((track) =>
        track.nav ? (
          <NavDropdown key={track.id} track={track} currentPath={currentPath} />
        ) : (
          <a key={track.id} href={withBase(track.href)}>
            {track.name}
          </a>
        )
      )}
    </nav>
  );
}

export function StepNav({ prev, next }) {
  return (
    <div className="step-nav">
      {prev ? (
        <a className="step-nav-btn" href={withBase(prev.href)} title={prev.title}>
          ← 上一节
        </a>
      ) : (
        <a className="step-nav-btn" aria-disabled="true">
          ← 上一节
        </a>
      )}
      {next ? (
        <a className="step-nav-btn is-next" href={withBase(next.href)} title={next.title}>
          下一节 →
        </a>
      ) : (
        <a className="step-nav-btn is-next" aria-disabled="true">
          下一节 →
        </a>
      )}
    </div>
  );
}

export function CycleText({ items, interval = 1800 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [items, interval]);

  return (
    <span className="cycle-container">
      {items.map((item, itemIndex) => (
        <span
          key={item}
          className={`cycle-item${itemIndex === index ? " active" : ""}`}
          aria-hidden={itemIndex !== index}
        >
          {item}
        </span>
      ))}
    </span>
  );
}

export function PromptLibrary({ prompts, filterLabels }) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const visiblePrompts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return prompts.filter((prompt) => {
      const categoryMatch = activeFilter === "all" || prompt.category === activeFilter;
      const queryMatch = !normalized || `${prompt.label} ${prompt.title} ${prompt.text}`.toLowerCase().includes(normalized);
      return categoryMatch && queryMatch;
    });
  }, [activeFilter, prompts, query]);

  return (
    <>
      <div className="prompt-toolbar">
        <input
          className="prompt-search"
          type="search"
          placeholder="Search prompts by page, component, state, or stack..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className="filter-row">
        {filterLabels.map((filter) => (
          <button
            key={filter.value}
            className={`filter-button${activeFilter === filter.value ? " active" : ""}`}
            type="button"
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="prompt-grid">
        {visiblePrompts.map((prompt) => (
          <article key={prompt.id} className="prompt-card">
            <span className="micro-label">{prompt.label}</span>
            <h3>{prompt.title}</h3>
            <div className="prompt-block" id={prompt.id}>{prompt.text}</div>
            <CopyButton text={prompt.text} />
          </article>
        ))}
      </div>
    </>
  );
}

import React, { useEffect, useMemo, useState } from "react";

export function CopyButton({ text }) {
  const [label, setLabel] = useState("Copy Prompt");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setLabel("Copied");
      window.setTimeout(() => setLabel("Copy Prompt"), 1200);
    } catch {
      setLabel("Copy failed");
    }
  }

  return (
    <button className="copy-button" type="button" onClick={handleCopy}>
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
        <span key={item} className={`cycle-item${itemIndex === index ? " active" : ""}`}>
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

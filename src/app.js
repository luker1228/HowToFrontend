document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-cycle]").forEach((container) => {
    const items = Array.from(container.querySelectorAll(".cycle-item"));
    if (items.length < 2) return;
    let index = 0;
    window.setInterval(() => {
      items[index].classList.remove("active");
      index = (index + 1) % items.length;
      items[index].classList.add("active");
    }, 1800);
  });

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.getAttribute("data-copy-target");
      const target = document.getElementById(targetId);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        const original = button.textContent;
        button.textContent = "Copied";
        setTimeout(() => {
          button.textContent = original;
        }, 1200);
      } catch (_) {
        button.textContent = "Copy failed";
      }
    });
  });

  const promptSearch = document.querySelector("[data-prompt-search]");
  const promptCards = Array.from(document.querySelectorAll("[data-prompt-card]"));
  const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  let activeFilter = "all";

  function filterPromptCards() {
    const query = (promptSearch?.value || "").trim().toLowerCase();
    promptCards.forEach((card) => {
      const category = card.getAttribute("data-category") || "";
      const text = card.textContent.toLowerCase();
      const categoryMatch = activeFilter === "all" || category === activeFilter;
      const queryMatch = !query || text.includes(query);
      card.setAttribute("data-hidden", String(!(categoryMatch && queryMatch)));
    });
  }

  if (promptSearch) {
    promptSearch.addEventListener("input", filterPromptCards);
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.getAttribute("data-filter") || "all";
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      filterPromptCards();
    });
  });

  filterPromptCards();

  const toc = document.querySelector(".lesson-aside .toc-list");
  const proseSections = Array.from(document.querySelectorAll(".lesson-prose .lesson-section[id]"));
  if (toc && proseSections.length) {
    const links = Array.from(toc.querySelectorAll("a"));
    const linkFor = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        let bestId = null;
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestId) {
          links.forEach((a) => a.classList.toggle("is-active", a === linkFor.get(bestId)));
        }
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: [0, 0.1, 0.5, 1] }
    );
    proseSections.forEach((section) => observer.observe(section));
  }

  document.querySelectorAll("[data-playground]").forEach((root) => {
    const source = root.querySelector("[data-playground-source]");
    const preview = root.querySelector("[data-playground-preview]");
    const resetBtn = root.querySelector("[data-playground-reset]");
    const cssTemplate = root.querySelector("[data-playground-css]");
    const htmlTemplate = root.querySelector("[data-playground-html]");
    if (!source || !preview || !cssTemplate || !htmlTemplate) return;

    const defaultCss = cssTemplate.textContent.trim();
    const baseCss = root.querySelector("[data-playground-base-css]")?.textContent.trim();
    const baseBeforeCss = root.querySelector("[data-playground-base-before-css]")?.textContent.trim();
    const baseAfterCss = root.querySelector("[data-playground-base-after-css]")?.textContent.trim();
    const html = htmlTemplate.textContent.trim();
    source.value = defaultCss;

    function render() {
      const css = [baseBeforeCss || baseCss, source.value, baseAfterCss].filter(Boolean).join("\n");
      const doc = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${css}</style>${html}`;
      preview.srcdoc = doc;
    }

    let timer;
    source.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(render, 150);
    });

    resetBtn?.addEventListener("click", () => {
      source.value = defaultCss;
      render();
    });

    render();
  });
});

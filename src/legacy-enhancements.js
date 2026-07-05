export function initLegacyEnhancements(root = document) {
  const cleanups = [];

  root.querySelectorAll(".nav-links a[data-perspectives]").forEach((link) => {
    let perspectives = [];
    try {
      perspectives = JSON.parse(link.getAttribute("data-perspectives") || "[]");
    } catch {
      perspectives = [];
    }
    if (!perspectives.length) return;

    const wrapper = document.createElement("div");
    wrapper.className = "nav-dropdown";
    link.parentNode.insertBefore(wrapper, link);
    wrapper.appendChild(link);

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "nav-dropdown-trigger";
    trigger.textContent = link.textContent;
    link.parentNode.replaceChild(trigger, link);

    const menu = document.createElement("div");
    menu.className = "nav-dropdown-menu";
    perspectives.forEach((p) => {
      const item = document.createElement("a");
      item.href = p.href;
      item.textContent = p.text;
      if (p.current) item.classList.add("is-current");
      menu.appendChild(item);
    });
    wrapper.appendChild(menu);

    const toggle = (open) => {
      wrapper.classList.toggle("is-open", open);
    };
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      toggle(!wrapper.classList.contains("is-open"));
    });
    const onDocClick = (e) => {
      if (!wrapper.contains(e.target)) toggle(false);
    };
    document.addEventListener("click", onDocClick);
    const onEsc = (e) => {
      if (e.key === "Escape") toggle(false);
    };
    document.addEventListener("keydown", onEsc);
    cleanups.push(() => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    });
  });

  root.querySelectorAll("[data-cycle]").forEach((container) => {
    const items = Array.from(container.querySelectorAll(".cycle-item"));
    if (items.length < 2) return;
    let index = 0;
    const timer = window.setInterval(() => {
      items[index].classList.remove("active");
      index = (index + 1) % items.length;
      items[index].classList.add("active");
    }, 1800);
    cleanups.push(() => window.clearInterval(timer));
  });

  root.querySelectorAll("[data-copy-target]").forEach((button) => {
    const handler = async () => {
      const targetId = button.getAttribute("data-copy-target");
      const target = root.getElementById ? root.getElementById(targetId) : document.getElementById(targetId);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        const original = button.textContent;
        button.textContent = "Copied";
        window.setTimeout(() => {
          button.textContent = original;
        }, 1200);
      } catch (_) {
        button.textContent = "Copy failed";
      }
    };
    button.addEventListener("click", handler);
    cleanups.push(() => button.removeEventListener("click", handler));
  });

  const promptSearch = root.querySelector("[data-prompt-search]");
  const promptCards = Array.from(root.querySelectorAll("[data-prompt-card]"));
  const filterButtons = Array.from(root.querySelectorAll("[data-filter]"));
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
    cleanups.push(() => promptSearch.removeEventListener("input", filterPromptCards));
  }

  filterButtons.forEach((button) => {
    const handler = () => {
      activeFilter = button.getAttribute("data-filter") || "all";
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      filterPromptCards();
    };
    button.addEventListener("click", handler);
    cleanups.push(() => button.removeEventListener("click", handler));
  });

  filterPromptCards();

  const proseTargets = Array.from(
    root.querySelectorAll(".lesson-prose .lesson-section[id], .lesson-prose .tag-item[id]")
  );
  const tocLists = Array.from(root.querySelectorAll(".lesson-sidebar .toc-list, .lesson-aside .toc-list"));
  if (tocLists.length && proseTargets.length) {
    const links = tocLists.flatMap((list) => Array.from(list.querySelectorAll("a")));
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
          const parent = bestId
            ? root.getElementById(bestId)?.closest(".lesson-section[id]")
            : null;
          const parentId = parent ? parent.id : null;
          links.forEach((a) => {
            const href = a.getAttribute("href")?.slice(1);
            a.classList.toggle("is-active", href === bestId || href === parentId);
          });
        }
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: [0, 0.1, 0.5, 1] }
    );
    proseTargets.forEach((target) => observer.observe(target));
    cleanups.push(() => observer.disconnect());
  }

  root.querySelectorAll("[data-playground]").forEach((playgroundRoot) => {
    const source = playgroundRoot.querySelector("[data-playground-source]");
    const preview = playgroundRoot.querySelector("[data-playground-preview]");
    const resetBtn = playgroundRoot.querySelector("[data-playground-reset]");
    const cssTemplate = playgroundRoot.querySelector("[data-playground-css]");
    const jsTemplate = playgroundRoot.querySelector("[data-playground-js]");
    const htmlTemplate = playgroundRoot.querySelector("[data-playground-html]");
    if (!source || !preview || !htmlTemplate || (!cssTemplate && !jsTemplate)) return;

    const sourceTemplate = cssTemplate || jsTemplate;
    const defaultSource = sourceTemplate.textContent.trim();
    const baseCss = playgroundRoot.querySelector("[data-playground-base-css]")?.textContent.trim();
    const baseBeforeCss = playgroundRoot.querySelector("[data-playground-base-before-css]")?.textContent.trim();
    const baseAfterCss = playgroundRoot.querySelector("[data-playground-base-after-css]")?.textContent.trim();
    const baseBeforeJs = playgroundRoot.querySelector("[data-playground-base-before-js]")?.textContent.trim();
    const baseAfterJs = playgroundRoot.querySelector("[data-playground-base-after-js]")?.textContent.trim();
    const html = htmlTemplate.textContent.trim();
    source.value = defaultSource;

    function render() {
      const css = [baseBeforeCss || baseCss, cssTemplate ? source.value : null, baseAfterCss].filter(Boolean).join("\n");
      const js = [baseBeforeJs, jsTemplate ? source.value : null, baseAfterJs].filter(Boolean).join("\n");
      const doc = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${css ? `<style>${css}</style>` : ""}${html}${js ? `<script>${js}<\/script>` : ""}`;
      preview.srcdoc = doc;
    }

    let timer;
    const inputHandler = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(render, 150);
    };
    source.addEventListener("input", inputHandler);
    cleanups.push(() => source.removeEventListener("input", inputHandler));

    if (resetBtn) {
      const resetHandler = () => {
        source.value = defaultSource;
        render();
      };
      resetBtn.addEventListener("click", resetHandler);
      cleanups.push(() => resetBtn.removeEventListener("click", resetHandler));
    }

    render();
  });

  root.querySelectorAll(".layer-card").forEach((card) => {
    const items = Array.from(card.querySelectorAll("[data-key]"));
    const byKey = new Map();
    items.forEach((el) => {
      const key = el.getAttribute("data-key");
      if (key) {
        if (!byKey.has(key)) byKey.set(key, []);
        byKey.get(key).push(el);
      }
    });
    const pairs = Array.from(byKey.values());
    pairs.forEach((group) => {
      const enter = () => group.forEach((el) => el.classList.add("is-flash"));
      const leave = () => group.forEach((el) => el.classList.remove("is-flash"));
      group.forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      });
    });
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}

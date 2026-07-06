import { mountLayoutRecipePreviews } from "./layout-recipe-components.jsx";

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

  document.querySelectorAll(".lesson-floating-toc").forEach((toc) => {
    const toggle = toc.querySelector("[data-toc-toggle]");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const collapsed = toc.classList.toggle("is-collapsed");
      toggle.setAttribute("aria-expanded", String(!collapsed));
    });
  });

  const proseSections = Array.from(
    document.querySelectorAll(".lesson-prose .lesson-section[id], .lesson-prose .playground-section[id], .html2-body-section[id]")
  );
  const tocLists = Array.from(document.querySelectorAll(".lesson-sidebar .toc-list, .lesson-aside .toc-list"));
  if (tocLists.length && proseSections.length) {
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
          links.forEach((a) => {
            const href = a.getAttribute("href")?.slice(1);
            a.classList.toggle("is-active", href === bestId);
          });
        }
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: [0, 0.1, 0.5, 1] }
    );
    proseSections.forEach((section) => observer.observe(section));
  }

  document.querySelectorAll("[data-atlas-demo]").forEach((root) => {
    const tabs = Array.from(root.querySelectorAll("[data-atlas-tab]"));
    const views = Array.from(root.querySelectorAll("[data-atlas-view]"));
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-atlas-tab");
        tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
        views.forEach((view) => view.classList.toggle("is-active", view.getAttribute("data-atlas-view") === target));
      });
    });
  });

  document.querySelectorAll("[data-demo-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const feedback = button.closest("[data-atlas-demo]")?.querySelector("[data-button-feedback]");
      if (!feedback) return;
      const messages = {
        save: "你点击了主按钮，通常会触发提交或保存。",
        cancel: "你点击了次按钮，通常会回退当前操作。",
        delete: "你点击了危险按钮，通常要再弹一次确认。 ",
      };
      feedback.textContent = messages[button.getAttribute("data-demo-button")] || "点击一个按钮试试。";
    });
  });

  document.querySelectorAll("[data-demo-input]").forEach((input) => {
    const valueNode = input.closest("[data-atlas-demo]")?.querySelector("[data-input-value]");
    if (!valueNode) return;
    input.addEventListener("input", () => {
      valueNode.textContent = input.value || "(空)";
    });
  });

  document.querySelectorAll("[data-select-demo]").forEach((root) => {
    const trigger = root.querySelector("[data-select-trigger]");
    const menu = root.querySelector("[data-select-menu]");
    const value = root.querySelector("[data-select-value]");
    const options = Array.from(root.querySelectorAll("[data-select-option]"));
    if (!trigger || !menu || !value) return;

    trigger.addEventListener("click", () => {
      menu.hidden = !menu.hidden;
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        value.textContent = option.getAttribute("data-select-option") || option.textContent || "";
        menu.hidden = true;
      });
    });
  });

  document.querySelectorAll("[data-tabs-demo]").forEach((root) => {
    const buttons = Array.from(root.querySelectorAll("[data-tabs-option]"));
    const valueNode = root.closest("[data-atlas-demo]")?.querySelector("[data-tabs-value]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        if (valueNode) valueNode.textContent = button.getAttribute("data-tabs-option") || button.textContent || "";
      });
    });
  });

  document.querySelectorAll("[data-modal-demo]").forEach((root) => {
    const panel = root.querySelector("[data-modal-panel]");
    root.querySelector("[data-modal-open]")?.addEventListener("click", () => {
      if (panel) panel.hidden = false;
    });
    root.querySelectorAll("[data-modal-close]").forEach((button) => {
      button.addEventListener("click", () => {
        if (panel) panel.hidden = true;
      });
    });
  });

  document.querySelectorAll("[data-drawer-demo]").forEach((root) => {
    const panel = root.querySelector("[data-drawer-panel]");
    root.querySelector("[data-drawer-open]")?.addEventListener("click", () => {
      if (panel) panel.hidden = false;
    });
    root.querySelector("[data-drawer-close]")?.addEventListener("click", () => {
      if (panel) panel.hidden = true;
    });
  });

  document.querySelectorAll("[data-pagination-demo]").forEach((root) => {
    const pageButtons = Array.from(root.querySelectorAll("[data-page]"));
    const valueNode = root.closest("[data-atlas-demo]")?.querySelector("[data-page-value]");
    let page = 1;

    function syncPage() {
      pageButtons.forEach((button) => {
        button.classList.toggle("is-active", Number(button.getAttribute("data-page")) === page);
      });
      if (valueNode) valueNode.textContent = String(page);
    }

    root.querySelectorAll("[data-page]").forEach((button) => {
      button.addEventListener("click", () => {
        page = Number(button.getAttribute("data-page")) || 1;
        syncPage();
      });
    });

    root.querySelector("[data-page-nav='prev']")?.addEventListener("click", () => {
      page = Math.max(1, page - 1);
      syncPage();
    });

    root.querySelector("[data-page-nav='next']")?.addEventListener("click", () => {
      page = Math.min(pageButtons.length, page + 1);
      syncPage();
    });
  });

  document.querySelectorAll("[data-playground]").forEach((root) => {
    const source = root.querySelector("[data-playground-source]");
    const preview = root.querySelector("[data-playground-preview]");
    const resetBtn = root.querySelector("[data-playground-reset]");
    const cssTemplate = root.querySelector("[data-playground-css]");
    const jsTemplate = root.querySelector("[data-playground-js]");
    const htmlTemplate = root.querySelector("[data-playground-html]");
    if (!preview || !htmlTemplate || (!cssTemplate && !jsTemplate)) return;

    const sourceTemplate = cssTemplate || jsTemplate;
    const defaultSource = sourceTemplate.textContent.trim();
    const baseCss = root.querySelector("[data-playground-base-css]")?.textContent.trim();
    const baseBeforeCss = root.querySelector("[data-playground-base-before-css]")?.textContent.trim();
    const baseAfterCss = root.querySelector("[data-playground-base-after-css]")?.textContent.trim();
    const baseBeforeJs = root.querySelector("[data-playground-base-before-js]")?.textContent.trim();
    const baseAfterJs = root.querySelector("[data-playground-base-after-js]")?.textContent.trim();
    const html = htmlTemplate.textContent.trim();
    if (source) {
      source.value = defaultSource;
    }

    function render() {
      const currentSource = source ? source.value : defaultSource;
      const css = [baseBeforeCss || baseCss, cssTemplate ? currentSource : null, baseAfterCss].filter(Boolean).join("\n");
      const js = [baseBeforeJs, jsTemplate ? currentSource : null, baseAfterJs].filter(Boolean).join("\n");
      const doc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${css ? `<style>${css}</style>` : ""}</head><body>${html}${js ? `<script>${js}<\/script>` : ""}</body></html>`;
      preview.srcdoc = doc;
    }

    let timer;
    if (source) {
      source.addEventListener("input", () => {
        clearTimeout(timer);
        timer = setTimeout(render, 150);
      });
    }

    if (resetBtn && source) {
      resetBtn.addEventListener("click", () => {
        source.value = defaultSource;
        render();
      });
    }

    render();
  });

  mountLayoutRecipePreviews(document);
});

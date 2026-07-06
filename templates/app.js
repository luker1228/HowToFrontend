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

  const taskGrid = document.getElementById("css-task-grid");
  const htmlTemplate = document.getElementById("css-playground-html");
  if (taskGrid && htmlTemplate) {
    const previewHtml = htmlTemplate.textContent.trim();

    const rules = [
      { selector: "body", props: { "font-family": "\"Instrument Sans\", \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif", "margin": "24px", "background": "#f5f4ee", "color": "#1a1a1a" } },
      { selector: ".card-grid", props: { "display": "grid", "gap": "16px", "grid-template-columns": "repeat(2, 1fr)" } },
      { selector: ".card", props: { "padding": "16px", "border": "1.5px solid #1a1a1a", "border-radius": "12px", "background": "#fff" } },
      { selector: ".card-title", props: { "font-size": "20px", "margin": "0 0 8px" } },
      { selector: ".card-meta", props: { "margin": "0 0 12px", "color": "#6b6b6b" } },
      { selector: ".card-body", props: { "margin": "0 0 16px", "line-height": "1.6" } },
      { selector: ".card-actions", props: { "display": "flex", "gap": "10px", "flex-direction": "row" } },
      { selector: ".card-button", props: { "padding": "8px 14px", "border": "1.5px solid #1a1a1a", "border-radius": "8px", "background": "#fff", "cursor": "pointer" } },
      { selector: ".card-button:hover", props: { "background": "#fff" } },
    ];

    const tasks = [
      { id: "t1", no: "01", title: "拧字号，看层级", desc: "改 <code>.card-title</code> 的 <code>font-size</code>，标题会变得醒目。", selector: ".card-title", prop: "font-size", control: { type: "range", min: 12, max: 48, step: 1, unit: "px", value: 20 } },
      { id: "t2", no: "02", title: "调内边距，看留白", desc: "改 <code>.card</code> 的 <code>padding</code>，卡片内部留白变松。", selector: ".card", prop: "padding", control: { type: "range", min: 4, max: 48, step: 1, unit: "px", value: 16 } },
      { id: "t3", no: "03", title: "加 hover，看反馈", desc: "给 <code>.card-button:hover</code> 设置 <code>background</code>，鼠标移上去看反馈。", selector: ".card-button:hover", prop: "background", control: { type: "color", value: "#1a1a1a" } },
    ];

    function buildCss(overrides) {
      const out = [];
      for (const r of rules) {
        if (r.nested) {
          out.push(r.selector + " {");
          for (const n of r.nested) {
            out.push("  " + n.selector + " {");
            for (const [p, v] of Object.entries(n.props)) {
              const key = n.selector + "|" + p + "|" + r.selector;
              out.push("    " + p + ": " + (overrides[key] ?? v) + ";");
            }
            out.push("  }");
          }
          out.push("}");
        } else {
          out.push(r.selector + " {");
          for (const [p, v] of Object.entries(r.props)) {
            const key = r.selector + "|" + p;
            out.push("  " + p + ": " + (overrides[key] ?? v) + ";");
          }
          out.push("}");
        }
      }
      return out.join("\n");
    }

    function controlHtml(task) {
      const c = task.control;
      if (c.type === "range") {
        return `<input class="rule-input rule-range" type="range" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}"><span class="rule-value">${c.value}${c.unit}</span>`;
      }
      if (c.type === "select") {
        const opts = c.options.map((o, i) => `<option value="${o}"${o === c.value ? " selected" : ""}>${(c.labels && c.labels[i]) || o}</option>`).join("");
        return `<select class="rule-input rule-select">${opts}</select>`;
      }
      if (c.type === "color") {
        return `<input class="rule-input rule-color" type="color" value="${c.value}"><span class="rule-value">${c.value}</span>`;
      }
      return "";
    }

    function rulesHtml(task) {
      const lines = [];
      for (const r of rules) {
        if (r.nested) {
          lines.push(`<span class="rule-selector">${r.selector} {</span>`);
          for (const n of r.nested) {
            lines.push(`<span class="rule-selector">  ${n.selector} {</span>`);
            for (const [p, v] of Object.entries(n.props)) {
              const isHi = task.media === r.selector && n.selector === task.selector && p === task.prop;
              lines.push(isHi
                ? `<span class="rule-row hi">    ${p}: ${controlHtml(task)};</span>`
                : `<span class="rule-row">    ${p}: ${v};</span>`);
            }
            lines.push(`<span class="rule-row">  }</span>`);
          }
          lines.push(`<span class="rule-row">}</span>`);
        } else {
          lines.push(`<span class="rule-selector">${r.selector} {</span>`);
          for (const [p, v] of Object.entries(r.props)) {
            const isHi = !task.media && r.selector === task.selector && p === task.prop;
            lines.push(isHi
              ? `<span class="rule-row hi">  ${p}: ${controlHtml(task)};</span>`
              : `<span class="rule-row">  ${p}: ${v};</span>`);
          }
          lines.push(`<span class="rule-row">}</span>`);
        }
      }
      return lines.join("\n");
    }

    tasks.forEach((task) => {
      const card = document.createElement("div");
      card.className = "task-card";
      card.setAttribute("data-task-id", task.id);
      card.innerHTML = `
        <header class="task-head">
          <span class="task-no">${task.no}</span>
          <div class="task-text">
            <h3>${task.title}</h3>
            <p>${task.desc}</p>
          </div>
        </header>
        <div class="task-body">
          <div class="task-code">
            <span class="micro-label">CSS · 高亮行可改，其余只读</span>
            <pre class="task-rules">${rulesHtml(task)}</pre>
          </div>
          <div class="task-preview ${task.previewMobile ? "is-mobile" : ""}">
            <span class="micro-label">Preview</span>
            <iframe class="task-preview-iframe" title="task preview"></iframe>
          </div>
        </div>`;

      taskGrid.appendChild(card);

      const iframe = card.querySelector(".task-preview-iframe");
      const input = card.querySelector(".rule-input");
      const valueLabel = card.querySelector(".rule-value");

      function currentVal() {
        if (task.control.type === "range") return input.value + task.control.unit;
        return input.value;
      }

      function render() {
        const ov = {};
        if (task.media) {
          ov[task.selector + "|" + task.prop + "|" + task.media] = currentVal();
        } else {
          ov[task.selector + "|" + task.prop] = currentVal();
        }
        const css = buildCss(ov);
        const doc = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo+Expanded:wght@700;800&family=Instrument+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"><style>${css}</style>${previewHtml}`;
        iframe.srcdoc = doc;
      }

      if (task.control.type === "range" || task.control.type === "color") {
        input.addEventListener("input", () => {
          if (valueLabel) valueLabel.textContent = input.value + (task.control.type === "range" ? task.control.unit : "");
          render();
        });
      } else {
        input.addEventListener("change", render);
        input.addEventListener("input", render);
      }

      render();
    });
  }
});

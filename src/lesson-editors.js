document.addEventListener("DOMContentLoaded", () => {
  const editors = document.querySelectorAll("[data-live-editor]");

  editors.forEach((editor) => {
    const textarea = editor.querySelector("[data-editor]");
    const iframe = editor.querySelector("[data-preview]");
    const tabs = editor.querySelectorAll("[data-tab]");
    const panes = editor.querySelectorAll("[data-pane]");
    const section = editor.closest(".lesson-section");
    const template = section?.querySelector("[data-template]");

    if (!textarea || !iframe || !template) return;

    const initialCode = template.innerHTML.trim();
    textarea.value = initialCode;

    const updatePreview = () => {
      const html = textarea.value;
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              padding: 20px;
              line-height: 1.6;
              color: #333;
              margin: 0;
            }
            h1, h2, h3 { margin-top: 1.5em; margin-bottom: 0.5em; }
            p { margin: 0.8em 0; }
            ul, ol { margin: 0.8em 0; padding-left: 1.5em; }
            li { margin: 0.3em 0; }
            code {
              background: #f4f4f4;
              padding: 2px 6px;
              border-radius: 3px;
              font-family: "IBM Plex Mono", monospace;
            }
            pre {
              background: #f4f4f4;
              padding: 12px;
              border-radius: 4px;
              overflow-x: auto;
            }
            header, main, section, footer {
              margin: 1em 0;
            }
          </style>
        </head>
        <body>${html}</body>
        </html>
      `);
      doc.close();
    };

    let timeout;
    textarea.addEventListener("input", () => {
      clearTimeout(timeout);
      timeout = setTimeout(updatePreview, 150);
    });

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        tabs.forEach((t) => t.classList.toggle("active", t === tab));
        panes.forEach((p) => p.classList.toggle("active", p.dataset.pane === target));
        if (target === "preview") updatePreview();
      });
    });

    updatePreview();
  });
});

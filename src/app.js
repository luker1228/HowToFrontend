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
});

(function () {
  var storageKey = "edusdk-theme";
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function getToggles() {
    return Array.prototype.slice.call(document.querySelectorAll("[data-theme-toggle]"));
  }

  function readStoredTheme() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function writeStoredTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {
      return;
    }
  }

  function readExistingTheme() {
    var existing = root.getAttribute("data-theme");
    return existing === "light" || existing === "dark" ? existing : null;
  }

  function readPreferredTheme() {
    var stored = readStoredTheme();
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    var existing = readExistingTheme();
    if (existing) {
      return existing;
    }

    if (media && media.matches) {
      return "dark";
    }

    return "light";
  }

  function updateToggle(toggle, theme) {
    var isDark = theme === "dark";
    var label = toggle.querySelector("[data-theme-label]");
    var icon = toggle.querySelector("[data-theme-icon]");

    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");

    if (label) {
      label.textContent = isDark ? "Modo light" : "Modo dark";
    }

    if (icon) {
      icon.innerHTML = isDark ? "&#9728;" : "&#9790;";
    }
  }

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    getToggles().forEach(function (toggle) {
      updateToggle(toggle, theme);
    });

    if (persist) {
      writeStoredTheme(theme);
    }
  }

  function toggleTheme() {
    var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark", true);
  }

  function closestToggle(node) {
    while (node && node !== document) {
      if (node.getAttribute && node.hasAttribute("data-theme-toggle")) {
        return node;
      }
      node = node.parentNode;
    }
    return null;
  }

  function onDocumentClick(event) {
    var toggle = closestToggle(event.target);
    if (!toggle) {
      return;
    }
    toggleTheme();
  }

  function init() {
    applyTheme(readPreferredTheme(), false);
    document.addEventListener("click", onDocumentClick);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}());



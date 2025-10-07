document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const toggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // Initialize icon based on current theme
  const updateIcon = () => {
    const isDark = html.classList.contains("dark");
    if (isDark) {
      themeIcon?.classList.remove("fa-sun");
      themeIcon?.classList.add("fa-moon");
    } else {
      themeIcon?.classList.remove("fa-moon");
      themeIcon?.classList.add("fa-sun");
    }
  };

  // Set initial icon
  updateIcon();

  // Toggle dark/light mode
  toggleButton?.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcon();
  });
});

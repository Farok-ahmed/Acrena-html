document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const toggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // Initialize icon
  if (html.classList.contains("dark")) {
    themeIcon?.classList.add("fa-moon");
  } else {
    themeIcon?.classList.add("fa-sun");
  }

  // Toggle dark/light mode
  toggleButton?.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    themeIcon?.classList.toggle("fa-moon", isDark);
    themeIcon?.classList.toggle("fa-sun", !isDark);
  });
});

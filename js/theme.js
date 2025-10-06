// const body = document.body;
// const themeToggleBtn = document.getElementById("themeToggle");

// // 1. Apply saved theme on page load
// if (localStorage.getItem("theme") === "dark") {
//   body.classList.add("dark-mode");
//   if (themeToggleBtn) themeToggleBtn.textContent = "☀️ Light Mode";
// } else {
//   if (themeToggleBtn) themeToggleBtn.textContent = "🌙 Dark Mode";
// }

// // 2. Toggle theme and save preference
// if (themeToggleBtn) {
//   themeToggleBtn.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");

//     if (body.classList.contains("dark-mode")) {
//       localStorage.setItem("theme", "dark");
//       themeToggleBtn.textContent = "☀️ Light Mode";
//     } else {
//       localStorage.setItem("theme", "light");
//       themeToggleBtn.textContent = "🌙 Dark Mode";
//     }
//   });
// }

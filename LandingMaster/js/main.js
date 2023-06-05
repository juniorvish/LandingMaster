document.addEventListener("DOMContentLoaded", initializePage);

function initializePage() {
  loadContent();
  applyTailwindStyles();
}

function loadContent() {
  const header = document.getElementById("header");
  const mainContent = document.getElementById("mainContent");
  const footer = document.getElementById("footer");

  header.innerHTML = "<h1>Welcome to LandingMaster</h1>";
  mainContent.innerHTML = "<p>This is a simple landing page created using Tailwind CSS.</p>";
  footer.innerHTML = "<p>&copy; 2022 LandingMaster. All rights reserved.</p>";
}

function applyTailwindStyles() {
  const header = document.getElementById("header");
  const mainContent = document.getElementById("mainContent");
  const footer = document.getElementById("footer");

  header.classList.add("text-center", "text-4xl", "font-bold", "my-8");
  mainContent.classList.add("text-center", "text-xl", "mb-8");
  footer.classList.add("text-center", "text-sm", "pb-4");
}
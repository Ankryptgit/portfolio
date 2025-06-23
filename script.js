// Toggle navbar
function toggleMenu() {
  const navLinks = document.querySelector("nav ul");
  navLinks.classList.toggle("show");
}

// Dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide scroll button
window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Typing effect
const typing = document.querySelector(".typing");
const texts = ["a Web Developer", "a GATE Aspirant", "a Problem Solver"];
let idx = 0, charIdx = 0;

function type() {
  if (charIdx <= texts[idx].length) {
    typing.textContent = texts[idx].substring(0, charIdx++);
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIdx > 0) {
    typing.textContent = texts[idx].substring(0, --charIdx);
    setTimeout(erase, 60);
  } else {
    idx = (idx + 1) % texts.length;
    setTimeout(type, 300);
  }
}

type();

// Project filter
function filterProjects(type) {
  const cards = document.querySelectorAll(".project-card");
  document.querySelectorAll(".project-filters button").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  cards.forEach(card => {
    if (type === "all" || card.classList.contains(type)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (window.innerWidth <= 768) {
      navLinks.classList.remove("active");
    }
  });
});

function sendMessage() {
  document.getElementById("sendMessageBtn").style.display = "none";

  document.getElementById("successMessage").style.display = "block";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

function toggleTheme() {
  const body = document.body;
  const lightModeIcon = document.getElementById("light-mode-icon");
  const darkModeIcon = document.getElementById("dark-mode-icon");

  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    darkModeIcon.classList.remove("hidden");
    lightModeIcon.classList.add("hidden");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.add("light-mode");
    lightModeIcon.classList.remove("hidden");
    darkModeIcon.classList.add("hidden");
    localStorage.setItem("theme", "light");
  }
}

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const lightModeIcon = document.getElementById("light-mode-icon");
  const darkModeIcon = document.getElementById("dark-mode-icon");

  if (savedTheme === "light") {
    body.classList.add("light-mode");
    lightModeIcon.classList.remove("hidden");
    darkModeIcon.classList.add("hidden");
  } else {
    body.classList.remove("light-mode");
    darkModeIcon.classList.remove("hidden");
    lightModeIcon.classList.add("hidden");
  }
};

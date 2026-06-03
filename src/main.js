import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  // ======================================
  // AUTHENTICATION for login and register
  // ======================================
  const loginSection = document.getElementById("login-section");
  const registerSection = document.getElementById("register-section");
  const showRegBtn = document.getElementById("show-register-btn");
  const showLoginBtn = document.getElementById("show-login-btn");

  if (showRegBtn && showLoginBtn) {
    showRegBtn.addEventListener("click", () => {
      loginSection.classList.add("hidden");
      registerSection.classList.remove("hidden");
    });
    showLoginBtn.addEventListener("click", () => {
      registerSection.classList.add("hidden");
      loginSection.classList.remove("hidden");
    });
  }
  // ======================================
  // MOBILE MENU
  // ======================================
  const mobileBtn = document.getElementById("mobile-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    });
  }
});

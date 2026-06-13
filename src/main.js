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
  // ========================================
  // CREATE POST
  // ========================================
  const createBtn = document.getElementById("create-btn");
  const desktopCreateBtn = document.getElementById("desktop-create-btn");
  const closeCreatePost = document.getElementById("close-create-post");
  const createPost = document.getElementById("create-post");

  if (closeCreatePost && createPost) {
    const openCreate = () => {
      createPost.classList.remove("hidden");
      createPost.classList.add("flex");
    };
    if (createBtn) {
      createBtn.addEventListener("click", openCreate);
    }
    if (desktopCreateBtn) {
      desktopCreateBtn.addEventListener("click", openCreate);
    }
    closeCreatePost.addEventListener("click", () => {
      createPost.classList.add("hidden");
      createPost.classList.remove("flex");
    });
  }

  const openSearchBtn = document.getElementById("search-btn");
  const desktopSearchBtn = document.getElementById("desktop-search-btn");
  const closeSearchBtn = document.getElementById("close-search-btn");
  const searchBar = document.getElementById("search-bar");

  if (closeSearchBtn && searchBar) {
    const openSearch = () => {
      searchBar.classList.remove("hidden");
      searchBar.classList.add("flex");
    };

    if (openSearchBtn) {
      openSearchBtn.addEventListener("click", openSearch);
    }

    if (desktopSearchBtn) {
      desktopSearchBtn.addEventListener("click", openSearch);
    }

    closeSearchBtn.addEventListener("click", () => {
      searchBar.classList.add("hidden");
      searchBar.classList.remove("flex");
    });
  }

  const passwordInput = document.getElementById("reg-password");
  const confirmInput = document.getElementById("reg-password-twice");

  if (passwordInput && confirmInput) {
    confirmInput.addEventListener("input", () => {
      if (confirmInput.value !== passwordInput.value) {
        confirmInput.setCustomValidity(
          "Passwords do not match, please try again.",
        );
      } else {
        confirmInput.setCustomValidity("");
      }
    });
  }
});

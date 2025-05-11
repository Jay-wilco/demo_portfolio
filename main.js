document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.querySelector("#backToTopBtn");
  const overlay = document.querySelector(".overlay");
  const modalButton = document.querySelector(".modalBtn");
  const closeBtn = document.querySelector(".closeBtn");
  const toggle = document.querySelector("#darkModeToggle");
  const openMenu = document.querySelector(".openMenu");
  const closeMenu = document.querySelector(".closeMenu");
  const mainMenu = document.querySelector(".mainMenu");
  const menuLinks = document.querySelectorAll(".mainMenu a");
  if (toggle) {
    toggle.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
      savePreferences();
    });
  }
  window.onscroll = function () {
    scrollFunction();
  };
  const scrollFunction = () => {
    if (backToTopBtn) {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    }
  };
  const displayElement = () => {
    if (overlay) {
      overlay.classList.toggle("hidden");
    }
  };
  const closeElement = () => {
    if (overlay) {
      overlay.classList.toggle("hidden");
    }
  };
  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", backToTop);
  }
  if (modalButton) {
    modalButton.addEventListener("click", displayElement);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeElement);
  }
  if (openMenu && closeMenu && mainMenu) {
    openMenu.addEventListener("click", () => {
      mainMenu.style.display = "flex";
      mainMenu.style.top = "0";
    });
    closeMenu.addEventListener("click", () => {
      mainMenu.style.top = "-100%";
    });
  }
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mainMenu) {
        mainMenu.style.top = "-100%";
      }
    });
  });
  function savePreferences() {
    const isDarkMode = toggle ? toggle.checked : !1;
    localStorage.setItem("theme", isDarkMode);
  }
  function loadPreferences() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "true") {
      if (toggle) toggle.checked = !0;
      document.body.classList.add("dark-mode");
    } else {
      if (toggle) toggle.checked = !1;
      document.body.classList.remove("dark-mode");
    }
  }
  loadPreferences();
  savePreferences();
});

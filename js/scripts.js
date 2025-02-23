// js/scripts.js

// Smooth scrolling for navigation links (if linking to sections within a page)
document.querySelectorAll('header nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Check if the anchor has a hash (internal link)
    if (this.hash !== "") {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Lightbox Functionality (Fix for images appearing at bottom)
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    document.querySelectorAll(".lightbox-trigger").forEach(img => {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex"; // Ensures Lightbox appears centered
            lightbox.style.justifyContent = "center"; // Centers horizontally
            lightbox.style.alignItems = "center"; // Centers vertically
            lightbox.style.position = "fixed"; // Ensures it appears over content
            lightboxImg.src = this.getAttribute("data-src") || this.src; // Load larger image
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (!lightboxImg.contains(e.target)) { // Ensures clicking outside closes it
            lightbox.style.display = "none";
        }
    });
});


// Mobile Hamburger Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("active");
        });

        // Close menu when clicking a link
        document.querySelectorAll(".menu a").forEach(link => {
            link.addEventListener("click", function () {
                menu.classList.remove("active");
            });
        });
    }
});

// Future JavaScript functionality can be added here.

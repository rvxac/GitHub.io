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

// Lightbox Functionality
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    document.querySelectorAll(".lightbox-trigger").forEach(img => {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.getAttribute("data-src"); // Load larger image
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});

// Future JavaScript functionality can be added here.

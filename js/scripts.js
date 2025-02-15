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

// Future JavaScript functionality can be added here.

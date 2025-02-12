// js/scripts.js

// This file is included in every page and is a placeholder for any interactive features you might want to add later.

// Example: Smooth scrolling for navigation links (if linking to sections within a page)
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

// Hamburger menu toggle
const burger = document.getElementById('burger-menu');
const menu = document.getElementById('menu');

// Add event listener for the hamburger button
burger.addEventListener('click', () => {
    menu.classList.toggle('show'); // Toggle the 'show' class on the menu
});

// Future JavaScript functionality can be added here.

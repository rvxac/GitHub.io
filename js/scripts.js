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
  
  // LIGHTBOX FUNCTIONALITIES
  document.addEventListener("DOMContentLoaded", function () {
      let currentImageIndex = 0;
      const images = document.querySelectorAll(".group img");
      const captions = document.querySelectorAll(".caption");
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightbox-img");
      const lightboxCaption = document.getElementById("lightbox-caption");
  
      function openLightbox(index) {
          currentImageIndex = index;
          lightbox.classList.remove("hidden");
          updateLightbox();
      }
  
      function closeLightbox() {
          lightbox.classList.add("hidden");
      }
  
      function prevImage() {
          if (currentImageIndex > 0) {
              currentImageIndex--;
              updateLightbox();
          }
      }
  
      function nextImage() {
          if (currentImageIndex < images.length - 1) {
              currentImageIndex++;
              updateLightbox();
          }
      }
  
      function updateLightbox() {
          lightboxImg.src = images[currentImageIndex].src;
          lightboxCaption.textContent = captions[currentImageIndex].textContent;
      }
  
      // Attach click event to each image
      images.forEach((img, index) => {
          img.addEventListener("click", function () {
              openLightbox(index);
          });
      });
  

     // Only close the lightbox if the click is NOT on the image or navigation buttons
      lightbox.addEventListener("click", function (e) {
        if (!lightboxImg.contains(e.target) && !e.target.closest("button")) {
            closeLightbox();
        }
    });
    
  
      // Attach buttons to functions
      document.getElementById("prev").addEventListener("click", prevImage);
      document.getElementById("next").addEventListener("click", nextImage);
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
  
$(window).on('load', function () {
  $('#preloader').fadeOut('slow');
});
$(document).ready(function () {
  // Listen for click events on menu items
  $('.navbar-nav a.nav-link').on('click', function () {
    // Check if the navbar is in mobile view
    if ($('.navbar-toggler').is(':visible')) {
      // Close the navbar by triggering a click on the toggler button
      $('.navbar-toggler').click();
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  function lazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    const iframes = document.querySelectorAll('iframe[data-src]');
    const bgElements = document.querySelectorAll('[data-bg]');

    images.forEach(function (image) {
      if (
        image.getBoundingClientRect().top < window.innerHeight &&
        !image.loaded
      ) {
        image.src = image.getAttribute('data-src');
        image.loaded = true;
      }
    });

    iframes.forEach(function (iframe) {
      if (
        iframe.getBoundingClientRect().top < window.innerHeight &&
        !iframe.loaded
      ) {
        iframe.src = iframe.getAttribute('data-src');
        iframe.loaded = true;
      }
    });

    bgElements.forEach(function (bgElement) {
      if (
        bgElement.getBoundingClientRect().top < window.innerHeight &&
        !bgElement.loaded
      ) {
        const dataSrc = bgElement.getAttribute('data-bg');
        bgElement.style.backgroundImage = `url(${dataSrc})`;
        bgElement.classList.add('loaded'); // Optionally, add a class for styling
        bgElement.loaded = true;
      }
    });
  }

  // Initial load
  lazyLoad();

  // Add a scroll event listener to load images, iframes, and background images as the user scrolls
  window.addEventListener('scroll', lazyLoad);
});
// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the element with id "currentYear"
document.getElementById('currentYear').textContent = currentYear;

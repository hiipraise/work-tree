// doesn't close the menu when clicking outside the navigation link
// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('.nav-menu');
//     const hamburgerIcon = hamburger.querySelector('i');

//     hamburger.addEventListener('click', () => {
//         // Toggle menu visibility
//         navMenu.classList.toggle('active');

//         // Toggle between hamburger and close icons
//         if (navMenu.classList.contains('active')) {
//             hamburgerIcon.classList.remove('fa-bars');
//             hamburgerIcon.classList.add('fa-xmark');
//         } else {
//             hamburgerIcon.classList.remove('fa-xmark');
//             hamburgerIcon.classList.add('fa-bars');
//         }
//     });

//     // Optional: Close menu when clicking a nav link
//     document.querySelectorAll('.nav-link').forEach(link => {
//         link.addEventListener('click', () => {
//             navMenu.classList.remove('active');
//             hamburgerIcon.classList.remove('fa-xmark');
//             hamburgerIcon.classList.add('fa-bars');
//         });
//     });
// });

// added on click on outside of the navigation menu close the menu (the code is more short)
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const hamburgerIcon = hamburger.querySelector("i");

  // Toggle menu function
  function toggleMenu() {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-xmark");
    } else {
      hamburgerIcon.classList.remove("fa-xmark");
      hamburgerIcon.classList.add("fa-bars");
    }
  }

  // Close menu function
  function closeMenu() {
    navMenu.classList.remove("active");
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
  }

  // Hamburger click handler
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to document
    toggleMenu();
  });

  // Close menu when clicking nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    const isClickInsideNav = navMenu.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (
      !isClickInsideNav &&
      !isClickOnHamburger &&
      navMenu.classList.contains("active")
    ) {
      closeMenu();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon i");
    const navBtn1 = document.querySelector(".nav-btn1");
  
    // Toggle the menu on click
    menuIcon.addEventListener("click", function (event) {
      navBtn1.classList.toggle("active");
      menuIcon.classList.toggle("fa-bars");
      menuIcon.classList.toggle("fa-times");
      event.stopPropagation(); // Prevent the event from propagating to the window
    });
  
    // Close the menu when clicking outside
    window.addEventListener("click", function () {
      if (navBtn1.classList.contains("active")) {
        navBtn1.classList.remove("active");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      }
    });
  
    // Prevent menu closing when clicking inside the menu
    navBtn1.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
  
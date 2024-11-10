// Menu Toggle
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100; // Menggunakan sec untuk setiap section
    let height = sec.scrollHeight;
    let id = sec.getAttribute("id");

    if (top > offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });

  // Sticky Header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove Toggle Icon and Navbar When Click On Navbar Link (Scroll)
  if (
    menuIcon.classList.contains("bx-x") &&
    navbar.classList.contains("active")
  ) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
};

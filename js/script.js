// Menu Toggle
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let rect = sec.getBoundingClientRect();
    let id = sec.getAttribute("id");

    // Jika elemen terlihat di layar, aktifkan link navbar yang sesuai
    if (
      rect.top <= window.innerHeight * 0.5 &&
      rect.bottom >= window.innerHeight * 0.5
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });

      // Menambahkan kelas animasi untuk elemen yang muncul
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  // Sticky Header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Menutup navbar pada klik
  if (
    menuIcon.classList.contains("bx-x") &&
    navbar.classList.contains("active")
  ) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }

  // Animation footer on scroll
  let footer = document.querySelector("footer");
  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

// Event Listener untuk memperbarui status active saat link navbar diklik
navLinks.forEach((link) => {
  link.onclick = () => {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    link.classList.add("active");

    // Gulir ke elemen yang sesuai
    let targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };
});

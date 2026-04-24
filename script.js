const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const yearNode = document.getElementById("current-year");
const sections = document.querySelectorAll("main section[id]");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!siteNav || !navToggle) {
      return;
    }

    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const isMatch = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isMatch);
  });
};

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-35% 0px -50% 0px",
      threshold: 0.15
    }
  );

  sections.forEach((section) => observer.observe(section));
}

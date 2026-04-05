document.documentElement.classList.add("js");

const yearEl = document.getElementById("year");
const topNav = document.querySelector(".top-nav");
const menuBtn = document.getElementById("menuBtn");
const navLinksWrap = document.getElementById("navLinks");
const navLinks = document.querySelectorAll(".nav-links a");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.querySelectorAll("main section").forEach((section) => {
  const items = section.querySelectorAll(".reveal");
  items.forEach((el, i) => {
    el.style.setProperty("--reveal-delay", `${Math.min(i * 65, 280)}ms`);
  });
});

menuBtn?.addEventListener("click", () => {
  const open = navLinksWrap.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinksWrap.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  topNav.classList.toggle("scrolled", window.scrollY > 14);
});

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);

revealEls.forEach((el) => revealObserver.observe(el));

const sections = document.querySelectorAll("main section[id]");
const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  { threshold: 0.48 }
);

sections.forEach((section) => activeObserver.observe(section));

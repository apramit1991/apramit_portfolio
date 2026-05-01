document.documentElement.classList.add("js");

const yearEl = document.getElementById("year");
const topNav = document.querySelector(".top-nav");
const menuBtn = document.getElementById("menuBtn");
const topLinks = document.getElementById("topLinks");
const caseNav = document.getElementById("caseNav");
const navLinks = Array.from(caseNav?.querySelectorAll("a") || []);
const revealEls = Array.from(document.querySelectorAll(".reveal"));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHoverMotion =
  !reduceMotion &&
  window.matchMedia("(hover: hover)").matches &&
  window.matchMedia("(pointer: fine)").matches;

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

revealEls.forEach((el, idx) => {
  el.style.setProperty("--reveal-delay", `${Math.min((idx % 8) * 70, 350)}ms`);
});

menuBtn?.addEventListener("click", () => {
  const isOpen = topLinks?.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

document.querySelectorAll(".top-links a, #caseNav a").forEach((link) => {
  link.addEventListener("click", () => {
    topLinks?.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener(
  "scroll",
  () => {
    topNav?.classList.toggle("scrolled", window.scrollY > 12);
  },
  { passive: true }
);

if (!reduceMotion) {
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
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (navLinks.length) {
  navLinks[0].classList.add("active");
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const currentId = `#${entry.target.id}`;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === currentId);
      });
    });
  },
  { threshold: 0.35, rootMargin: "-20% 0px -45% 0px" }
);

observedSections.forEach((section) => sectionObserver.observe(section));

if (canHoverMotion) {
  const heroVisual = document.querySelector(".hero-visual");
  heroVisual?.addEventListener("pointermove", (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 2.4;
    const rotateX = (0.5 - py) * 2.4;
    heroVisual.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  heroVisual?.addEventListener("pointerleave", () => {
    heroVisual.style.transform = "";
  });
}

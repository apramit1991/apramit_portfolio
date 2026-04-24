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
    const rotateY = (px - 0.5) * 2.2;
    const rotateX = (0.5 - py) * 2.2;
    heroVisual.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  heroVisual?.addEventListener("pointerleave", () => {
    heroVisual.style.transform = "";
  });
}

const carousel = document.querySelector("[data-carousel]");

if (carousel) {
  const track = carousel.querySelector("[data-track]");
  const slides = Array.from(track?.querySelectorAll(".showcase-slide") || []);
  const prevBtn = carousel.querySelector("[data-prev]");
  const nextBtn = carousel.querySelector("[data-next]");
  const dotsWrap = document.querySelector("[data-dots]");
  let current = Math.max(
    0,
    slides.findIndex((slide) => slide.classList.contains("is-active"))
  );

  const createDots = () => {
    if (!dotsWrap) return [];
    dotsWrap.innerHTML = "";
    return slides.map((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "showcase-dot";
      dot.setAttribute("aria-label", `Go to screen ${index + 1}`);
      dotsWrap.append(dot);
      dot.addEventListener("click", () => sync(index));
      return dot;
    });
  };

  const dots = createDots();

  const sync = (nextIndex) => {
    if (!slides.length || !track) return;

    current = (nextIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;

    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === current);
      slide.setAttribute("aria-hidden", String(index !== current));
    });

    dots.forEach((dot, index) => {
      const active = index === current;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", active ? "true" : "false");
    });
  };

  prevBtn?.addEventListener("click", () => sync(current - 1));
  nextBtn?.addEventListener("click", () => sync(current + 1));

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      sync(current + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      sync(current - 1);
    }
  });

  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true }
  );

  carousel.addEventListener(
    "touchend",
    (event) => {
      touchEndX = event.changedTouches[0].clientX;
      const delta = touchEndX - touchStartX;
      if (Math.abs(delta) < 36) return;
      if (delta < 0) sync(current + 1);
      if (delta > 0) sync(current - 1);
    },
    { passive: true }
  );

  sync(current);
}

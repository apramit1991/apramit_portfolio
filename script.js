document.documentElement.classList.add("js");

const yearEl = document.getElementById("year");
const navWrap = document.querySelector(".nav-wrap");
const navLinks = document.querySelectorAll(".nav-links a");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navLinks");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("main section").forEach((section) => {
  const items = section.querySelectorAll(".reveal");
  items.forEach((el, i) => {
    el.style.setProperty("--reveal-delay", `${Math.min(i * 70, 280)}ms`);
  });
});

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

menuBtn?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  navWrap.classList.toggle("scrolled", window.scrollY > 12);
});

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

revealEls.forEach((el) => revealObserver.observe(el));

const sections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const currentId = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
      });
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => sectionObserver.observe(section));

const countUpEls = document.querySelectorAll(".count-up");

if (countUpEls.length) {
  const runCountUp = (el) => {
    const target = Number.parseFloat(el.dataset.count || "0");
    const suffix = el.dataset.suffix || "";
    const decimals = Number.parseInt(
      el.dataset.decimals || (String(target).includes(".") ? "1" : "0"),
      10
    );

    if (reduceMotion || !Number.isFinite(target)) {
      el.textContent = `${target.toFixed(decimals)}${suffix}`;
      return;
    }

    const duration = 900;
    const startTime = performance.now();
    const startValue = 0;

    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (target - startValue) * eased;
      el.textContent = `${current.toFixed(decimals)}${suffix}`;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCountUp(entry.target);
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );

  countUpEls.forEach((el) => counterObserver.observe(el));
}

const tiltEls = document.querySelectorAll(".tilt-card");
const canTilt =
  !reduceMotion &&
  window.matchMedia("(hover: hover)").matches &&
  window.matchMedia("(pointer: fine)").matches;

if (canTilt) {
  tiltEls.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 6;
      const rotateX = (0.5 - py) * 6;
      card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

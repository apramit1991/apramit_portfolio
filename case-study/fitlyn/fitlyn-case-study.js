document.documentElement.classList.add("js");

const yearEl = document.getElementById("year");
const topNav = document.querySelector(".top-nav");
const menuBtn = document.getElementById("menuBtn");
const topLinks = document.getElementById("topLinks");
const sectionLinks = Array.from(document.querySelectorAll("#caseNav a"));
const revealEls = Array.from(document.querySelectorAll(".reveal"));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHoverMotion =
  !reduceMotion &&
  window.matchMedia("(hover: hover)").matches &&
  window.matchMedia("(pointer: fine)").matches;

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

revealEls.forEach((el, index) => {
  el.style.setProperty("--reveal-delay", `${Math.min((index % 8) * 70, 320)}ms`);
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

window.addEventListener("scroll", () => {
  topNav?.classList.toggle("scrolled", window.scrollY > 12);
});

if (!reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

const observedSections = sectionLinks
  .map((link) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return null;
    return target.matches("section[id]") ? target : target.closest("section[id]");
  })
  .filter((section, index, sections) => section && sections.indexOf(section) === index);

if (sectionLinks.length) {
  sectionLinks[0].classList.add("active");
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const currentId = `#${entry.target.id}`;
      sectionLinks.forEach((link) => {
        const href = link.getAttribute("href");
        const target = document.querySelector(href);
        const section = target?.matches("section[id]") ? target : target?.closest("section[id]");
        link.classList.toggle("active", Boolean(section) && `#${section.id}` === currentId);
      });
    });
  },
  { threshold: 0.35, rootMargin: "-18% 0px -42% 0px" }
);

observedSections.forEach((section) => sectionObserver.observe(section));

document.querySelectorAll(".media-frame").forEach((frame) => {
  const img = frame.querySelector("img");
  if (!img) return;

  const onLoaded = () => {
    frame.classList.add("is-loaded");
    frame.classList.remove("is-error");
  };

  const onError = () => {
    frame.classList.add("is-error");
    frame.classList.remove("is-loaded");
  };

  if (img.complete) {
    if (img.naturalWidth > 0) onLoaded();
    else onError();
  }

  img.addEventListener("load", onLoaded);
  img.addEventListener("error", onError);
});

if (canHoverMotion) {
  const heroVisual = document.querySelector(".hero-visual");
  heroVisual?.addEventListener("pointermove", (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 2.5;
    const rotateX = (0.5 - py) * 2.5;
    heroVisual.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  heroVisual?.addEventListener("pointerleave", () => {
    heroVisual.style.transform = "";
  });
}

const carousels = Array.from(document.querySelectorAll("[data-carousel]"));

carousels.forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const tabs = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
  const pagination = carousel.querySelector(".fitlyn-showcase-pagination");
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const currentEl = carousel.querySelector("[data-carousel-current]");
  const totalEl = carousel.querySelector("[data-carousel-total]");
  const progressEl = carousel.querySelector("[data-carousel-progress]");
  const chipsEl = carousel.querySelector("[data-carousel-chips]");

  if (!slides.length) return;

  const totalSlides = slides.length;
  const pad = (value) => String(value).padStart(2, "0");
  let activeIndex = Math.max(
    0,
    slides.findIndex((slide) => slide.classList.contains("is-active"))
  );

  const syncCarousel = (nextIndex, options = {}) => {
    const { focusTab = false } = options;
    activeIndex = (nextIndex + totalSlides) % totalSlides;

    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      const labelledBy = tabs[index]?.id;

      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.setAttribute("aria-label", `${index + 1} of ${totalSlides}`);
      if (labelledBy) slide.setAttribute("aria-labelledby", labelledBy);
    });

    tabs.forEach((tab, index) => {
      const isActive = index === activeIndex;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

    if (currentEl) currentEl.textContent = pad(activeIndex + 1);
    if (totalEl) totalEl.textContent = pad(totalSlides);
    if (progressEl) {
      progressEl.style.width = `${((activeIndex + 1) / totalSlides) * 100}%`;
    }

    if (chipsEl) {
      const activeSlide = slides[activeIndex];
      const chips = [
        activeSlide?.dataset.chip1,
        activeSlide?.dataset.chip2,
        activeSlide?.dataset.chip3
      ].filter(Boolean);

      if (chips.length) {
        chipsEl.innerHTML = chips
          .map(
            (chip, index) =>
              `<span><b>${pad(index + 1)}</b> ${chip}</span>`
          )
          .join("");
      }
    }

    const activeTab = tabs[activeIndex];
    if (pagination && activeTab && pagination.scrollWidth > pagination.clientWidth + 4) {
      const targetLeft =
        activeTab.offsetLeft - (pagination.clientWidth - activeTab.offsetWidth) / 2;

      pagination.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: reduceMotion ? "auto" : "smooth"
      });
    }

    if (focusTab) activeTab?.focus();
  };

  prevButton?.addEventListener("click", () => {
    syncCarousel(activeIndex - 1);
  });

  nextButton?.addEventListener("click", () => {
    syncCarousel(activeIndex + 1);
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      syncCarousel(index, { focusTab: true });
    });

    tab.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        syncCarousel(index + 1, { focusTab: true });
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        syncCarousel(index - 1, { focusTab: true });
      }

      if (event.key === "Home") {
        event.preventDefault();
        syncCarousel(0, { focusTab: true });
      }

      if (event.key === "End") {
        event.preventDefault();
        syncCarousel(totalSlides - 1, { focusTab: true });
      }
    });
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      syncCarousel(activeIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      syncCarousel(activeIndex - 1);
    }
  });

  syncCarousel(activeIndex);
});

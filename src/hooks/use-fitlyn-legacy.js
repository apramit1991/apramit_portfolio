import { useEffect } from "react";
import { gsap } from "gsap";

export function useFitlynLegacyPage() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const yearEl = document.getElementById("year");
    const topNav = document.querySelector(".top-nav");
    const menuBtn = document.getElementById("menuBtn");
    const topLinks = document.getElementById("topLinks");
    const sectionLinks = Array.from(document.querySelectorAll("#caseNav a"));
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];

    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    revealEls.forEach((el, index) => {
      el.style.setProperty("--reveal-delay", `${Math.min((index % 8) * 70, 320)}ms`);
    });

    const toggleMenu = () => {
      const isOpen = topLinks?.classList.toggle("open");
      menuBtn?.setAttribute("aria-expanded", String(Boolean(isOpen)));
    };

    menuBtn?.addEventListener("click", toggleMenu);
    if (menuBtn) cleanups.push(() => menuBtn.removeEventListener("click", toggleMenu));

    document.querySelectorAll(".top-links a, #caseNav a").forEach((link) => {
      const onClick = () => {
        topLinks?.classList.remove("open");
        menuBtn?.setAttribute("aria-expanded", "false");
      };

      link.addEventListener("click", onClick);
      cleanups.push(() => link.removeEventListener("click", onClick));
    });

    const onScroll = () => {
      topNav?.classList.toggle("scrolled", window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);
    cleanups.push(() => window.removeEventListener("scroll", onScroll));
    onScroll();

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
      cleanups.push(() => revealObserver.disconnect());
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
    cleanups.push(() => sectionObserver.disconnect());

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
      cleanups.push(() => {
        img.removeEventListener("load", onLoaded);
        img.removeEventListener("error", onError);
      });
    });

    const canHoverMotion =
      !reduceMotion &&
      window.matchMedia("(hover: hover)").matches &&
      window.matchMedia("(pointer: fine)").matches;

    if (canHoverMotion) {
      const heroVisual = document.querySelector(".hero-visual");
      const onMove = (event) => {
        const rect = heroVisual.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * 2.5;
        const rotateX = (0.5 - py) * 2.5;
        heroVisual.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      };

      const onLeave = () => {
        heroVisual.style.transform = "";
      };

      heroVisual?.addEventListener("pointermove", onMove);
      heroVisual?.addEventListener("pointerleave", onLeave);
      if (heroVisual) {
        cleanups.push(() => {
          heroVisual.removeEventListener("pointermove", onMove);
          heroVisual.removeEventListener("pointerleave", onLeave);
        });
      }
    }

    if (!reduceMotion) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".hero-copy",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.95, ease: "power3.out" }
        );
        gsap.fromTo(
          ".hero-visual",
          { y: 50, opacity: 0, rotate: 1.5 },
          { y: 0, opacity: 1, rotate: 0, duration: 1.05, ease: "power3.out", delay: 0.12 }
        );
        gsap.fromTo(
          ".screen-shot",
          { y: 42, opacity: 0, rotate: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            delay: 0.14,
          }
        );
      });

      cleanups.push(() => ctx.revert());
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}

import { useEffect } from "react";
import { gsap } from "gsap";

export function useHomeLegacyPage() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const yearEl = document.getElementById("year");
    const navWrap = document.querySelector(".nav-wrap");
    const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navLinks");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];

    document.querySelectorAll("main section").forEach((section) => {
      const items = section.querySelectorAll(".reveal");
      items.forEach((el, i) => {
        el.style.setProperty("--reveal-delay", `${Math.min(i * 70, 280)}ms`);
      });
    });

    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    const toggleMenu = () => {
      const isOpen = navMenu?.classList.toggle("open");
      menuBtn?.setAttribute("aria-expanded", String(Boolean(isOpen)));
    };

    menuBtn?.addEventListener("click", toggleMenu);
    if (menuBtn) cleanups.push(() => menuBtn.removeEventListener("click", toggleMenu));

    navLinks.forEach((link) => {
      const onClick = () => {
        navMenu?.classList.remove("open");
        menuBtn?.setAttribute("aria-expanded", "false");
      };

      link.addEventListener("click", onClick);
      cleanups.push(() => link.removeEventListener("click", onClick));
    });

    const onScroll = () => {
      navWrap?.classList.toggle("scrolled", window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);
    cleanups.push(() => window.removeEventListener("scroll", onScroll));
    onScroll();

    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    let revealObserver;

    if (!reduceMotion) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      revealEls.forEach((el) => revealObserver.observe(el));
      cleanups.push(() => revealObserver.disconnect());
    } else {
      revealEls.forEach((el) => el.classList.add("visible"));
    }

    const sections = Array.from(document.querySelectorAll("main section[id]"));
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
    cleanups.push(() => sectionObserver.disconnect());

    const countUpEls = Array.from(document.querySelectorAll(".count-up"));

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

        const update = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
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
      cleanups.push(() => counterObserver.disconnect());
    }

    const tiltEls = Array.from(document.querySelectorAll(".tilt-card"));
    const canTilt =
      !reduceMotion &&
      window.matchMedia("(hover: hover)").matches &&
      window.matchMedia("(pointer: fine)").matches;

    if (canTilt) {
      tiltEls.forEach((card) => {
        const onMove = (event) => {
          const rect = card.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width;
          const py = (event.clientY - rect.top) / rect.height;
          const rotateY = (px - 0.5) * 6;
          const rotateX = (0.5 - py) * 6;
          card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        };

        const onLeave = () => {
          card.style.transform = "";
        };

        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", onMove);
          card.removeEventListener("pointerleave", onLeave);
        });
      });
    }

    if (!reduceMotion) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".hero-content",
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
        );
        gsap.fromTo(
          ".headshot-card",
          { y: 52, opacity: 0, rotate: -2 },
          { y: 0, opacity: 1, rotate: 0, duration: 1.1, ease: "power3.out", delay: 0.12 }
        );
        gsap.fromTo(
          ".flagship-case",
          { y: 40, opacity: 0.2 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
        );
      });

      cleanups.push(() => ctx.revert());
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}

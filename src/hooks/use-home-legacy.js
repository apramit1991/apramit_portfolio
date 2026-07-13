import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function useHomeLegacyPage() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover =
      window.matchMedia("(hover: hover)").matches &&
      window.matchMedia("(pointer: fine)").matches;
    const cleanups = [];

    const yearEl = document.getElementById("year");
    const navWrap = document.querySelector(".nav-wrap");
    const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navLinks");

    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---- Lenis smooth scroll (drives GSAP ScrollTrigger) ---- */
    let lenis = null;
    if (!reduceMotion) {
      lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      const ticker = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
      cleanups.push(() => {
        gsap.ticker.remove(ticker);
        gsap.ticker.lagSmoothing(500, 33);
        lenis.destroy();
      });
    }

    const scrollToId = (id) => {
      const target = document.querySelector(id);
      if (!target) return;
      if (lenis) lenis.scrollTo(target, { offset: -80 });
      else target.scrollIntoView({ behavior: "smooth" });
    };

    /* ---- Nav: mobile menu, anchor scroll, active link ---- */
    const toggleMenu = () => {
      const isOpen = navMenu?.classList.toggle("open");
      menuBtn?.setAttribute("aria-expanded", String(Boolean(isOpen)));
    };
    menuBtn?.addEventListener("click", toggleMenu);
    if (menuBtn) cleanups.push(() => menuBtn.removeEventListener("click", toggleMenu));

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const onClick = (e) => {
        e.preventDefault();
        navMenu?.classList.remove("open");
        menuBtn?.setAttribute("aria-expanded", "false");
        scrollToId(href);
      };
      link.addEventListener("click", onClick);
      cleanups.push(() => link.removeEventListener("click", onClick));
    });

    const onScroll = () => navWrap?.classList.toggle("scrolled", window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));
    onScroll();

    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) =>
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
          );
        });
      },
      { threshold: 0.45 }
    );
    sections.forEach((s) => sectionObserver.observe(s));
    cleanups.push(() => sectionObserver.disconnect());

    /* ---- Count-up stats ---- */
    const countUpEls = Array.from(document.querySelectorAll(".count-up"));
    if (countUpEls.length) {
      const run = (el) => {
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
        const start = performance.now();
        const dur = 1100;
        const step = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = `${(target * eased).toFixed(decimals)}${suffix}`;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            run(entry.target);
            counterObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.5 }
      );
      countUpEls.forEach((el) => counterObserver.observe(el));
      cleanups.push(() => counterObserver.disconnect());
    }

    if (reduceMotion) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      return () => cleanups.forEach((fn) => fn());
    }

    /* ---- GSAP: hero intro, scroll reveals, parallax, tilt, cursor ---- */
    const ctx = gsap.context(() => {
      // split the hero headline into word-masks
      const h1 = document.querySelector(".hero-content h1");
      if (h1 && !h1.querySelector(".word")) {
        h1.innerHTML = h1.textContent
          .trim()
          .split(/\s+/)
          .map((w) => `<span class="word"><span class="word-inner">${w}</span></span>`)
          .join(" ");
      }
      const words = h1 ? h1.querySelectorAll(".word-inner") : [];

      // explicit fromTo (not .from) so end states are deterministic under
      // React StrictMode's double-invoke — .from can otherwise stick at 0
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .fromTo(".location-chip", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(words, { yPercent: 118, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.06, duration: 0.85 }, "-=0.2")
        .fromTo(".subtext", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.45")
        .fromTo(".hero-support", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.5")
        .fromTo(".hero-proof-list li", { y: 16, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.5 }, "-=0.4")
        .fromTo(".cta-row .btn", { y: 18, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, "-=0.35")
        .fromTo(".headshot-card", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }, "-=1.05");

      // scroll reveals (everything except the hero, which has its own timeline)
      const revealEls = gsap.utils
        .toArray(".reveal")
        .filter((el) => !el.closest("#home"));
      ScrollTrigger.batch(revealEls, {
        start: "top 86%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.09,
            overwrite: true,
          }),
      });

      // parallax depth
      gsap.to(".portrait-stage", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.utils.toArray(".cs-card-visual img").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: 7 },
          {
            yPercent: -7,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".cs-card"),
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });
    cleanups.push(() => ctx.revert());

    /* ---- Enhanced tilt with pointer-tracked glare ---- */
    if (canHover) {
      document.querySelectorAll(".tilt-card").forEach((card) => {
        const onMove = (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          card.style.transform = `perspective(900px) rotateX(${((0.5 - py) * 9).toFixed(2)}deg) rotateY(${((px - 0.5) * 9).toFixed(2)}deg) translateZ(6px)`;
          card.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
          card.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
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

      /* ---- Magnetic buttons ---- */
      document.querySelectorAll(".btn, .cs-btn, .nav-cta a").forEach((el) => {
        const onMove = (e) => {
          const r = el.getBoundingClientRect();
          gsap.to(el, {
            x: (e.clientX - (r.left + r.width / 2)) * 0.32,
            y: (e.clientY - (r.top + r.height / 2)) * 0.32,
            duration: 0.4,
            ease: "power3.out",
          });
        };
        const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerleave", onLeave);
        });
      });

      /* ---- Custom cursor (dot + trailing ring) ---- */
      const dot = document.createElement("div");
      const ring = document.createElement("div");
      dot.className = "cursor-dot";
      ring.className = "cursor-ring";
      document.body.append(dot, ring);
      document.body.classList.add("has-custom-cursor");

      let mx = window.innerWidth / 2;
      let my = window.innerHeight / 2;
      let rx = mx;
      let ry = my;
      const onMove = (e) => {
        mx = e.clientX;
        my = e.clientY;
        gsap.set(dot, { x: mx, y: my });
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      let rafId = requestAnimationFrame(function loop() {
        rx += (mx - rx) * 0.16;
        ry += (my - ry) * 0.16;
        gsap.set(ring, { x: rx, y: ry });
        rafId = requestAnimationFrame(loop);
      });

      const interactive = Array.from(
        document.querySelectorAll("a, button, .tilt-card, .cs-card, input, textarea")
      );
      const enter = () => ring.classList.add("cursor-hover");
      const leave = () => ring.classList.remove("cursor-hover");
      interactive.forEach((el) => {
        el.addEventListener("pointerenter", enter);
        el.addEventListener("pointerleave", leave);
      });

      cleanups.push(() => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("pointermove", onMove);
        interactive.forEach((el) => {
          el.removeEventListener("pointerenter", enter);
          el.removeEventListener("pointerleave", leave);
        });
        dot.remove();
        ring.remove();
        document.body.classList.remove("has-custom-cursor");
      });
    }

    // recalc triggers once fonts/images settle
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    cleanups.push(() => window.removeEventListener("load", onLoad));
    ScrollTrigger.refresh();

    return () => cleanups.forEach((fn) => fn());
  }, []);
}

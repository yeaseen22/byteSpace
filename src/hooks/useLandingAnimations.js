import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const easeOutPower2 = 'power2.out'

/**
 * Every entrance, reveal, parallax and counter animation for the landing page.
 * Ported from the reference `script.js`; all selector strings are scoped to
 * `rootRef` by `gsap.context`, and the whole thing is reverted on unmount
 * (React 19 StrictMode mounts effects twice in dev).
 *
 * Deviations from the reference, all intentional:
 *  - Parallax is scoped to the hero, so the CTA banner's accents keep their
 *    CSS float animation instead of being overwritten by GSAP transforms.
 *  - The stat counter formats as `12K` / `70+` / `16`. The reference appended
 *    the suffix *and* a hardcoded "K", rendering "12KK".
 *  - Both progress tracks are interactive (the reference left the second one
 *    inert) and the mobile nav opens, so both are handled in their components.
 *  - Respects prefers-reduced-motion by doing nothing at all.
 */
export default function useLandingAnimations(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return undefined

    let lenis
    let frame
    const anchorHandlers = []

    const ctx = gsap.context(() => {
      // ── Lenis smooth scroll, driving ScrollTrigger ────────────────────────
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - 2 ** -10 * t),
        smoothWheel: true,
      })

      const raf = (time) => {
        lenis.raf(time)
        frame = requestAnimationFrame(raf)
      }
      frame = requestAnimationFrame(raf)

      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.lagSmoothing(0)

      // Lenis owns scroll easing, so the nav anchors are handed to it rather
      // than letting the browser jump instantly.
      root.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        const href = anchor.getAttribute('href')
        if (!href || href === '#') return

        const handler = (event) => {
          const target = root.querySelector(href)
          if (!target) return

          event.preventDefault()
          lenis.scrollTo(target, { offset: 0 })
        }

        anchor.addEventListener('click', handler)
        anchorHandlers.push([anchor, handler])
      })

      // ── Hero entrance ─────────────────────────────────────────────────────
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.navbar', { y: -60, opacity: 0, duration: 0.9 })
        .from('.hero-title', { y: 60, opacity: 0, duration: 1.1, ease: 'power4.out' }, '-=0.4')
        .from('.hero-subtitle', { y: 40, opacity: 0, duration: 0.9 }, '-=0.6')
        .from('.search-wrapper', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.arch-backdrop', { scale: 0.6, opacity: 0, duration: 1, ease: 'elastic.out(1, 0.6)' }, '-=0.3')
        .from('.student-wrapper', { y: 80, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.8')
        .from('.card-courses-info', { x: -60, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.5')
        .from('.card-progress-info', { x: 60, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.7')
        .from('.card-happy-students', { y: 40, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.6')

      gsap.from('.floating-accent', {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)',
        stagger: 0.15,
        delay: 0.5,
      })

      // ── Scroll reveals ────────────────────────────────────────────────────
      gsap.from('.logo-item', {
        scrollTrigger: { trigger: '.logos-section', start: 'top 85%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: easeOutPower2,
      })

      gsap.utils.toArray('.section-title, .feature-heading, .testi-title, .banner-title').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%' },
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        })
      })

      gsap.utils.toArray('.section-subtitle, .feature-desc, .banner-desc, .testi-desc').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 90%' },
          y: 30,
          opacity: 0,
          duration: 0.7,
          delay: 0.15,
          ease: easeOutPower2,
        })
      })

      gsap.from('.category-pills .category-pill', {
        scrollTrigger: { trigger: '.category-pills', start: 'top 88%' },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: easeOutPower2,
      })

      gsap.utils.toArray('.course-card').forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 90%' },
          y: 60,
          opacity: 0,
          duration: 0.75,
          delay: (index % 3) * 0.12,
          ease: 'power3.out',
        })
      })

      gsap.from('.path-card', {
        scrollTrigger: { trigger: '.path-grid', start: 'top 85%' },
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.1,
        ease: 'back.out(1.5)',
      })

      // The reference reused `.feature-block-section` as the trigger for both
      // showcase images, so both tweened on the first match. Each image uses its
      // own section here.
      gsap.utils.toArray('.feature-block-section').forEach((section) => {
        const image = section.querySelector('.showcase-student-img, .showcase-creator-img')
        if (!image) return

        gsap.from(image, {
          scrollTrigger: { trigger: section, start: 'top 80%' },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        })
      })

      gsap.from('.revenue-badge', {
        scrollTrigger: { trigger: '.feature-row.reverse', start: 'top 80%' },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.4)',
      })

      gsap.from('.testimonial-card', {
        scrollTrigger: { trigger: '.testimonials-grid', start: 'top 85%' },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })

      gsap.from('.banner-content', {
        scrollTrigger: { trigger: '.creator-cta-banner', start: 'top 80%' },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })

      gsap.from('.newsletter-col', {
        scrollTrigger: { trigger: '.site-footer', start: 'top 90%' },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: easeOutPower2,
      })

      gsap.from('.footer-col', {
        scrollTrigger: { trigger: '.site-footer', start: 'top 90%' },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: easeOutPower2,
        delay: 0.2,
      })

      // ── Stat counters (12K / 70+ / 16) ────────────────────────────────────
      const statNumbers = gsap.utils.toArray('.stat-num')
      const statsRow = root.querySelector('.stats-counter-row')

      if (statsRow && statNumbers.length) {
        ScrollTrigger.create({
          trigger: statsRow,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            statNumbers.forEach((el) => {
              const target = Number(el.dataset.target) || 0
              const divisor = Number(el.dataset.divisor) || 1
              const suffix = el.dataset.suffix ?? ''
              const counter = { value: 0 }

              gsap.to(counter, {
                value: target,
                duration: 2.2,
                ease: easeOutPower2,
                onUpdate: () => {
                  el.textContent = `${Math.round(counter.value / divisor)}${suffix}`
                },
              })
            })
          },
        })
      }

      // ── Hero parallax, scoped so the banner accents keep their float keyframes
      const hero = root.querySelector('.hero-section')
      if (hero) {
        const parallax = [
          { target: '.shape-spring-lime', scrub: 1.5, to: { y: -120 } },
          { target: '.shape-cylinder-lime', scrub: 2, to: { y: -80, rotate: 30 } },
          { target: '.shape-torus-white', scrub: 1, to: { y: -60, rotate: -45 } },
        ]

        parallax.forEach(({ target, scrub, to }) => {
          gsap.to(hero.querySelector(target), {
            scrollTrigger: { trigger: hero, scrub, start: 'top top', end: 'bottom top' },
            ...to,
            ease: 'none',
          })
        })
      }

      // Re-measure once webfonts and the hero image have settled, otherwise the
      // trigger positions are computed against fallback-font metrics.
      document.fonts?.ready.then(() => ScrollTrigger.refresh())
    }, root)

    return () => {
      ctx.revert()
      anchorHandlers.forEach(([anchor, handler]) => anchor.removeEventListener('click', handler))
      if (frame) cancelAnimationFrame(frame)
      lenis?.destroy()
      gsap.ticker.lagSmoothing(500, 33)
    }
  }, [rootRef])
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.modern-menu-toggle');
  const nav = document.querySelector('.modern-nav-links');
  const yearEl = document.getElementById('modern-year');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canAnimate = typeof anime === 'function' && !reduceMotion;

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (toggleButton && nav) {
    toggleButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggleButton.setAttribute('aria-expanded', String(isOpen));

      if (canAnimate) {
        anime.remove(nav);

        if (isOpen) {
          anime({
            targets: nav,
            opacity: [0, 1],
            translateY: [-10, 0],
            duration: 320,
            easing: 'easeOutQuad'
          });
        }
      }
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggleButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (!canAnimate) {
    return;
  }

  const heroTargets = document.querySelectorAll(
    '.modern-brand, .modern-nav-links a, .modern-eyebrow, .modern-hero h1, .modern-lead, .modern-hero-actions .modern-btn, .modern-profile-card'
  );

  anime.set(heroTargets, {
    opacity: 0
  });

  anime.set('.modern-profile-card', {
    translateX: 28
  });

  anime.timeline({ easing: 'easeOutExpo' })
    .add({
      targets: '.modern-brand',
      opacity: [0, 1],
      translateY: [-12, 0],
      duration: 650
    })
    .add({
      targets: '.modern-nav-links a',
      opacity: [0, 1],
      translateY: [-10, 0],
      delay: anime.stagger(80),
      duration: 450
    }, '-=350')
    .add({
      targets: '.modern-eyebrow',
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 600
    }, '-=220')
    .add({
      targets: '.modern-hero h1',
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 750
    }, '-=450')
    .add({
      targets: '.modern-lead',
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 650
    }, '-=500')
    .add({
      targets: '.modern-hero-actions .modern-btn',
      opacity: [0, 1],
      translateY: [16, 0],
      delay: anime.stagger(120),
      duration: 550
    }, '-=420')
    .add({
      targets: '.modern-profile-card',
      opacity: [0, 1],
      translateX: [28, 0],
      duration: 800
    }, '-=520')
    .add({
      targets: '.modern-hero-blur-a',
      translateX: [0, 18],
      translateY: [0, -16],
      direction: 'alternate',
      loop: true,
      duration: 4200,
      easing: 'easeInOutSine'
    }, '-=650')
    .add({
      targets: '.modern-hero-blur-b',
      translateX: [0, -16],
      translateY: [0, 14],
      direction: 'alternate',
      loop: true,
      duration: 4800,
      easing: 'easeInOutSine'
    }, '-=420');

  const revealTargets = document.querySelectorAll(
    '.modern-panel, .modern-timeline-item, .modern-contact-card'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        currentObserver.unobserve(entry.target);
        anime.set(entry.target, {
          opacity: 0,
          translateY: 24
        });

        anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [24, 0],
          duration: 700,
          easing: 'easeOutCubic'
        });
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -90px 0px'
    });

    revealTargets.forEach((target) => observer.observe(target));
  } else if (revealTargets.length) {
    anime({
      targets: revealTargets,
      opacity: [0, 1],
      translateY: [24, 0],
      delay: anime.stagger(120),
      duration: 700,
      easing: 'easeOutCubic'
    });
  }
});

const toggleButton = document.querySelector('.modern-menu-toggle');
const nav = document.querySelector('.modern-nav-links');
const yearEl = document.getElementById('modern-year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

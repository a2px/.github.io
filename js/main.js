// ── Mobile nav toggle ────────────────────────────────────────
const toggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// Close on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.nav__inner')) {
    navLinks?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

// ── Highlight active nav link ────────────────────────────────
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Subtle scroll shadow on nav ──────────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  const updateNav = () => {
    nav.style.boxShadow = window.scrollY > 8
      ? '0 2px 20px rgba(0,0,0,0.07)'
      : 'none';
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

/* Kleine Interaktionen ohne externe Bibliotheken. */
(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile Navigation mit Tastaturbedienung und Escape-Taste.
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (menuButton && nav) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Menü öffnen');
      nav.classList.remove('is-open');
    };
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        menuButton.focus();
      }
    });
  }

  // Inhalte sanft einblenden, sobald sie in den sichtbaren Bereich kommen.
  const revealItems = document.querySelectorAll('.reveal');
  if (!reduceMotion) {
    root.classList.add('motion-ready');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
      revealItems.forEach((item) => observer.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    }
  }

  // Vorwählen, für welche Leistung eine Anfrage gestellt wird.
  const serviceSelect = document.querySelector('#service');
  document.querySelectorAll('[data-service]').forEach((link) => {
    link.addEventListener('click', () => {
      if (serviceSelect) serviceSelect.value = link.dataset.service;
    });
  });

  // Sanfte Ausblendung bei internen Wechseln zu einer anderen HTML-Seite.
  if (!reduceMotion) {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;
      event.preventDefault();
      root.classList.add('is-leaving');
      window.setTimeout(() => { window.location.href = destination.href; }, 150);
    });
  }

  // Demo-Formular: bis zur Anbindung werden keine Eingaben übertragen.
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      status.textContent = 'Das Formular ist noch nicht angebunden. Bitte sende deine Anfrage direkt an [PLATZHALTER: E-MAIL].';
    });
  }

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();

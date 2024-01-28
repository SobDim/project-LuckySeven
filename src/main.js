(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.style.display = 'none';

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    overlay.style.display = 'block'; // Змінено стиль на display: block;
    const scrollLockMethod = 'disableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const closeMenu = () => {
    overlay.style.display = 'none';
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', closeMenu);

  const menuLinks = document.querySelectorAll('.js-close-menu');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    closeMenu();
  });

  document.body.appendChild(overlay);
})();

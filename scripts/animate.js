(function () {

  document.addEventListener('DOMContentLoaded', () => {
    initPieceHover();
    initLoadAnimations();
    initScrollReveal();
  });

  function initPieceHover() {
    ['.hero__animate-piece1', '.hero__animate-piece2',
     '.hero__animate-piece3', '.hero__animate-piece4'].forEach(sel => {
      const el = document.querySelector(sel);
      if (!el) return;
      const initialTop = window.getComputedStyle(el).top;
      el.addEventListener('mouseenter', () => {
        el.style.animation = 'none';
        el.style.top = `calc(${initialTop} - 30px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.top = initialTop;
        el.style.animation = '';
      });
    });
  }

  function initLoadAnimations() {
    function show(selector, delayMs) {
      const el = document.querySelector(selector);
      if (!el) return;
      setTimeout(() => {
        requestAnimationFrame(() => requestAnimationFrame(() => {
          el.classList.add('load-visible');
        }));
      }, delayMs);
    }

    show('.header__logo-link',                        0);
    show('.hero__info-btns-block',                  150);
    show('.hero__animate',                           250);
    show('.idea__text-img-box .idea__text-block',   700);
    show('.idea__text-img-box > .idea__img-block',  700);
    show('.idea__img-table-box > .idea__img-block', 1000);
    show('.idea__table-block',                      1000);
  }

  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => requestAnimationFrame(() => {
            entry.target.classList.add('is-visible');
          }));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    function watch(selector, cls, stagger) {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add(cls);
        if (stagger) el.style.transitionDelay = `${(i * stagger).toFixed(2)}s`;
        observer.observe(el);
      });
    }

    const isDesktop = window.innerWidth >= 1315;

    watch('.marquee__block', 'reveal');
    watch('.stages__hdr-block', 'reveal');

    if (isDesktop) {
      watch('.stages__list-item', 'reveal', 0.08);
    } else {
      watch('.stages__slider-btns-block', 'reveal');
    }

    watch('.slider-players__hdr-btns-box', 'reveal');
    watch('.footer', 'reveal');
  }

})();

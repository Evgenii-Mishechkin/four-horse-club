(function () {

  const sliderContainer = document.querySelector('.slider-players__container');
  const slider = document.querySelector('.slider-players__list');
  const slides = document.querySelectorAll('.slider-players__list-item');

  let currentIndex = 0;
  let autoSlideInterval;

  const DESKTOP_VISIBLE = 3;
  const MOBILE_VISIBLE  = 1;
  const DESKTOP_BREAKPOINT = 1315;

  function visibleCount() {
    return window.innerWidth >= DESKTOP_BREAKPOINT ? DESKTOP_VISIBLE : MOBILE_VISIBLE;
  }

  function slideWidth() {
    return sliderContainer.clientWidth / visibleCount();
  }

  function showSlide(index) {
    const offset = index * slideWidth();
    slides.forEach(item => {
      item.style.transform = `translateX(-${offset}px)`;
    });

    const current = Math.min(index + visibleCount(), slides.length);
    document.querySelectorAll('.current-slide').forEach(el => {
      el.textContent = current;
    });
    document.querySelectorAll('.total-slides').forEach(el => {
      el.textContent = '/' + slides.length;
    });
  }

  function next() {
    const count = visibleCount();
    currentIndex = (currentIndex + count >= slides.length) ? 0 : currentIndex + count;
    showSlide(currentIndex);
  }

  function prev() {
    const count = visibleCount();
    currentIndex = (currentIndex - count < 0)
      ? slides.length - (slides.length % count || count)
      : currentIndex - count;
    showSlide(currentIndex);
  }

  function startAuto() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(next, 4000);
  }

  function stopAuto() {
    clearInterval(autoSlideInterval);
  }

  document.querySelectorAll('.slider-players__prev-btn').forEach(btn => {
    btn.addEventListener('click', () => { prev(); stopAuto(); });
  });
  document.querySelectorAll('.slider-players__next-btn').forEach(btn => {
    btn.addEventListener('click', () => { next(); stopAuto(); });
  });

  sliderContainer.addEventListener('mouseenter', stopAuto);
  sliderContainer.addEventListener('mouseleave', startAuto);

  let touchStartX = 0;
  let isDragging = false;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    isDragging = true;
    stopAuto();
  });

  slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - touchStartX;
    if (Math.abs(diff) < 40) return;
    if (diff < 0) {
      currentIndex = (currentIndex + visibleCount()) % slides.length;
    } else {
      currentIndex = (currentIndex - visibleCount() + slides.length) % slides.length;
    }
    showSlide(currentIndex);
    isDragging = false;
  });

  slider.addEventListener('touchend', () => {
    isDragging = false;
    startAuto();
  });

  document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
    startAuto();
  });

})();

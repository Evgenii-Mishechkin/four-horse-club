(function () {

  document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.stages__list');
    const prevButton = document.querySelector('.stages__slider-prev-btn');
    const nextButton = document.querySelector('.stages__slider-next-btn');
    const paginationContainer = document.querySelector('.stages__slider-pagination');

    let currentColumn = 0;
    const columnWidth = 335;
    const columnGap = 20;
    const columnStep = columnWidth + columnGap;
    const totalSlides = Math.round(slider.scrollWidth / columnStep);
    const swipeThreshold = 30;
    let touchStartX = 0;
    let touchEndX = 0;

    function scrollToColumn(index) {
      slider.scrollTo({ left: index * columnStep, behavior: 'smooth' });
    }

    function updatePagination() {
      document.querySelectorAll('.pagination-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentColumn);
      });
    }

    function updateButtons() {
      prevButton.disabled = currentColumn === 0;
      nextButton.disabled = currentColumn === totalSlides - 1;
    }

    function goTo(index) {
      currentColumn = index;
      scrollToColumn(currentColumn);
      updatePagination();
      updateButtons();
    }

    function next() {
      if (currentColumn < totalSlides - 1) goTo(currentColumn + 1);
    }

    function prev() {
      if (currentColumn > 0) goTo(currentColumn - 1);
    }

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('pagination-dot');
      dot.addEventListener('click', () => goTo(i));
      paginationContainer.appendChild(dot);
    }

    updatePagination();
    updateButtons();

    nextButton.addEventListener('click', next);
    prevButton.addEventListener('click', prev);

    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchEndX = touchStartX;
    }, false);

    slider.addEventListener('touchmove', (e) => {
      touchEndX = e.touches[0].clientX;
    }, false);

    slider.addEventListener('touchend', () => {
      const dist = Math.abs(touchEndX - touchStartX);
      if (dist > swipeThreshold && dist <= columnWidth) {
        touchEndX < touchStartX ? next() : prev();
      }
      touchStartX = 0;
      touchEndX = 0;
    }, false);
  });

})();

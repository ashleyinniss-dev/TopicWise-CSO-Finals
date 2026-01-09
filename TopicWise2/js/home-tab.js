document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const cards = Array.from(track.children);
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let currentIndex = 0;
  const visibleCards = 4;

  function getCardWidth() {
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    return cards[0].offsetWidth + gap;
  }

  function updateCarousel() {
    const cardWidth = getCardWidth();
    const maxIndex = cards.length - visibleCards;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);

  updateCarousel();
});
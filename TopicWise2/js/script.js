// -------------------- CAROUSEL --------------------
document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const track = document.querySelector('.carousel-track');
  const cards = Array.from(track.children);

  let currentIndex = 0;
  const visibleCards = 3;

  function getCardWidth() {
    const style = getComputedStyle(cards[0]);
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    return cards[0].offsetWidth + gap;
  }

  function updateCarousel() {
    const cardWidth = getCardWidth();
    const maxIndex = cards.length - visibleCards;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

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

// -------------------- GET STARTED MODAL --------------------
const getStartedBtn = document.getElementById('getStartedBtn');
const modal = document.getElementById('getStartedModal');

getStartedBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

function closeModal() {
  modal.classList.add('hidden');
}

function goToStep(step) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById('step' + step).classList.add('active');
}

function goToStudyPlanner() {
  const subjects = [...document.querySelectorAll('.checkbox-list input:checked')].map(i => i.value);
  localStorage.setItem('subjects', JSON.stringify(subjects)); // store selection for planner page
  const session = document.getElementById('exam-session').value;
  localStorage.setItem('examSession', session); // store exam session
  window.location.href = "study-planner-main.html"; // go to main planner page
}
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.slider-button.next');
const prevButton = document.querySelector('.slider-button.prev');
const dots = document.querySelectorAll('.dot');
const searchToggle = document.getElementById('searchToggle');
const searchContainer = document.querySelector('.search-toggle');
const searchInput = document.getElementById('searchInput');
let currentSlide = 0;

function showSlide(index) {
  const normalizedIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === normalizedIndex);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === normalizedIndex);
  });
  currentSlide = normalizedIndex;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

if (searchToggle && searchContainer && searchInput) {
  searchToggle.addEventListener('click', (event) => {
    event.preventDefault();
    const isActive = searchContainer.classList.contains('active');
    searchContainer.classList.toggle('active', !isActive);
    if (!isActive) {
      searchInput.focus();
    }
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(() => {
      if (document.activeElement !== searchInput) {
        searchContainer.classList.remove('active');
      }
    }, 120);
  });

  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      searchContainer.classList.remove('active');
    }
  });
}

nextButton?.addEventListener('click', nextSlide);
prevButton?.addEventListener('click', prevSlide);

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = Number(dot.dataset.index);
    showSlide(index);
  });
});

showSlide(currentSlide);

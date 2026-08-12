const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.slider-button.next');
const prevButton = document.querySelector('.slider-button.prev');
const dots = document.querySelectorAll('.dot');
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

nextButton?.addEventListener('click', nextSlide);
prevButton?.addEventListener('click', prevSlide);

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = Number(dot.dataset.index);
    showSlide(index);
  });
});

showSlide(currentSlide);

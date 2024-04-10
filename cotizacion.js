const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselPrev = document.querySelector('.carousel-control-prev');
const carouselNext = document.querySelector('.carousel-control-next');

let currentSlide = 0;

carouselPrev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = carouselInner.children.length - 1;
  }
  carouselInner.style.transform = `translateX(-${currentSlide * 20}%)`;
});

carouselNext.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= carouselInner.children.length) {
    currentSlide = 0;
  }
  carouselInner.style.transform = `translateX(-${currentSlide * 20}%)`;
});

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;

// Create dots
for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);

  dot.addEventListener('click', () => {
    currentIndex = i;
    updateSlider();
    resetTimer();
  });
}

const dots = document.querySelectorAll('.dots button');

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider();
}

let sliderTimer = setInterval(nextSlide, 3000); // 1 sec stay + animation time

function resetTimer() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(nextSlide, 3000);
}

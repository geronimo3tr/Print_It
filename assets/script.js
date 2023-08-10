const slides = [
	
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const banner = document.getElementById('banner');
const arrowleft = document.querySelector('.arrow_left');
const arrowright = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const bannerImage = document.querySelector('#banner > img');
const bannerText = document.querySelector('#banner > p');

const numberSlide = slides.length;
let currentSlideIndex = 0;

displaySlide(currentSlideIndex);

arrowleft.addEventListener("click", function () {
	currentSlideIndex = (currentSlideIndex - 1 + numberSlide) % numberSlide;
	displaySlide(currentSlideIndex);
})
arrowright.addEventListener("click", function () {
	currentSlideIndex = (currentSlideIndex + 1) % numberSlide;
	displaySlide(currentSlideIndex);
	})

	function displaySlide(index) {
		const slide = slides[index];
		bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
  		bannerText.innerHTML = slide.tagLine;
		AddDots();
	  }

	  function createDot(index) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dot.addEventListener("click", function () {
		  currentSlideIndex = index; // Update the current slide index
		  displaySlide(currentSlideIndex);
		  AddDots(); // Update the dot selection
		});
		dots.appendChild(dot);
	  }
	  
	  function AddDots() {
		dots.innerHTML = '';
		for (let i = 0; i < numberSlide; i++) {
		  createDot(i);
		}
		// Remove 'dot_selected' class from all dots
		Array.from(dots.children).forEach(dot => dot.classList.remove('dot_selected'));
		// Add 'dot_selected' class to the current dot
		dots.children[currentSlideIndex].classList.add('dot_selected');
	  }
	  AddDots();

// Function to change the slide to the next one
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % numberSlide;
    displaySlide(currentSlideIndex);
}

// Set interval to change slide every 3 seconds
let slideInterval = setInterval(nextSlide, 3000);

// Function to start the slide interval
function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 3000);
}

// Stop the interval when user interacts with the carousel
banner.addEventListener("mouseenter", () => clearInterval(slideInterval));
banner.addEventListener("mouseleave", startSlideInterval);
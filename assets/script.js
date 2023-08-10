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

const slideInterval = setInterval(autoChangeSlide, 3000);

displaySlide(currentSlideIndex);

arrowleft.addEventListener("click", function () {
	currentSlideIndex = (currentSlideIndex - 1 + numberSlide) % numberSlide;
	displaySlide(currentSlideIndex);
	slideInterval = setInterval(autoChangeSlide, 3000);
})
arrowright.addEventListener("click", function () {
	currentSlideIndex = (currentSlideIndex + 1) % numberSlide;
	displaySlide(currentSlideIndex);
	slideInterval = setInterval(autoChangeSlide, 3000);
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

	  function autoChangeSlide() {
		currentSlideIndex = (currentSlideIndex + 1) % numberSlide;
		displaySlide(currentSlideIndex);
	}
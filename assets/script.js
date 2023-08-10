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
const arrowleft = document.querySelector('.arrow_left');
const arrowright = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');

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
	  }

	  function createDot(index) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dot.addEventListener("click", function () {
		  currentSlideIndex = index;
		  displaySlide(currentSlideIndex);
		});
		dots.appendChild(dot);
	  }
	  
	  function AddDots() {
		for (let i = 0; i < numberSlide; i++) {
		  createDot(i);
		}
	  }
	  
	  AddDots();


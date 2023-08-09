document.getElementById("arrow_left").addEventListener("click",myFunction);
function myFunction(){
	alert("Slide precedente");
}
document.getElementById("arrow_right").addEventListener("click",Myotherfunction);
function Myotherfunction(){
	alert('Slide suivante');
	
}
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

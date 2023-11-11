

/*slide*/

/*var slideIndex = 1;
showSlides(slideIndex);
function plusslides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function schowSlides(n){
	var i;
	var slides = document.getElementByClassName("mySlides");
	var dots = document.getElementByClassName("dot");

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex=slides.lenght
	}
	for (i = 0; i  < slides.length; i++){
		slides[i].style.display ="none";
			
	}


	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("active","");
			}
		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className+= "active";
}
*/
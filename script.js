// JavaScript Document// 
	let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}

/* Unrank */
function openPopup() {
	document.getElementById('overlay').style.display = 'flex';
}

function closePopup() {
	document.getElementById('overlay').style.display = 'none';
}
			
/* Iron */
function openPopup2() {
	document.getElementById('overlay2').style.display = 'flex';
}

function closePopup2() {
	document.getElementById('overlay2').style.display = 'none';
}
			
/* Bronze */
function openPopup3() {
	document.getElementById('overlay3').style.display = 'flex';
}

function closePopup3() {
	document.getElementById('overlay3').style.display = 'none';
}
			
/* Silver */
function openPopup4() {
	document.getElementById('overlay4').style.display = 'flex';
}

function closePopup4() {
	document.getElementById('overlay4').style.display = 'none';
}
			
/* Gold */
function openPopup5() {
	document.getElementById('overlay5').style.display = 'flex';
}

function closePopup5() {
	document.getElementById('overlay5').style.display = 'none';
}
			
/* Plat */
function openPopup6() {
	document.getElementById('overlay6').style.display = 'flex';
}

function closePopup6() {
	document.getElementById('overlay6').style.display = 'none';
}
			
/* Diamond */
function openPopup7() {
	document.getElementById('overlay7').style.display = 'flex';
}

function closePopup7() {
	document.getElementById('overlay7').style.display = 'none';
}
			
/* Asc */
function openPopup8() {
	document.getElementById('overlay8').style.display = 'flex';
}

function closePopup8() {
	document.getElementById('overlay8').style.display = 'none';
}
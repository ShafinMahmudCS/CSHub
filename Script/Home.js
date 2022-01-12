// window.onload = function() {
//     slideShow();
//   };

// var index = 0;
// function slideShow() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   index++;
//   if (index > slides.length) {index = 1}    
//   slides[index-1].style.display = "block";  
//   setTimeout(slideShow, 2000); 
// }

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);
  

window.onload = function() {
  slideShow();
};

var index = 1;
slideShow(index);

function plusDivs(n) {
slideShow(index += n);
}

function slideShow(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {index = 1}
if (n < 1) {index = x.length}
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
}
x[index-1].style.display = "block";  
}


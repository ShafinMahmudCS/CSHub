$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){

        window.location.hash = hash;
      });
    }
  });
});

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


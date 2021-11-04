window.onload = function() {
    slideShow();
  };

var index = 0;
function slideShow() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  index++;
  if (index > slides.length) {index = 1}    
  slides[index-1].style.display = "block";  
  setTimeout(slideShow, 1850); 
}

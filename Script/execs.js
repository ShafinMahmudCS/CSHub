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
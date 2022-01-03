var loader = setInterval(function () {
    if(document.readyState !== "complete") return;
    clearInterval(loader);
    document.querySelector('.spinner-wrapper').style.display = "none";
  }, 450);
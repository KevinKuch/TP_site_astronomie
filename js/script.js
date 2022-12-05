/******** Function pour menu hamburger *******************/
$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      
    });
  });

/******** Function pour parallax effect *******************/

let textAccueil = document.getElementById("textAccueil");
let imgCiel = document.getElementById("imgCiel");
window.addEventListener('scroll', () => {
  let value = window.scrollY;
  // console.log(value);
  textAccueil.style.marginTop = value * 1.5 + 'px';

  if (value > 600) {
    textAccueil.style.display = "none";
  } else {
    textAccueil.style.display = "block";
  }


});





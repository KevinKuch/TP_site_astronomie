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

  if (value > 480) {
    textAccueil.style.display = "none";
  } else {
    textAccueil.style.display = "block";
  }
});


/******** Function pour scroll animation sur btn *******************/
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


/******** Effect animation des contenus *******************/

ScrollReveal({
  reset: true,
  duration: 1000,
  distance: '20px',
  easing: 'ease',
  delay: 400
})

ScrollReveal().reveal('.text-accueil-anim', { delay: 600, origin: 'left', distance: '40px', interval: 100 });
ScrollReveal().reveal('.planet-terre-accueil', { delay: 600, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.titre-section', { delay: 600, origin: 'left', distance: '40px' });
ScrollReveal().reveal('.text-desc', { delay: 700, origin: 'bottom', interval: 150 });
ScrollReveal().reveal('.btn-explore', { delay: 850, origin: 'right' });
ScrollReveal().reveal('.experience-image', { delay: 650, origin: 'top', interval: 150 });
ScrollReveal().reveal('.experience-image', { delay: 650, origin: 'top', interval: 150 });
ScrollReveal().reveal('.defiler-container', { delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.img-ciel', { delay: 600, origin: 'top', distance: '40px'});
ScrollReveal().reveal('.img-sol', { delay: 600, origin: 'bottom', distance: '40px'});


/******** Function pour carrousel dans la page-explore *******************/

$('.slide').hiSlide();
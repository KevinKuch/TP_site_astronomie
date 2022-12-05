$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      
    });
  });

  // $(window).on('scroll', function() {
  //   let parallax = $(".img-person-col");
  //   let scrollPosition = $(this).scrollTop();
  //   parallax.css("transform", "translateY(" + scrollPosition * 0.5 + "px" + ")");
  // });

// Effet de parralax

// let imgCiel = document.getElementsByClassName('img-ciel');
// let imgPerso = document.getElementsByClassName('img-person-sol');
// let textAccueil = document.getElementsByClassName('text-accueil');

// window.addEventListener('scroll', function() {
//     let value = window.scrollY;

//     imgCiel.style.top = value * 0.7 + 'px';
//     imgPerso.style.bottom = value * 0.5 + 'px';
//     textAccueil.style.top = value * 1 + 'px';
// });






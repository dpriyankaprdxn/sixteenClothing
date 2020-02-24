var hamburger = document.querySelector('.hamburger');
var navbar = document.getElementsByTagName('nav')[0];

hamburger.addEventListener('click',navshow);

function navshow() {
	navbar.className = "mobileNav";

if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
	hamburger.classList.toggle('open');
}

    // $(document).ready(function(){
    //   $('.slider').slick();
    // });


$(window).on('load', function() {

$('.bannerSlider').slick({
  dots: true,    
  arrows : false ,
  autoplay: true,
  autoplaySpeed: 2000
});
})
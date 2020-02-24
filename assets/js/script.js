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

$(window).on('load', function() {

$('.bannerSlider').slick({
  dots: true,    
  arrows : false ,
  autoplay: true,
  autoplaySpeed: 2000
});

})

$(document).ready(function() {

	$('nav a').on('click',function() {
		if(!$(this).hasClass('active')) {
      $("nav .active").removeClass("active");
      $(this).addClass("active");        
		}
	});

  $(".hamburger").on("click",function() {
  	$('nav').toggleClass('showhide');
     $(".hamburger open").toggle();
	});

});
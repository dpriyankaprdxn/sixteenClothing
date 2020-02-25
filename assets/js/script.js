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
    $(".hamburger").toggleClass('open');
	});

});
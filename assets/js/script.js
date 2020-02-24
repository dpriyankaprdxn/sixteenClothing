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
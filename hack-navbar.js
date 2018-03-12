const hamMenu = document.querySelector(".ham-menu");
const mobileMenu = document.querySelector(".mobile-menu");

// "initialize" display property of mobileMenu
mobileMenu.style.display = "none";

// Make mobile menu appear on click
hamMenu.addEventListener("click", function(){
	// toggle mobile menu on click
	if (mobileMenu.style.display === "none") {
		mobileMenu.style.display = "block";
		setTimeout(function() {
			mobileMenu.style.animationPlayState = "pause";
		}, 1.8);
	} else if (mobileMenu.style.display === "block") {
		mobileMenu.style.display = "none";
	}
});
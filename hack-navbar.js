const hamMenu = document.querySelector(".ham-menu");

const mobileMenu = document.querySelector(".mobile-menu");
// "initialize" display property of mobileMenu
mobileMenu.style.display = "none";

// Attach on click handler for hamburger menu
// test that click listener is working

hamMenu.addEventListener("click", function(){
	// test event listener
	console.log("ham-menu clicked!");

	// toggle mobile menu on click
	if (mobileMenu.style.display === "none") {
		mobileMenu.style.display = "block";
		// mobileMenu.style.opacity = 0;
		setTimeout(function() {
			mobileMenu.style.animationPlayState = "pause";
		}, 1.8);
	} else if (mobileMenu.style.display === "block") {
		mobileMenu.style.display = "none";
	}
});
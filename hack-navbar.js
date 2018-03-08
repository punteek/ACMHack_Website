const hamMenu = document.querySelector(".ham-menu");
const mobileMenu = document.querySelector(".mobile-menu");

// Attach on click handler for hamburger menu
// test that click listener is working

hamMenu.addEventListener("click", function(){
	// test event listener
	console.log("ham-menu clicked!");

	// toggle mobile menu on click
	mobileMenu.style.display = mobileMenu.style.display === "none" ? "block" : "none";
});
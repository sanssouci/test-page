// Toggle mobile menu active on click

jQuery('#menu-toggle').click(function(){
	jQuery('#mobile-menu-container').toggleClass('active');
});

// Set Form Password visibility 

jQuery(".toggle-password").click(function() {
	jQuery(this).toggleClass("fa-eye fa-eye-slash");
	var input = jQuery(jQuery(this).attr("toggle"));
	if (input.attr("type") == "password") {
	input.attr("type", "text");
	} else {
	input.attr("type", "password");
	}
});
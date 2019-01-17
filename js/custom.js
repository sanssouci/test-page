jQuery(function() {

    // Toggle mobile menu active on click
    jQuery('#menu-toggle').click(function() {
        jQuery(this).find("i").toggleClass('fa-times');
        jQuery(this).next("#mobile-menu").fadeToggle("fast");
    });

    // Set form password visibility 
    jQuery(".toggle-password").click(function() {
        jQuery(this).toggleClass("fa-eye fa-eye-slash");
        var input = jQuery(jQuery(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    // Delay dummy form submit to show loading
    jQuery("#signup").on('submit', function(e) {
        e.preventDefault();

        jQuery(".submit i").addClass("loading fa-spinner fa-spin");

        setTimeout(function() {
            jQuery(".submit i").removeClass("loading fa-spinner fa-spin");
            /*document.getElementById("signup").reset();*/
            jQuery("#signup input, #signup button, #signup i, #signup .terms").css('opacity', '0');
            jQuery("#signup .success-message").fadeIn();
        }, 3000);

    });

});
jQuery(document).ready(function() {
    jQuery('.grid-item').click(function() {
		jQuery('.overlay').addClass('is-open');
    jQuery('.text-wrapper').css("opacity", "1");
	});
});


jQuery('.closebtn').click(function() {
    jQuery('.overlay').removeClass('is-open');
    jQuery('.text-wrapper').css("opacity", "0");
    return false;
  });
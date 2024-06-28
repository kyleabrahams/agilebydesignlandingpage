AOS.init();

// Back to top button
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

// Counter animation

function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem.length == 0 ) {
		return;
	}
	var $window = jQuery(window)
	var viewport_top = $window.scrollTop()
	var viewport_height = $window.height()
	var viewport_bottom = viewport_top + viewport_height
	var $elem = jQuery(elem)
	var top = $elem.offset().top
	var height = $elem.height()
	var bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}

jQuery( document ).ready( function() {
	window.addEventListener('scroll', function(e) {
		// if( isOnScreen( jQuery( '.counter-count' ) ) ) { /* Pass element id/class you want to check */
		if( isOnScreen( jQuery( '.counter-count') ) ) { /* Pass element id/class you want to check */
		
		// $('.counter-count').each(function () {
		// $('.counter-count').on("scroll", function () {

		// 	$(this).prop('Counter',0).animate({
		// 		Counter: $(this).text()
		// 	}, {
		// 		duration: 2500,
		// 		easing: 'swing',
		// 		step: function (now) {
		// 			$(this).text(Math.ceil(now));
		
			
			
			
			
			
			// alert( 'The specified container is in view.' );
 		}	
	});
	
});



// $('.counter-count').each(function () {
// 	$(this).prop('Counter',0).animate({
// 		Counter: $(this).text()
// 	}, {
// 		duration: 2500,
// 		easing: 'swing',
// 		step: function (now) {
// 			$(this).text(Math.ceil(now));
// 		}
// 	});
// });
$(function() {
	// dropdown menu
	$(document).click(function (e) {
		var menu = $(".nav__dropdown");

		if (menu.is(e.target)) {
			$('.nav__menu').toggleClass('open');
			menu.toggleClass('open');
		} else if (!menu.is(e.target)
		    && menu.has(e.target).length === 0) {
			$('.nav__menu').removeClass('open');
			menu.removeClass('open');
		}
	});

	// initial slick slider
	$('.single-slider').slick({
		arrows: false,
		dots: true,
		draggable: false
	});
})
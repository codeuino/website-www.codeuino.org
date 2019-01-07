/*
* Template Name: Unify - Responsive Bootstrap Template
* Version: 1.9
* Author: @htmlstream
* Website: http://htmlstream.com
*/

var App = function() {

	// Bootstrap
	function handleBootstrap() {
		/*Bootstrap Carousel*/
		jQuery('.carousel').carousel({
			interval: 15000,
			pause: 'hover'
		});

		/* Tooltips */
		jQuery('.tooltips').tooltip();
		jQuery('.tooltips-show').tooltip('show');
		jQuery('.tooltips-hide').tooltip('hide');
		jQuery('.tooltips-toggle').tooltip('toggle');
		jQuery('.tooltips-destroy').tooltip('destroy');

		/* Popovers */
		jQuery('.popovers').popover();
		jQuery('.popovers-show').popover('show');
		jQuery('.popovers-hide').popover('hide');
		jQuery('.popovers-toggle').popover('toggle');
		jQuery('.popovers-destroy').popover('destroy');
	}

	// Equal Height Columns
	function handleEqualHeightColumns() {
		var EqualHeightColumns = function () {
			$('.equal-height-columns').each(function() {
				heights = [];
				$('.equal-height-column', this).each(function() {
					$(this).removeAttr('style');
					heights.push($(this).height()); // Write column's heights to the array
				});
				$('.equal-height-column', this).height(Math.max.apply(Math, heights)); // Find and set max
			});
		}

		EqualHeightColumns();
		$(window).resize(function() {
			EqualHeightColumns();
		});
		$(window).load(function() {
			EqualHeightColumns('img.equal-height-column');
		});
	}

	// Full Screen
	var handleFullscreen = function() {
		var WindowHeight = $(window).height();

		if ($(document.body).hasClass('promo-padding-top')) {
			HeaderHeight = $('.header').height();
		} else {
			HeaderHeight = 0;
		}

		$('.fullheight').css('height', WindowHeight - HeaderHeight);

		$(window).resize(function() {
			var WindowHeight = $(window).height();
			$('.fullheight').css('height', WindowHeight - HeaderHeight);
		});
	}

	// Align Middle
	var handleValignMiddle = function() {
		$('.valign__middle').each(function() {
			$(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
		});
		$(window).resize(function() {
			$('.valign__middle').each(function() {
				$(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
			});
		});
	}

	// Header
	function handleHeader() {
		// jQuery to collapse the navbar on scroll
		if ($('.navbar').offset().top > 150) {
			$('.navbar-fixed-top').addClass('top-nav-collapse');
		}
		$(window).scroll(function() {
			if ($('.navbar').offset().top > 150) {
				$('.navbar-fixed-top').addClass('top-nav-collapse');
			} else {
				$('.navbar-fixed-top').removeClass('top-nav-collapse');
			}
		});

		var $offset = 0;
		if ($('.one-page-nav-scrolling').hasClass('one-page-nav__fixed')) {
			$offset = $(".one-page-nav-scrolling").height()+8;
		}
		// jQuery for page scrolling feature - requires jQuery Easing plugin
		$('.page-scroll a').bind('click', function(event) {
			var $position = $($(this).attr('href')).offset().top;
			$('html, body').stop().animate({
				scrollTop: $position - $offset
			}, 600);
			event.preventDefault();
		});

		var $scrollspy = $('body').scrollspy({target: '.one-page-nav-scrolling', offset: $offset+2});

		// Collapse Navbar When It's Clickicked
		$(window).scroll(function() {
			$('.navbar-collapse.in').collapse('hide');
		});
	}

	return {
		init: function() {
			handleBootstrap();
			handleEqualHeightColumns();
			handleFullscreen();
			handleValignMiddle();
			handleHeader();
		},

		initCounter: function() {
			jQuery('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		},

		initParallaxBg: function() {
			$(window).load(function() {
				jQuery('.parallaxBg').parallax('50%', 0.4);
				jQuery('.parallaxBg1').parallax('50%', 0.2);
			});
		},

		initParallaxBg2: function() {
			$(window).load(function() {
				jQuery('.parallaxBg').parallax('50%', '50%');
			});
		},
	};
}();

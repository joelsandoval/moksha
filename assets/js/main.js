/*
Template name: Qisnum
JS Index::::::::::::::
0. Preloader
1. Mobile responsive menu 
2. Search popup
3. Data background & color
4. slider 1 
5. Testimonials slider
6. Service slider 
7. Case study slider 
8. Partner logo slider 
9. Button hover animation 
10. Progress bar
11. Counter scripts 
12. Header sticky on scroll
13. Back to top scroll
14. Circle progress
15. FAQ scripts 
*/
// 0. Preloader 
(function ($) {
	"use strict";
	//Site Preloader
	function SitePreloader() {
	  if ($('.preloader-wrap').length) {
		$('body').addClass('page-loaded');
		$('.preloader-wrap').delay(1000).fadeOut(0);
	  }
	}
	$(window).on('load', function () {
	  SitePreloader();
	});
  })(window.jQuery),
(function ($) {
	"use strict";
	// 1. Mobile responsive menu 
	$(document).ready(function () {
		MobileHeader.init();
	});
	var MobileHeader = {
		init: function () {
			var $holder = $('#micro-mobile-header');
			if ($holder.length) {
				MobileHeader.initMobileHeaderOpener($holder);
				MobileHeader.initDropDownMobileMenu();
			}
		},
		initMobileHeaderOpener: function (holder) {
			var $opener = holder.find('.menu-trigger');
			if ($opener.length) {
				var $navigation = holder.find('.micro-mobile-header-navigation');
				$opener.on('tap click', function (e) {
					e.preventDefault();
					if ($navigation.is(':visible')) {
						$navigation.slideUp(450);
						$opener.removeClass('mobile-menu-opened');
					} else {
						$navigation.slideDown(450);
						$opener.addClass('mobile-menu-opened');
					}
				});
			}
		},
		initDropDownMobileMenu: function () {
			var $dropdownOpener = $('.micro-mobile-header-navigation .menu-item-has-children > a');
			if ($dropdownOpener.length) {
				$dropdownOpener.each(function () {
					var $thisItem = $(this);
					$thisItem.on('tap click', function (e) {
						e.preventDefault();
						var $thisItemParent = $thisItem.parent(),
							$thisItemParentSiblingsWithDrop = $thisItemParent.siblings('.menu-item-has-children');
						if ($thisItemParent.hasClass('menu-item-has-children')) {
							var $submenu = $thisItemParent.find('ul.sub-menu').first();
							if ($submenu.is(':visible')) {
								$submenu.slideUp(450);
								$thisItemParent.removeClass('mobile-menu-opened');
							} else {
								$thisItemParent.addClass('mobile-menu-opened');
								if ($thisItemParentSiblingsWithDrop.length === 0) {
									$thisItemParent.find('.sub-menu').slideUp(400, function () {
										$submenu.slideDown(400);
									});
								} else {
									$thisItemParent.siblings().removeClass('mobile-menu-opened').find('.sub-menu').slideUp(400, function () {
										$submenu.slideDown(400);
									});
								}
							}
						}
					});
				});
			}
		}
	};
	// 2. Search popup 
	jQuery(".search-trigger").on('click', function () {
		jQuery(".full-bar-search-wrap").addClass('search-show');
		jQuery("body").addClass('st-prevent-scroll');
		jQuery(".field.searchform-s").focus();
		return !1
	});
	jQuery(".close-search").on('click', function () {
		jQuery(".full-bar-search-wrap").removeClass('search-show');
		jQuery("body").removeClass('st-prevent-scroll');
		return !1
	});
	jQuery('.search-trigger').on('click', function (event) {
		event.stopPropagation()
	});
	// 3. Data background & color 
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
	$("[data-background-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-background-color"));
	});
	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});
	// 4. slider 1 
	var microslider = new Swiper('.micro-slider', {
		navigation: {
			nextEl: '.slider-button-next',
			prevEl: '.slider-button-prev',
		},
		autoplay: {
			delay: 8000,
		},
		loop: true,
	});
	//  5. Testimonials slider  
	$(window).on("load", function () {
		const swiperElm = document.querySelectorAll(".testimonials_slider");
		swiperElm.forEach(function (swiperelm) {
			const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
			let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
		});
		if ($(".testimonials-thumbs").length) {
			let testimonialsThumb = new Swiper(".testimonials-thumbs", {
				slidesPerView: 3,
				spaceBetween: 10,
				speed: 1000,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				autoplay: {
					delay: 5000
				}
			});
			let testimonialsMeta = new Swiper(".testimonials-meta", {
				slidesPerView: 1,
				spaceBetween: 0,
				speed: 1000,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				effect: 'slide',
				autoplay: {
					delay: 5000
				}
			});
			let testimonialsCarousel = new Swiper(".testimonials-slider", {
				observer: true,
				observeParents: true,
				speed: 1000,
				mousewheel: true,
				slidesPerView: 1,
				autoplay: {
					delay: 5000
				},
				thumbs: {
					swiper: testimonialsThumb
				}
			});
			testimonialsCarousel.controller.control = testimonialsMeta;
			testimonialsMeta.controller.control = testimonialsCarousel;
		}
	});
	// 6. Service slider 
	var serviceslider = new Swiper('.service-slider', {
		slidesPerView: 1,
		autoplay: {
			delay: 8000,
		},
		loop: false,
		spaceBetween: 30,
		pagination: {
			el: '.services-pagination',
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		}
	});
	// 7. Case study slider 
	var CaseStudiesSlider = new Swiper('.case-studies-slider', {
		slidesPerView: 1,
		autoplay: {
			delay: 12000,
		},
		loop: false,
		spaceBetween: 30,
		breakpoints: {
			576: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1400: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		}
	});
	//   8. Partner logo slider 
	var PartnersSlider = new Swiper('.partner-slider', {
		slidesPerView: 1,
		autoplay: {
			delay: 12000,
		},
		loop: false,
		spaceBetween: 10,
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1400: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		}
	});
	// 9. Button hover animation 
	$('.theme-btn, .menu-btn').append('<span></span>');
	if ($('.theme-btn, .menu-btn').length > 0) {
		$('.theme-btn, .menu-btn').on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			if ($(this).find('span')) {
				$('.theme-btn span, .menu-btn span').css({
					top: relY,
					left: relX,
				})
			}
		});
		$('.theme-btn, .menu-btn').on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			if ($(this).find('span')) {
				$('.theme-btn span, .menu-btn span').css({
					top: relY,
					left: relX,
				})
			}
		})
	}
	// 10. Progress bar 
	if ($('.progressbar-line-active').length) {
		$('.progressbar-line-active').appear(function () {
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width', percent).addClass('counted');
		}, {
			accY: -50
		});
	}
	// 11. Counter scripts 
	if ($(".counter-block").length) {
		$(".counter-block").appear(
			function () {
				var $t = $(this),
					num = $t.find(".counter-number").attr("data-stop"),
					speed = parseInt($t.find(".counter-number").attr("data-speed"), 10);
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".counter-number").text()
					}).animate({
						countNum: num
					}, {
						duration: speed,
						easing: "linear",
						step: function () {
							$t.find(".counter-number").text(Math.floor(this.countNum));
						},
						complete: function () {
							$t.find(".counter-number").text(this.countNum);
						}
					});
				}
			}, {
				accX: 0,
				accY: 0
			}
		);
	}
	// 12. Header sticky on scroll
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 450) {
			$('.menu-container').addClass("is-sticky");
		} else {
			$('.menu-container').removeClass("is-sticky");
		}
	});
	// 13. Back to top scroll
	var $backToTop = $('.back-to-top');
	if ($backToTop.length > 0) {
		$backToTop.on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: '0px'
			}, 700);
		});
		$(window).on('scroll', function () {
			var scrollPosition = $(window).scrollTop();
			var windowHeight = $(window).height() / 2;
			if (scrollPosition > windowHeight) {
				$backToTop.addClass('in');
			} else {
				$backToTop.removeClass('in');
			}
		});
	}
	// 14. Circle progress 
	if ($(".circle-box").length) {
		$(".circle-box").appear(
			function () {
				var elm = $(this);
				var color = elm.attr("data-fgColor");
				var perc = elm.attr("value");
				var thickness = elm.attr("data-thickness");
				elm.knob({
					value: 0,
					min: 0,
					max: 100,
					skin: "tron",
					readOnly: true,
					thickness: thickness,
					dynamicDraw: true,
					displayInput: false
				});
				$({
					value: 0
				}).animate({
					value: perc
				}, {
					duration: 2000,
					easing: "swing",
					progress: function () {
						elm.val(Math.ceil(this.value)).trigger("change");
					}
				});
			}, {
				accY: 0
			}
		);
	}
	if ($(".counter-box").length) {
		$(".counter-box").appear(
			function () {
				var $t = $(this),
					n = $t.find(".counter-text").attr("data-stop"),
					r = parseInt($t.find(".counter-text").attr("data-speed"), 10);
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".counter-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function () {
							$t.find(".counter-text").text(Math.floor(this.countNum));
						},
						complete: function () {
							$t.find(".counter-text").text(this.countNum);
						}
					});
				}
			}, {
				accY: 0
			}
		);
	}
	// 15. FAQ scripts 
	$(".faq-header").on('click', function () {
		$(this).closest(".faq-item").toggleClass("faq-item-active").siblings().removeClass("faq-item-active");
	});
	
})(jQuery);
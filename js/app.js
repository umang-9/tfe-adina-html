jQuery.noConflict();

(function ($) { // noConflict function start

	$(function () {	// ready function start
		console.log("Ready");

		/* Locomotive scroll (ls) :: Start */
		var optionsLs = {
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			multiplier: 1.25,
			getDirection: true,
			getSpeed: true,
			reloadOnContextChange: true
			// resetNativeScroll: false
		};

		if ($('[data-scroll-container]').length) {

			// Init
			const ls = new LocomotiveScroll(optionsLs);

			// functions
			window.lsScrollTo = function (toPosition, offset = 0) {
				ls.scrollTo(toPosition, {
					offset: offset
				});
			}

			// Update to recalculate the scroll
			window.lsUpdate = function () {
				setTimeout(function () {
					ls.update();
				}, 300);
			}

			// Events
			// on Scroll event replaces $(document).scroll event
			ls.on('scroll', function (args) {
				onScroll(args);
			});

			// Update on init
			lsUpdate();
		}
		/* Locomotive scroll :: End */

		// Fallback for events of no custom scroll
		if (typeof ls === 'undefined') {
			// Fallback for scroll event
			$(document).on('scroll', function (e) {
				onScroll(e);
			});
		}


		// $('.overlay').on('click', function () {
		// 	$('.sidebar').removeClass('active');
		// 	$('body').removeClass('sidebar-active');
		// });

		$(window).on("resize", function () {

		});

		if ($(window).scrollTop() > 0) {
			$(".site-header").removeClass("transparent-header");
			// $(".back-to-top").addClass("active");
		} else {
			$(".site-header").addClass("transparent-header");
			// $(".back-to-top").removeClass("active");
		}

		$(".collect-slider").slick({
			dots: true,
			arrows: false,
			infinite: true,
			slidesToShow: 1,
			touchThreshold: 100,
			fade: true,
			speed: 900,
			cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
		});

		const $dropdown = $(".dropdown");
		const $dropdownToggle = $(".dropdown-toggle");
		const $dropdownMenu = $(".dropdown-menu");
		const showClass = "show";

		/* [Bootstrap sub-menu work on hover] */
		window.bsMenuOnHover = function () {
			if (this.matchMedia("(min-width: 1200px)").matches) {

				$dropdown.hover(
					function () {

						console.log("menu hover");
						const $this = $(this);
						$this.addClass(showClass);
						$this.find($dropdownToggle).attr("aria-expanded", "true");
						$this.find($dropdownMenu).addClass(showClass);
					},
					function () {
						const $this = $(this);
						$this.removeClass(showClass);
						$this.find($dropdownToggle).attr("aria-expanded", "false");
						$this.find($dropdownMenu).removeClass(showClass);
					}
				);
			}
			else {
				$dropdown.off("mouseenter mouseleave");
			}
		}

		$('.add').on('click', function () {
			var $qty = $(this).closest('.value-num_wrap').find('.qty');
			var currentVal = parseInt($qty.val());
			if (!isNaN(currentVal)) {
				$qty.val(currentVal + 1);
			}
		});
		$('.minus').on('click', function () {
			var $qty = $(this).closest('.value-num_wrap').find('.qty');
			var currentVal = parseInt($qty.val());
			if (!isNaN(currentVal) && currentVal > 0) {
				$qty.val(currentVal - 1);
			}
		});

		$(".stay_widget_wrap .dropdown-menu a").click(function () {
			$("#selectOption").text($(this).text());
		});
		$('.header-right a.btn').click(function () {
			$(this).parent('.header-right').find('.stay_way_widget').toggleClass('open');
			$(this).toggleClass('show');
			$(this).parent('.header-right').toggleClass('show');

		});
		// $(document).on("click", function(e) {
		// 	if ($(e.target).is(".header-right") === false) {
		// 	  $(".stay_way_widget").removeClass("open");
		// 	  $(".header-right a.btn").removeClass("show");
		// 	  $(".header-right").removeClass("show");
		// 	}
		// });
		$('.stay_widget_wrap .back_btn a').click(function () {
			$(this).parent('.back_btn').parent('.stay_widget_wrap').parent('.stay_way_widget.open').removeClass('open');
			$('.header-right a.show').removeClass('show')

		});

		// if( $('.date_picker').length ) {
		// 	$('.date_picker input').daterangepicker({
		// 		singleDatePicker: true,
		// 		showDropdowns: true,
		// 	});
		// }

		$('.banner_slider').slick({
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',
			dots: true,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 4000,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear'
			// centerMode: true,
			// focusOnSelect: true
		});
		$('.room_image_slider').slick({
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',
			dots: false,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 4000,
			// infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear'
		});
		$('.booking_slider').slick({
			nextArrow: '<button type="button" class="slick-next">Next room<i class="fal fa-chevron-right"></i></button>',
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i>Previous room</button>',
			dots: false,
			arrows: true,
			// autoplay: true,
			// autoplaySpeed: 4000,
			// infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear'
		});

		jQuery(function ($) {
			$('.site-main a[href*="#"]:not([href="#"])').click(function (e) {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {


					var target = $(this.hash);

					headerHeight = $('header .navbar').height();

					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

					if (target.length) {
						$('html,body').stop().animate({
							scrollTop: target.offset().top - headerHeight //offsets for fixed header
						}, 'linear');

					}
				}
			});
		});
		datePicker();
		function datePicker() {
			var month = new Array();
			month[0] = "Jan";
			month[1] = "Feb";
			month[2] = "Mar";
			month[3] = "Apr";
			month[4] = "May";
			month[5] = "Jun";
			month[6] = "Jul";
			month[7] = "Aug";
			month[8] = "Sept";
			month[9] = "Oct";
			month[10] = "Nov";
			month[11] = "Dec";
			var todaydate = new Date();
			var curr_date = todaydate.getDate();
			var curr_month = month[todaydate.getMonth()];
			var curr_year = todaydate.getFullYear();
			var f_current_year = curr_year.toString().substr(-2);
			var current_input_date = curr_date + " " + curr_month + " " + f_current_year;

			$('input[name="main-input-search"]').daterangepicker({
				autoUpdateInput: false,
				minDate: new Date(),
				// parentEl: $(".checking_row .row"),
				locale: {
					cancelLabel: 'Cancel',
					applyLabel: 'Apply',
					format: 'D MMM, YYYY',
					// separator: "<div style='text-align: center'>-</div>"

				}
			});
			$('input[name="main-input-search"]').on('apply.daterangepicker', function (ev, picker) {
				$(this).val(picker.startDate.format('D MMM YYYY') + '        ' + picker.endDate.format('D MMM YYYY'));
				$('#arrive').val(picker.startDate.format('D MMM, YYYY'));
				$('#depart').val(picker.endDate.format('D MMM, YYYY'));
				$('#arrive1').val(picker.startDate.format('D MMM, YYYY'));
				$('#depart1').val(picker.endDate.format('D MMM, YYYY'));
				$('#arrive2').val(picker.startDate.format('D MMM, YYYY'));
				$('#depart2').val(picker.endDate.format('D MMM, YYYY'));


				// $('#start_booking_date').datepicker('setDate', new Date(picker.startDate));
				// $("#end_booking_date").datepicker('setDate', new Date(picker.endDate));
				// console.log('line 252 start day=' + $("#start_booking_date").val() + ', end day=' + $("#end_booking_date").val());
				// console.log('line 252 start day=' + $('#start_booking_date').datepicker('getDate') + ', end day=' + $('#end_booking_date').datepicker('getDate'));

				// console.log('line 258 checkin day=' + $('.picker-holder.in input').val() + ', checkout day=' + $('.picker-holder.out input').val());

			});

			$('input[name="main-input-search"]').on('cancel.daterangepicker', function (ev, picker) {
				$('#arrive').val(current_input_date);
				$('#depart').val(current_input_date);
				$('#arrive1').val(current_input_date);
				$('#depart1').val(current_input_date);
				$('#arrive2').val(current_input_date);
				$('#depart2').val(current_input_date);


				$(this).val(current_input_date + '          ' + current_input_date);
				// $("#start_booking_date").val(current_input_date);
				// $("#end_booking_date").val(current_input_date);

			});

		}

		// $('#two-inputs').dateRangePicker({
		// 	separator : '',
		// 	getValue: function()
		// 	{
		// 		if ($('#arrive').val() && $('#depart').val() )
		// 			return $('#arrive').val() + ' to ' + $('#depart').val();
		// 		else
		// 			return '';
		// 	},
		// 	setValue: function(s,s1,s2)
		// 	{
		// 		$('#arrive').val(s1);
		// 		$('#depart').val(s2);
		// 	}
		// });



		// splitting title words using splitting.js 
		// add "data-splitting" attribute to those words/title that you want to split
		if ($('.banner-title').length || $('.primary_title').length) {
			Splitting();
		}

		// title animation timing 
		const timelineSettings = {
			staggerValue: 0.014,
			charsDuration: 0.9
		};

		// Header content animation 
		// var headerController = new ScrollMagic.Controller();
		// var headerTimeline = gsap.timeline({ paused: true });

		// headerTimeline.fromTo('.navbar-brand, .navbar-collapse, .header-right', 1, {autoAlpha: 0}, {autoAlpha: 1}, 0.5)

		// var headerScene = new ScrollMagic.Scene({
		// 	triggerElement: '.site-header', 
		// 	reverse: false
		// })
		// .setTween(headerTimeline.play())
		// .addTo(headerController);

		// Banner text animation start
		// if( $('.banner-section').length ) { 

		var bannerController = new ScrollMagic.Controller();
		var bannerTitle = $('.banner-title .char');
		const bannerTimeline = gsap.timeline({ paused: true });

		bannerTimeline.fromTo('.navbar-brand, .navbar-toggler, .navbar-collapse, .header-right', 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3)

			.set(bannerTitle, {
				y: '100%',
				opacity: 0
			})

			.staggerTo(bannerTitle, 0.3, {
				ease: 'Power3.easeOut',
				y: '0%',
				opacity: 1
			}, timelineSettings.staggerValue)

			.staggerFromTo('.banner-text, .banner-caption .btn, .banner-logo-wrap', 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3)

		var bannerScene = new ScrollMagic.Scene({
			triggerElement: '.banner-section',
			reverse: false
		})
			.setTween(bannerTimeline.play())
			.addTo(bannerController);
		// }
		// Banner text animation end

		var cutSizes;

		function setCutSize() {

			if (window.matchMedia('(max-width: 575px)').matches) {
				cutSizes = {
					big: '40',
					small: '40',
					hlimg: '40',
				}
			} else if (window.matchMedia('(max-width: 991px)').matches) {
				cutSizes = {
					big: '80',
					small: '60',
					hlimg: '60',
				}
			} else if (window.matchMedia('(max-width: 1199px)').matches) {
				cutSizes = {
					big: '120',
					small: '80',
					hlimg: '60',
				}
			} else {
				cutSizes = {
					big: '142',
					small: '90',
					hlimg: '80',
				}
			}

			// $('.big_right_cut').attr('data-cut', function (i, item) {
			$('.reveal-image, .reveal-image-list').each(function (i, item) {

				$(item).attr('data-cut-init', $(item)[0].offsetWidth > $(item)[0].offsetHeight ? $(item)[0].offsetWidth : $(item)[0].offsetHeight);

				// console.log($(item).data());

				// if ($(item).data('sizeXl') > 0 || $(item).data('sizeMd') > 0 || $(item).data('sizeMd') > 0 || $(item).data('sizeSm') > 0) {
				// if ($(item).data('customCut') > 'true') {
				// custom sizes
				// if (window.matchMedia('(max-width: 575px)').matches && $(item).data('sizeSm') > 0) {
				// 	$(item).attr('data-cut-last', $(item).data('sizeSm'));
				// } else if (window.matchMedia('(max-width: 991px)').matches && $(item).data('sizeMd') > 0) {
				// 	$(item).attr('data-cut-last', $(item).data('sizeMd'));
				// } else if (window.matchMedia('(max-width: 1199px)').matches && $(item).data('sizeMd') > 0) {
				// 	$(item).attr('data-cut-last', $(item).data('sizeMd'));
				// } else if ($(item).data('sizeXl') > 0) {
				// 	$(item).attr('data-cut-last', $(item).data('sizeXl'));
				// } else {
				// 	$(item).attr('data-cut-last', cutSizes.small);
				// }
				// } else {
				// default sizes
				if ($(item).hasClass('big_cut')) {
					$(item).attr('data-cut-last', cutSizes.big);

				} else if ($(item).hasClass('small_cut')) {
					$(item).attr('data-cut-last', cutSizes.small);

				} else if ($(item).hasClass('hlimg_cut')) {
					$(item).attr('data-cut-last', cutSizes.hlimg);

				} else {
					$(item).attr('data-cut-last', cutSizes.small);
				}
				// }


				if ($(item).hasClass('left_cut')) {
					$(item).attr('data-cut-side', "left");
				} else {
					$(item).attr('data-cut-side', "right");
				}

				if (window.matchMedia('(max-width: 767px)').matches) {
					if ($(item).hasClass('left_cut_mobile')) {
						$(item).attr('data-cut-side', "left");
					} else if ($(item).hasClass('right_cut_mobile')) {
						$(item).attr('data-cut-side', "right");
					}
				}

			});
		}

		setCutSize();

		$(window).resize(function () {
			setCutSize();
		});


		// Section title and content animation start 
		var controller = new ScrollMagic.Controller();
		$(".section_main .section-parent").each(function () {
			const timeline = gsap.timeline({ paused: true });
			// var timeline = new TimelineMax();

			var title = $(this).find('.primary_title .char');
			// var formTitle =  $(this).find('.form_title .char');
			var subTitle = $(this).find('.sub_title');
			var paragraph = $(this).find('.primary_content p');
			var address = $(this).find('.adress_detail li');
			var categoryLi = $(this).find('.all_category li');
			var buttonLink = $(this).find('.multi_link');
			var img = $(this).find('.reveal-image');
			// var formContent = $(this).find('.form_content');

			timeline

				// Start values for the section title
				.set(img, {
					clipPath: function (i, item) {
						var cutInit = parseInt($(item).attr('data-cut-init')) * 2.1;
						var clipPath;
						if ($(item).attr('data-cut-side') === 'left') {
							clipPath = "polygon(-1% -1%, 101% -1%, 101% 101%, " + cutInit + "px 101%, -1% calc(101% - " + cutInit + "px))";
						} else {
							clipPath = "polygon(-1% -1%, 101% -1%, 101% calc(101% - " + cutInit + "px), calc(101% - " + cutInit + "px) 101%, -1% 101%)";
						}
						return clipPath;
					}
				})

				.set(title, {
					y: '100%',
					opacity: 0,
				})

				// Animation
				.to(img, {
					duration: 1.5,
					ease: 'Power4.easeOut',
					// clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 145px), calc(100% - 145px) 100%, 0 100%)"
					clipPath: function (i, item) {
						var cutLast = parseInt($(item).attr('data-cut-last'));
						var clipPath;
						if ($(item).attr('data-cut-side') === 'left') {
							clipPath = "polygon(-1% -1%, 101% -1%, 101% 101%, " + cutLast + "px 101%, -1% calc(101% - " + cutLast + "px))";
						} else {
							clipPath = "polygon(-1% -1%, 101% -1%, 101% calc(101% - " + cutLast + "px), calc(101% - " + cutLast + "px) 101%, -1% 101%)";
						}
						return clipPath;
					},
					onComplete: function () {
						// $(img).removeAttr("style").removeClass('reveal-image').addClass('reveal-done');
						$(img).addClass('reveal-done');
					}
				})

				// Stagger the animation of the  section title
				.staggerTo(title, 0.3, {
					// ease: 'Power3.easeOut',
					y: '0%',
					opacity: 1
				}, timelineSettings.staggerValue)

				// Start values for the section title
				// timeline.set(formTitle, {
				// 	y: '100%',
				// 	opacity: 0
				// })

				// Stagger the animation of the  section title
				// .staggerTo( formTitle, 0.5, {
				// 	// ease: 'Power3.easeOut',
				// 	y: '0%',
				// 	opacity: 1
				// }, timelineSettings.staggerValue)

				// Stagger the animation of paragraphs and button
				.staggerFromTo(subTitle, 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3, "-=0.3")
				.staggerFromTo(paragraph, 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3, "-=0.3")
				.staggerFromTo(address, 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3, "-=0.3")
				.staggerFromTo(categoryLi, 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.1, "-=0.3")
				.staggerFromTo(buttonLink, 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3, "-=0.3")
			// .staggerFromTo(img, 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3, "-=0.3")
			// .staggerFromTo(formContent, 0.3, {autoAlpha: 0}, {autoAlpha: 1}, 0.3)

			var scene = new ScrollMagic.Scene({
				triggerElement: this,
				reverse: false,
				offset: -300,
				triggerHook: 0,
			})
				.setTween(timeline.play())
				// .addIndicators({
				// 	colorTrigger: "red",
				// 	colorStart: "blue",
				// 	colorEnd: "green",
				// 	indent: 40
				// 	})
				.addTo(controller);

		});
		// Section title and contennt animation end

		// Animation of Hotels listing section on Accomodation page start 
		var bookingListingController = new ScrollMagic.Controller();
		if ($('.booking_listing_section').length) {
			$(".booking_listing .booking_single_wrap").each(function () {
				const bookingListingTimeline = gsap.timeline({ paused: true });
				// var timeline = new TimelineMax();

				var img = $(this).find('.reveal-image-list');
				var title = $(this).find('.title .char');
				var paragraph = $(this).find('.primary_content p');
				var buttonLink = $(this).find('.multi_link');
				var buttonBox = $(this).find('.right_price_section');

				bookingListingTimeline

					// Start values for the section title
					.set(img, {
						clipPath: function (i, item) {
							var cutInit = parseInt($(item).attr('data-cut-init')) * 2.1;
							var clipPath;
							if ($(item).attr('data-cut-side') === 'left') {
								clipPath = "polygon(-1% -1%, 101% -1%, 101% 101%, " + cutInit + "px 101%, -1% calc(101% - " + cutInit + "px))";
							} else {
								clipPath = "polygon(-1% -1%, 101% -1%, 101% calc(101% - " + cutInit + "px), calc(101% - " + cutInit + "px) 101%, -1% 101%)";
							}
							return clipPath;
						}
					})

					.set(title, {
						y: '100%',
						opacity: 0
					})

					// .staggerFromTo(img, 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3, "-=0.5")
					.to(img, {
						duration: 1.5,
						ease: 'Power4.easeOut',
						// clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 145px), calc(100% - 145px) 100%, 0 100%)"
						clipPath: function (i, item) {
							var cutLast = parseInt($(item).attr('data-cut-last'));
							var clipPath;
							if ($(item).attr('data-cut-side') === 'left') {
								clipPath = "polygon(-1% -1%, 101% -1%, 101% 101%, " + cutLast + "px 101%, -1% calc(101% - " + cutLast + "px))";
							} else {
								clipPath = "polygon(-1% -1%, 101% -1%, 101% calc(101% - " + cutLast + "px), calc(101% - " + cutLast + "px) 101%, -1% 101%)";
							}
							return clipPath;
						},
						onComplete: function () {
							// $(img).removeAttr("style").removeClass('reveal-image').addClass('reveal-done');
							$(img).addClass('reveal-done');
						}
					})

					// Stagger the animation of the  section title
					.staggerTo(title, 0.3, {
						// ease: 'Power3.easeOut',
						y: '0%',
						opacity: 1
					}, timelineSettings.staggerValue)


					// Stagger the animation of paragraphs and button
					.staggerFromTo(paragraph, 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3, "-=0.3")
					.staggerFromTo(buttonLink, 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3, "-=0.3")
					.staggerFromTo(buttonBox, 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3, "-=0.3")

				var bookingListingScene = new ScrollMagic.Scene({
					triggerElement: this,
					reverse: false,
					offset: -500,
					triggerHook: 0.15
				})
					.setTween(bookingListingTimeline.play())
					// .addIndicators({
					// 	colorTrigger: "red",
					// 	colorStart: "blue",
					// 	colorEnd: "green",
					// 	indent: 40
					// 	})
					.addTo(bookingListingController);

			});
		}
		// Animation of Hotes listing section on Accomodation page end 

		$('.back-to-top').click(function (e) {
			e.preventDefault();

			if ($('[data-scroll-container]').length) {
				lsScrollTo("top");
			} else {
				$('html, body').animate({
					scrollTop: 0
				}, 800);
			}
		});

		function onScroll(e) {
			// checking condition for custom scroll or default scroll
			var scrollPos = typeof e.scroll !== 'undefined' ? e.scroll.y : $(window).scrollTop();
			console.log(scrollPos);
			if (scrollPos > 10) {
				$(".site-header").removeClass("transparent-header");
				$(".back-to-top").addClass("active");
			} else {
				$(".site-header").addClass("transparent-header");
				$(".back-to-top").removeClass("active");
			}
		}

	}); // ready function end

	$(window).on("load", function () {
		$('body').addClass('loaded');
	});

})(jQuery); // noConflict function end
$(document).ready(function () {
	"use strict";

	// Modal header ==========

	var popupsToggle = document.querySelectorAll('.open-popup');

	var popupClose = document.querySelectorAll('.close');


	popupsToggle.forEach(function (item) {
		item.addEventListener('click', function () {
			var popupName = item.getAttribute('data-popup');
			document.getElementById(popupName).style.display = 'block';
		})
	})

	popupClose.forEach(function (item) {
		item.addEventListener('click', function () {
			var popup = item.closest('.modal');
			popup.style.display = 'none';
		})
	})

	window.onclick = function (e) {
		if (e.target.classList.contains('modal')) {
			e.target.style.display = 'none';
		}
	}


	// Fixed header ==========

	$(window).scroll(function (event) {
		if ($(window).scrollTop() > 200) {
			$('.new-header').addClass('clone');
		} else {
			$('.new-header').removeClass('clone');
		}
	});



	// SLIDERS ================

	$('.slider-top').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		speed: 1e3,
		arrows: true,
		prevArrow: '<div class="slider-top__prev slider-top__arrows" ><img src="./img/back.svg" alt=""></img></div>',
		nextArrow: '<div class="slider-top__next slider-top__arrows" ><img src="./img/next.svg" alt=""></img></div>',
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.slider-brand').slick({
		infinite: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1e3,
		speed: 1e3,
		arrows: false,
		responsive: [{
				breakpoint: 1224,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 1084,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 530,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 370,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	$('.slider-new').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		speed: 500,
		arrows: true,
		prevArrow: '<div class="slider-new__prev slider-new__arrows" ><img src="./img/back.svg" alt=""></img></div>',
		nextArrow: '<div class="slider-new__next slider-new__arrows" ><img src="./img/next.svg" alt=""></img></div>',
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 639,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			}
		]
	});


	// Product slider

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="product-slider__prev product-slider__arrows" ><img src="./img/back.svg" alt=""></img></div>',
		nextArrow: '<div class="product-slider__next product-slider__arrows" ><img src="./img/next.svg" alt=""></img></div>',
		fade: true,
		asNavFor: '.slider-nav'
	});

	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		vertical: true
	});





	// RangeSlider
	$("#demo_3").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 400,
		to: 600,
		drag_interval: true,
		min_interval: null,
		max_interval: null
	});

});
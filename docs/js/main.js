$(document).ready(function () {
	"use strict";

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
					infinite: true,
					dots: true
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
				breakpoint: 1024,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
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
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 2,
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
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

});
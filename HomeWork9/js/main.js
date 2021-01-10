$(function () {

  $(".menu a, .header__anchor").on("click", function (e) {
		e.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top-83}, 1200);
	});

  $('.slider').slick({
    arrows: false,
    dots: true,
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.header__container').toggleClass('header__container--active')
  });

  var mixer = mixitup('.filters');

});
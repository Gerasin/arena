$(document).ready(function() {

	// мобильное меню
	$('.burger').on('click', function () {
		if($(this).hasClass('active')) { 
			$('.mob-menu').fadeOut(300);
			$(this).removeClass('active');
		} else {
			$('.mob-menu').fadeIn(300);
			$(this).addClass('active');
		};
		return false;
	});

	// карусель
	$('.corusel').owlCarousel({
    	items:1,
	    margin:0,
	    lazyLoad:true,
	    autoHeight:false,
	    nav:false
	});
	$('.corusel-pointer').owlCarousel({
    	items:1,
	    margin:0,
	    lazyLoad:true,
	    autoHeight:false,
	    nav:true
	});

	$('.nav-tabs a').on('click', function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	});

	$(".fancybox").fancybox({
		openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
	});


	// Формирование инпутов
	$('.workarea input[type="text"], .modal input[type="text"]').each(function(){
		var inpHeader = $(this).attr('placeholder');
		var inpCode = $('.inp-st-box').html();
		$(this).wrap('<div class="input-wrap"></div>');
		$(this).parent().prepend('<div class="input-wrap__header">'+ inpHeader +'</div>');
	});
	$('.input-wrap input').on('focusin', function () {
		$(this).parent().find('.input-wrap__header').fadeIn();
		$(this).parent().addClass('active');
		$(this).attr('placeholder', '');
	});
	$('.input-wrap input').on('focusout', function () { 
		var inputVal = $(this).val().length;
		if(inputVal == 0) {
			$(this).parent().find('.input-wrap__header').fadeOut(1);
			$(this).parent().removeClass('active');
			$(this).attr('placeholder', $(this).parent().find('.input-wrap__header').text());
		}
	});

	// Валидация
	if($('.valid-phone').length) {
		$('.valid-phone').inputmask("999999999999");
	};
	$('.valid-btn').on('click', function () {
		$('.input-wrap__erro').remove();
		$('.inp-error').removeClass('inp-error');
		var way = $(this).parents('form');
		var valIndex = 0;
		var errorTxt;
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		way.find('input').removeClass('inp-error');
		way.find('.error-txt').fadeOut();
		way.find('.valid-txt').each(function() {
			var lengthVal = $(this).val().length;
			if(lengthVal < 2) {
				$(this).parent().addClass('inp-error');
				errorTxt = $(this).attr('date-error');
				$(this).parent().prepend('<div class="input-wrap__erro">'+ errorTxt +'</div>');
				valIndex = 1
			}
		});
		way.find('.valid-mail').each(function() {
			console.log('test');
			var lengthVal = $(this).val().length;
			if(lengthVal < 2) {
				$(this).parent().find('.error-txt').fadeIn();
				$(this).parent().addClass('inp-error');
				errorTxt = $(this).attr('date-error');
				$(this).parent().prepend('<div class="input-wrap__erro">'+ errorTxt +'</div>');
				valIndex = 1
			} else {
				if(!pattern.test($(this).val())){
		            $(this).parent().find('.error-txt').fadeIn();
		            $(this).parent().addClass('inp-error');
		            errorTxt = $(this).attr('date-error');
					$(this).parent().prepend('<div class="input-wrap__erro">'+ errorTxt +'</div>');
		            valIndex = 1
		        }
	        }
		});
		way.find('.valid-phone').each(function() {
			var lengthVal = $(this).val().length;
			if(lengthVal < 7) {
				$(this).parent().find('.error-txt').fadeIn();
				$(this).addClass('inp-error');
				valIndex = 1
			}
		});   

		/*if(valIndex == 0) {
			$('#modal-popup').modal('show')
		};*/

		return false
	});





	// arhive
	$('.mask').inputmask("+999(99)999-99-99");  //static mask

	var minHeight = $('.sidebar_inner').height();
	$('.container').css({'min-height' : minHeight});


	$('.corusel').owlCarousel({
    	items:1,
	    margin:0,
	    lazyLoad:true,
	    autoHeight:false,
	    nav:true
	});


	
	$('.mob-menu-close, .mob-menu-bg').on('click', function () {
		$('.mob-menu-close, .mob-menu-bg, .menu').fadeOut(300);
		$('.burger').removeClass('active');
		return false;
	});

	// corusel
	$('.products__slider').owlCarousel({
    	items:4,
    	loop:true,
	    margin:0,
	    autoHeight:false,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        990:{
	            items:3
	        },
	        1330:{
	            items:4
	        }
	    }
	});
	$('.buy__slider').owlCarousel({
    	items:3,
    	loop:true,
	    margin:0,
	    autoHeight:false,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        990:{
	            items:3
	        }
	    }
	});


	$('.gallery__list').owlCarousel({
    	items:1,
    	loop:false,
	    margin:0,
	    autoHeight:false,
	    nav:true,
	    mouseDrag : false,
        touchDrag : false
	});

	// select style
	$('select').selectize({
	    create: true,
	    sortField: 'text'
	});

	// map max width
	mapWidth();

	// min height box info
	minHeightImg();








	// submenu left
	$('.submenu .active > a').on('click', function () {
		if($(this).parent('li').hasClass('open')) { 
			$(this).next('ul').slideUp(300);
			$(this).parent('li').removeClass('open');
		} else {
			$(this).next('ul').slideDown(300);
			$(this).parent('li').addClass('open');
		};
		return false;
	});

	// persona detals open
	$('.persona__detals-lnk a').on('click', function () {
		if($(this).parent().hasClass('active')) { 
			$(this).parent().next('div').slideUp(300);
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().next('div').slideDown(300);
			$(this).parent().addClass('active');
		};
		return false;
	});

	// Center Modal
	function centerModal() {
	  $(this).css('display', 'block');
	  var $dialog = $(this).find(".modal-dialog");
	  var offset = ($(window).height() - $dialog.height()) / 2;
	  $dialog.css("margin-top", offset);
	  $(this).css('display', 'none');
	};
	$('.modal').on('show.bs.modal', centerModal);
	$(window).on("resize", function () {
	    $('.modal').each(centerModal);
	});

	// select style
	$('.select-st').selectize({
	    sortField: 'text'
	});

	// slider
	$('.owl-carousel-big').owlCarousel({
    	items:1,
	    margin:0,
	    autoHeight:true,
	    nav:true
	});
	$('.owl-carousel-min').owlCarousel({
    	items:3,
	    margin:16,
	    autoHeight:true,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        992:{
	            items:2
	        }
	    }

	});

	$('.partners__list').owlCarousel({
    	items:3,
	    margin:16,
	    autoHeight:true,
	    nav:true,
	    responsive:{
	        0:{
	            items:2
	        },
	        992:{
	            items:3
	        }
	    }
	});


	$('.advantages').owlCarousel({
    	items:5,
	    margin:16,
	    autoHeight:true,
	    nav:true,
	    responsive:{
	    	0:{
	            items:1
	        },
	        767:{
	            items:5
	        }
	    }
	});

	// mobile menu
	$('.menu-btn').on('click', function () {
		$('.head__menu-wrap, .mob-menu-bg').fadeIn();
		$('.menu-btn-close').show();
		return false;
	});
	$('.menu-btn-close, .mob-menu-bg').on('click', function () {
		$('.head__menu-wrap, .mob-menu-bg').fadeOut();
		$('.menu-btn-close').hide();
		return false;
	});

	$('.lnk-sub').on('click', function () {
		if($(window).width() < 992) {
			if($(this).hasClass('active')) { 
				$(this).next().slideUp(300);
				$(this).removeClass('active');
			} else {
				$(this).next().slideDown(300);
				$(this).addClass('active');
			};
			return false;
		}
	});


	// fancybox
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '100%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		padding     : 40
	});


	// about text
	$('.about__open-show').on('click', function () {
		$('.about__open-show').hide();
		$('.about__open-hide').show();
		$('.about__wrap').addClass('active');
		return false;
	});
	$('.about__open-hide').on('click', function () {
		$('.about__open-show').show();
		$('.about__open-hide').hide();
		$('.about__wrap').removeClass('active');
		return false;
	});

	footerHeight();

	// Зависающий заголовок
	headerHeight();


	

})
function mapWidth() {
	if($('.map').length) {
		var mapLeft = -1 * $('.contacts').offset().left;
		$('.map').css({'margin-left' : mapLeft, 'margin-right' : mapLeft});
	}
}

function minHeightImg() {
	if($('.magazin-info').length) {
		var minHeightImg = $('.magazin-info').height() + 20;
		$('.page-img').css({'min-height' : minHeightImg});
	}
}

function headerHeight() {

	if($('.section-header').length) {
		var hHeight = $('.section-header h2').height();
		$('.section-header').css({'min-height' : hHeight})

		var headeName = $('.section-header');
		var hStopTop = headeName.offset().top;
		var hStopBottom = $('.section-stop').offset().top - headeName.height() - 22;
		var hStop = hStopBottom - hStopTop;
		$(window).scroll(function(){
			var scrollBody = $(window).scrollTop();
			if(scrollBody > hStopTop) {
				headeName.addClass('active');
			} else {
				headeName.removeClass('active');
			};
			if(scrollBody > hStopBottom) {
				headeName.addClass('stop');
				headeName.find('h2').css({'top' : hStop})
			} else {
				headeName.removeClass('stop');
				
				headeName.find('h2').css({'top' : 0}) 
			};
		})
	}

}



function footerHeight() {
	$('.footer-padding').css({'height' : $('.footer').height() + 30});
}
$(window).load(function() {

	footerHeight();
	headerHeight();

});

$(window).resize(function() {

	footerHeight();
	headerHeight();
	mapWidth();
	minHeightImg();

});



//  REMOVE
$('body').append(
	'<div style="position: fixed; z-index: 9999; bottom: 0; right: 0; background: #fff; border: solid 1px #000; width: 200px; font-size: 13px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px;position:relative;z-index:20; text-decoration:none" onclick="$(this).parent().hide()">Закрыть X</a> \
	<ol style="padding: 9px 0 7px 30px; margin: 0"> \
		<li style="margin: 0 0 5px;"><a href="index.html">Index</a></li> \
	</ol> \
</div>');
import "./scss/main.scss";
import 'bootstrap';

import './jquery.formstyler.js';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import '../node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css';
import '../node_modules/jquery-form-styler/dist/jquery.formstyler.css';



$( document ).ready(function() {

			//кнопка связи
				$(".contact").on({
					mouseenter:function(){
						$("span",this).html("Поехали!")},
					mouseleave:function(){
						$("span",this).html("Связаться с нами")},

					click:function(e){
						$('.popup, .overlay').css({'opacity': 1, 'visibility': 'visible'});
						e.preventDefault();
						$('html, body').css('overflow', 'hidden');
						// $('html, body').addClass('show_overflow_popup');

						// if ($('html, body').attr("class") === 'show_overflow_popup') {
						// 	$('html, body').on('scroll touchmove mousewheel',function(e){
    		// 				e.preventDefault();
						// 	  e.stopPropagation();
						// 	  return false;
						// 	});
						// }

					}

				});
				// if ($('html, body').attr("class") === 'show_overflow_popup') {
				// 			$('html, body').on('scroll touchmove mousewheel',function(e){
    // 						e.preventDefault();
				// 			  e.stopPropagation();
				// 			  return false;
				// 			});
				// 		}

				$('.popup .close_popup, .overlay').click(function (e){
					$('.popup, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
					e.preventDefault();
					$('html, body').css('overflow', 'auto');
					// $('html, body').removeClass('show_overflow_popup');
				});


				$('.ghost-button').click(function () {
	        $.ajax({
	            type: 'GET',
	            url: 'https://leodigital.com.ua/click',
	            data: {	click: 1}
	        })
	            .done(function (data) {
	                console.log(data)
	            })
	            .fail(function () {
	                alert('failed');
	            });
	   		});

	   	//уменьшение попапа, если окно меньше 720px
	   	if($(window).height()<600){
      	$('.popup').css({'height':'90%', 'top':'4%', 'transform':'translate(-50%, 0)'});
      }
      else {
      	$('.popup').css({'height':'590px', 'top':'50%', 'transform':'translate(-50%, -50%)'});
      }
   		$(window).on('resize', function() {
        if($(window).height()<600){
        	$('.popup').css({'height':'90%', 'top':'4%', 'transform':'translate(-50%, 0)'});
        }
        else {
        	$('.popup').css({'height':'590px', 'top':'50%', 'transform':'translate(-50%, -50%)'});
        }
  		})

			//подсветка пункта меню страницы при загрузке
				var location = window.location.href;
				var cur_url = '/' + location.split('/').pop();

				$('.menu li').each(function () {
					var link = $(this).find('a').attr('href');
					if (cur_url == link){
						$(this).addClass('main-link_activ');
					}
				});
			//переключение пунктов меню
				$('.header_container').on('click', 'a', function(){
          if ( !$(this).hasClass('main-link_activ') ) {
              $(this).parents('#top_menu').find('.main-link_activ').removeClass('main-link_activ');
              $(this).addClass('main-link_activ');
          }
          else {
              $(this).addClass('main-link_activ');
          } 
	      });
			//открыть/закрыть выпадающее меню, скрываем прокрутку
		        var hamburger = $('#hamburger-icon');
		        var nav = $('#navbarToggleExternalContent');
		        var html = $('html');
		        hamburger.click(function() {
		            hamburger.toggleClass('active collapsed');
		            nav.toggleClass('show');
		            html.toggleClass('show_overflow');
		            return false;
		        });
		       
		       
		    //запуск плагина для select
		        $('.language').styler({
		            // selectSmartPositioning: false;
		        });

		    });
		    //уменшение/увеличение меню при скроле
		    $(document).on("scroll",function(){
		        if($(document).scrollTop()>50){ 
		            $(".navbar").removeClass("large").addClass("small");
		        }
		        else{
		            $(".navbar").removeClass("small").addClass("large");
		        }
			});
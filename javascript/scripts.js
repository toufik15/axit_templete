

jQuery(document).ready(function(){

	jQuery(".scrolltotop").click(function(){

		jQuery("html").animate({'scrollTop' : '0px'},1000);
	});



	jQuery(window).scroll(function(){

/*		var headerheight = jQuery(".header").innerHeight();
		var bannerheight = jQuery(".banner-section").innerHeight();

		var totalheight = parseInt(headerheight) + parseInt(bannerheight);*/

		var count = jQuery(window).scrollTop();

		if (count>400) {

			jQuery(".scrolltotop").show();
		}
		else{
			jQuery(".scrolltotop").hide();
		}
	});



		jQuery(".banner-right form").submit(function(){

			if (jQuery("input[type='text']").val() == '') {
				/*jQuery("input[type='text'],input[type='email'],input[type='password']").*/alert("Fill Up form");
			}
			else if(jQuery("input[type='email']").val() == ''){
				/*jQuery("input[type='text'],input[type='email'],input[type='password']").*/alert("Fill Up form");
			}
			else if(jQuery("input[type='password']").val() == ''){
				/*jQuery("input[type='text'],input[type='email'],input[type='password']").*/alert("Fill Up form");
			}
			else{
				alert("message sent successfylly");
			}			

		});

		jQuery(".clickhere").click(function(){

			alert("You can't download at this moment");
		});



		jQuery(".bars").click(function(){

			jQuery(".main-menu ul").slideToggle();
		})


		jQuery(window).resize(function(){

			var winWidth = jQuery(window).width();


			if(winWidth>435){
				jQuery(".main-menu ul").removeAttr('style');
			}

		})



});































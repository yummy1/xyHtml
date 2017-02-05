$(document).ready(function(){
	$("#firstpane .menu_body:eq(0)").show();
	$("#firstpane p.menu_head").click(function(){
		$(this).addClass("current").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp();
		$(this).siblings().removeClass("current");
	});
	$("#secondpane .menu_body:eq(0)").show();
	$("#secondpane p.menu_head").mouseover(function(){
		$(this).addClass("current").next("div.menu_body").slideDown(500).siblings("div.menu_body").slideUp();
		$(this).siblings().removeClass("current");
	});

		$(function(){
			$(".fenlei").click(function(event) {
				$(".cebianbg").fadeIn();
    			$(".cebian").animate({left:0},500);
			});
			$(".cebianbg").click(function(event) {			
				$(".cebianbg").fadeOut();
				$(".cebian").animate({left:"-2rem"},500);
			});

       //  	$(".fenlei").on("click", function(e){ 
    			// $(".cebianbg").css({
    			// 	display: 'block'
    			// });
    			// $(".cebian").animate({left:0},1000);
        		
       //  		$(document).one("click", function(){ 

       //  			$(".cebianbg").css({
	    		// 		display: 'none'
	    		// 	});
	    			
       //  			$(".cebian").animate({left:"-2rem"},1000);

       //  		}); 
       //  		e.stopPropagation(); 
       //  	}); 
       //  	$(".cebian").on("click", function(e){ 
       //  		e.stopPropagation(); 
       //  	});
        })
	
});
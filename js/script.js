$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer", "Passive Investor"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
        loop:true,
        items: 6,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2 
	        },
	        767:{
	            items:3
            },
            938: {
                items: 6
            }
	    }
	});

   var skillsTopOffset = $(".skillsSection").offset().top;
   $(window).scroll(function(){
       if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) { //200 - wait for some time after reaching top
          $('.chart').easyPieChart({
              easing: 'easeInOut',
              barColor: '#fff',
              trackColor: false,
              scaleColor: false,
              lineWidth: 4,
              size: 152,
              onStep: function(from, to, percent){
              $(this.el).find('.percent').text(Math.round(percent));
            }
          });  
       }
   });

   const navigationBar = $("#navigation");
   const navigationBarTop = navigationBar.offset().top;

   $(window).on("scroll", addNavBarBasedOnScrolledOffset);

   function addNavBarBasedOnScrolledOffset(){
       var body = $("body");

       if($(window).scrollTop() >= navigationBarTop){
           body.css("padding-top", navigationBar.outerHeight() + "px");
           body.addClass("fixedNav");
       } else {
           body.css("padding-top", 0);
           body.removeClass("fixedNav");
       }
   }

   $(".smoothTransition").click(function(e) {
    e.preventDefault();

       var targetElement = $(this).attr("href");
       var targetPosition = $(targetElement).offset().top;
       $("html, body").animate({ scrollTop: targetPosition -50 }, "slow"); 
   });

});
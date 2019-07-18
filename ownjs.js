//new_slider_from_codepen

$(document).ready(function() {
  $('button').click(function() {
    $(this).parents('.sliderComplete').children('button').removeClass('close').fadeIn(300);

    // The button, that was visible, goes on display none.
    $(this).addClass('close').fadeOut(300);

    // We do a fluid slider with the class '.turn'.
    $(this).parents('.sliderComplete').children('.wrapper').children('.slider').toggleClass('turn');
  });
});



	
$(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });



$("#Next").click(function(){
	$("#Slider").append($("#Slider img:first-of-type"));
});

$("#Prev").click(function(){
	$("#Slider").prepend($("#Slider img:last-of-type"));
});





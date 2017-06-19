$(document).ready(function(){
	var check = $("#item2").position();
	var val = Object.entries(check);
	
	$(window).scroll(function(){
		
		$("#aboutmyself").animate({opacity:1},4000);

		$("#romancalc").animate({opacity:1},6000);
		$("#randomquote").animate({opacity:1},7000);
		$("#weathermap").animate({opacity:1},8000);
		$("#mykalam").animate({opacity:1},9000);
	});

});
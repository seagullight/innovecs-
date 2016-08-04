$(document).ready(function() {
	$("figure h2").hide();
	$("figure").hover(function(){
		$(this).css({"backgroundColor":"#000","opacity":"0.9"}).find("h2").show(800);}, function(){
			$(this).css({"backgroundColor":"#000","opacity":"1"}).find("h2").hide(500);
	});

	
		   });
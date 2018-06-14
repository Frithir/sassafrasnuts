jQuery(document).ready(function($) {
	
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$('[name="'+this.hash.substring(1)+'"]').offset().top}, 1000);
	});
	
	$('.open').click(function(event){
		event.preventDefault();
		$("#small_nav").toggle();
	});
	
	$('#small_nav a').click(function(event){
		$('#small_nav').hide();
	});
	
	$(window).resize(function() {
		$('#small_nav').hide();
	});
	
	$('.cycle').cycle({
		fx:    'fade',
    	speed:  1000,
    	timeout: 8000,
	});
	
});
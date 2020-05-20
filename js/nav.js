$(function(){
	var navbar = $('header');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 90){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
});
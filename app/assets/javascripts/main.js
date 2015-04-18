$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollLeft': $target.offset().left
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
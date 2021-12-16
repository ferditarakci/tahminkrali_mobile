
/*
	TAHMIN KRALI - MOBILE - 04/10/2016
	Front-End Developer: Ferdi Tarakci
	Web Site: ferditarakci.com
*/

jQuery(function( $ ) {

	$('body > *').filter(function() {
			var a = $(this).css('position');
		if (a == 'relative' || a == 'fixed' || a == 'absolute') {
			$(this).wrapInner('<div class="fixed-fixes" />')
		}
	});

	$('a[rel~=external]').each(function() {
		$(this).attr('target', '_blank');
	});

	var clickEvent = 'click';
	var downEvent  = 'mousedown';
	if (navigator.userAgent.match(/(iP(ad|od|hone))/i)) {
		clickEvent = 'touchstart click';
		downEvent  = 'touchstart mousedown';
	}

	$('body').wrapInner('<div id="site-wrap" />');
	$('body').wrapInner('<div id="inner-wrap" />');
	$('body').wrapInner('<div id="outer-wrap" />');


	$(document).on(clickEvent, 'a[href=#]', false);


}); /* jQuery Ready */







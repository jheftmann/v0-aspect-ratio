function aspectRatio() {

	var obj = $('.v0-aspect-ratio');
	var objWidth = $('.v0-aspect-ratio').height();
	var objHeight = $('.v0-aspect-ratio').width();
	var aspectRatio = objWidth / objHeight;

	// threshold
	var panorama = .5625; // 16:9
	var landscape = .75; // 3:4
	var square = 1; // 1:1
	var portrait = 1.333333; // 4:3
	var skyscraper = 1.7777778; // 9:16


	if (aspectRatio < panorama) {
		obj.addClass('panorama');
	} else if (aspectRatio > panorama && aspectRatio < landscape) {
		obj.addClass('landscape');
	} else if (aspectRatio > landscape && aspectRatio < portrait) {
		obj.addClass('square');
	} else if (aspectRatio > portrait && aspectRatio < skyscraper) {
		obj.addClass('portrait');
	} else if (aspectRatio > skyscraper) {
		obj.addClass('skyscraper');
	} else {

	}


		console.log(objWidth);
		console.log(objHeight);
		console.log(aspectRatio);

		$('.output').text(aspectRatio);


}
/*

*/

/*
$(window).resize(function() {
$(window).trigger('resize');
});
*/





/*


	imgHeight = $(this).height();
	imgWidth = $(this).width();

	if (imgHeight > imgWidth) {
		$(this).addClass('img-portrait');
	} else {
		$(this).addClass('img-landscape');
	}
});
*/
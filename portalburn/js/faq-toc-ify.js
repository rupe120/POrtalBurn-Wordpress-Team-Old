(function($) {
	
	console.info('faq-toc-ify');
	console.info('faq-toc-ify - jQuery = ' + $.fn.jquery);
	
	//return;

	if (location.pathname != '/faq/')
		return;

	$(initFaq);

	function initFaq(){

		var headings = $('.entry-content h4');

		var toc = $('<p id="faq-toc">');

		console.info('faq-toc-ify - Processing ' + headings.length);	
		for(var idx = 0; idx < headings.length; idx++){
			var tocItem = 'toc-item-' + idx;
			var heading = $(headings[idx]);
			var tocHeading = heading.clone();
			heading.attr('id', tocItem);
			heading.find('span').after('<p><a href="#faq-toc" style="font-size:70%;">Return to top</a></p>')
			var tocLink = $('<a>')
				.attr("href","#" + tocItem)
				.append(tocHeading);
			toc.append(tocLink);
		}

		if (headings.length > 0){
			$(headings[0]).before(toc);
		}
	}

})( jQuery );
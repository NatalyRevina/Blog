$(document).ready(function () {
	//$('img').click(function () {
		//$(this).modal();
	$.ajax(appSettings.baseApiUrl+'gallery-fotos', {
		method: function(response) {
			var template = $("#galleryTemplate").html();
			var html = $.Mustache.render(template, {
				gallery:response
			});
		
	$('#gallery').append(html);	
	$('#gallery' .images img').click(function()){
	  var $current
	  }	
		
		}
	})
	
	});
});

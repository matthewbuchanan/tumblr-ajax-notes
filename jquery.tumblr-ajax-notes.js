/* Tumblr AJAX Notes Plugin by Matthew Buchanan v4.0.0
   Requires jQuery 1.2.6 or higher
   See http://matthewbuchanan.name/tumblr/ajax-notes/ for installation guide */

;(function ( $, window, undefined ) {

	$.fn.doTumblrAjaxNotes = function() {

		return this.each(function() {

			var $me = $(this);

			var noteCount = $me.html();
			if (noteCount.indexOf(" ") != -1) {
				noteCount = parseInt(noteCount.substring(0,noteCount.indexOf(" ")));
			} else {
				noteCount = parseInt(noteCount);
			}
			if (noteCount > 0) $me.show();
			if (noteCount > 14) $me.addClass("fave");
			
			$me.click(function(ev) {
				ev.preventDefault();
				var $node = $("#notes-"+$(this).attr("rel"));
				$("#notes-"+$(this).attr("rel")).slideToggle();
				$.ajax({ url: $(this).attr("href"), success: function(data){
					$node.find(".loading").hide();
					$node.find(".notes-loader").html(data).slideDown();
					$node.find(".notes-loader").append("<p><a href='#' class='notes-hide'>Hide Notes</a></p>");
					$node.find(".notes-hide").click(function(ev) {
						ev.preventDefault();
						$node.slideToggle();
					});
				} });
			});

		});

	};

}(jQuery, window));

$("a.notes-button").doTumblrAjaxNotes();

$(document).ready(function() {
	$('.bonus_tasks').click(function(event) {
		event.preventDefault();
		var id = $(this).attr('id');
		$("#" + id + "_bonus").toggle('slow');
	    });
    });

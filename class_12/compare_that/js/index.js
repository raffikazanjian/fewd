$(function() {

	var compare = function compareNumbers() {

		var a = $('#a').val();
		var b = $('#b').val();

		if (a > b) {
			$('#comparison').html('>');
		} 
		
		else if (a == b) {
			$('#comparison').html('=');
		} 

		else {
			$('#comparison').html('<');
		}
	}


	$('#submit').click(compare);

});
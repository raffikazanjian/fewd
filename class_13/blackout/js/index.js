
$(function() {
	
	$('body').addClass('dark');
	
	var lightSwitch = function checkLights() {
				
		if ($('body').hasClass('dark') == 1) {
			$('body').toggleClass('light');
			$('body').removeClass('dark')
		} else {
			$('body').toggleClass('dark');
			$('body').removeClass('light')
		}
	}


	$('#light_switch').click(lightSwitch);

});
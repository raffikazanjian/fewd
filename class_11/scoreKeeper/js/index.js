$(function() {
	//var firstName = prompt('What is your Name?');
	//var score = prompt('What score would you like to start with?');
	
	//function displayOriginalScore() {
		//console.log("Calling", firstName, score );
	//	$('#namePlace').html(firstName);
	//	$('#myScore').html(score);
	//}
	//displayOriginalScore();
	
	//global scope
	//var result = Number($('#myScore').html());
	//var result = $('myScore').html();
	//myScore = parseInt(myScore);
	
	var result = parseInt($('#myScore').html());
	console.log(result + " Raffi your a god damn genius");
	
	function clearScore() {
		//local scope
		result = 0;
		$('#myScore').html(result);
	}
	
	function add1() {
		result = result + 1;
		$('#myScore').html(result);
	}
	
	function add5() {
		result = result + 5;
		$('#myScore').html(result);
	}
	
	function subtract1() {
		result = result - 1;
		$('#myScore').html(result);
	}
	
	function subtract5() {
		result = result - 5;
		$('#myScore').html(result);
	}
	
	$('#clear').click(clearScore);
	$('#add1').click(add1);
	$('#add5').click(add5);
	$('#subtract1').click(subtract1);
	$('#subtract5').click(subtract5);
});
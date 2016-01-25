$(function() {
    $('#answer1').hide();
    $('#answer2').hide();
    $('#answer3').hide();

    function toggle1(){
    	$('#answer1').slideToggle();
    }

    function toggle2(){
    	$('#answer2').slideToggle();
    }

    function toggle3(){
    	$('#answer3').slideToggle();
    }

    $('#question1').click(toggle1);
    $('#question2').click(toggle2);
    $('#question3').click(toggle3);

   // $('#question2').click(function() {
    //		$('#answer2').toggle();
    //	})
});
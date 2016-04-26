$(function() {

	$('#menuButton').click(function(){
		$('#nav').toggle('slide', {direction:'right'}, 'slow');
	});

	$(window).resize(function(){
		if ($(window).width()<769 && $('#nav').style.display == 'table-cell') {
			$('#nav').css({display: 'none'});
		}
		else  {
			$('#nav').css({display: 'table-cell'});
		};
	});

});
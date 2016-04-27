$(function() {

	var active = false;

	$('#menuButton').click(function(){
		$('#nav').toggle('slide', {direction:'right'}, 'slow');
		if (active == false) {
			active = true;
		}
		else if (active == true) {
			active = false;
		}
	});

	$(window).resize(function(){
		if (active == false) {
			if ($(window).width()>768) {
				$('#nav').css({display: 'table-cell'});
			}
			if ($(window).width()<=768) {
				$('#nav').css({display: 'none'});
			}
		}
		else if (active == true) {
			if ($(window).width()>768) {
				$('#nav').css({display: 'table-cell'});
				active = false;
			}
			if ($('#nav').css('display') == 'none') {
				$('#nav').css({display: 'none'});
			}
			if ($('#nav').css('display') == 'block') {
				$('#nav').css({display: 'block'});
			}
		}
	});
});
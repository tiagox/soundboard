$(function(){

	$(document).on({
		keydown: function (event) {
			var keyCode = event.keyCode,
					character = String.fromCharCode(keyCode).toUpperCase();

			/[A-Z0-9]/.test(character) && $("div.key#" + character).addClass("pressed");
		},
		keyup: function (event) {
			var keyCode = event.keyCode,
					character = String.fromCharCode(keyCode).toUpperCase();

			/[A-Z0-9]/.test(character) && $("div.key#" + character).removeClass("pressed");
		}
	});

	$(".effect").draggable({
		revert: true,
		cursor: 'move'
	}).disableSelection();

	$(".key").on({
		mousedown: function(){
			$(this).addClass("pressed");
		},
		mouseup: function(){
			$(this).removeClass("pressed");
		},
		mouseleave: function(){
			$(this).removeClass("pressed");
		}
	}).droppable({
		drop: function( event, ui ) {
			$(this).children('.sound').html(ui.draggable.html());
		}
	}).disableSelection();

});

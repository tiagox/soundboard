$(function(){
    $(document).live('keydown', function(event){
	var character = String.fromCharCode(event.keyCode).toUpperCase();
	if ((character >= '0' && character <= '9') || (character >= 'A' && character <= 'Z')) {
	    $("div.key#" + character).addClass("pressed");
	}
    });

    $(document).live('keyup', function(event){
	var character = String.fromCharCode(event.keyCode).toUpperCase();
	if ((character >= '0' && character <= '9') || (character >= 'A' && character <= 'Z')) {
	    $("div.key#" + character).removeClass("pressed");
	}
    });

    $(".effect").draggable({
	revert: true,
	cursor: 'move'
    });

//  $(".effect").sortable();
    $(".effect").disableSelection();

    $(".key").droppable({
	drop: function( event, ui ) {
	    $(this).children('.sound').html(ui.draggable.html());
	}
    });

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
    });

    $(".key").disableSelection();
});
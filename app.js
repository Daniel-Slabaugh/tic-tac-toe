
$(document).ready(function() {
	var h = $("#b1").width();
	$("#line-1").height(h);
	$("#line-2").height(h);
	$("#line-3").height(h);
	$('.box').css({"padding":h/2});

	$("#b1").click(function(e) {
		if(game.squares[1] == "x" || game.squares[1] == "o") {
			alert("Someone already played in that spot");
		} else {
			game.squares[1] = game.turn;
			changeTurn();
			$("#b1").text('x');
		}

	})

});


var game = {
	turn:"x",
	movecount:0,
	winner:"no",
	squares:[]
}

function changeTurn() {
	if(game.turn = "x") {
		game.turn = "o"
	} else {
		game.turn = "x"
	}
}

$(document).ready(function() {
  resizeTicTacToe();
  newGame();

  $(".box").click(function(e) {
    var box = parseInt($(this).attr("id").slice(1,2));
    console.log(box);
    if (game.squares[box] == "x" || game.squares[box] == "o") {
      alert("Oops, someone already played in that spot");
    } else if(game.winner == "no") {
      game.squares[box] = game.turn;
      game.movecount++;
      $(this).find(".board-box").text(game.turn);
      checkWinner();
      changeTurn();
    }
    console.log(game.squares);
  })

  $("#reset").click(function(e) {
    e.preventDefault();
    newGame();
  })

});

$( window ).resize(function() {
  resizeTicTacToe();
});



var game = {
  turn:"x",
  movecount:0,
  winner:"no",
  squares:[]
}

function changeTurn() {
  if(game.turn == "x") {
    game.turn = "o"
  } else {
    game.turn = "x"
  }
}

function newGame () {
  game.squares.length = 0;
  game.winner = "no";
  game.movecount = 0;
  game.turn = "x";
  $(".board-box").text("");
  $("#winner").text("");
}

function checkWinner() {

  if( game.squares[1] == game.turn && game.squares[2] == game.turn && game.squares[3] == game.turn || //row-1
      game.squares[4] == game.turn && game.squares[5] == game.turn && game.squares[6] == game.turn || //row-2
      game.squares[7] == game.turn && game.squares[8] == game.turn && game.squares[9] == game.turn || //row-3
      game.squares[1] == game.turn && game.squares[4] == game.turn && game.squares[7] == game.turn || //col-1
      game.squares[2] == game.turn && game.squares[5] == game.turn && game.squares[8] == game.turn || //col-2
      game.squares[3] == game.turn && game.squares[6] == game.turn && game.squares[9] == game.turn || //col-3
      game.squares[1] == game.turn && game.squares[5] == game.turn && game.squares[9] == game.turn || //diagonal-1
      game.squares[3] == game.turn && game.squares[5] == game.turn && game.squares[7] == game.turn  ) //diagonal-2
  {
    game.winner = game.turn;
    $("#winner").text("Player " + game.turn + " won the game. Congratulations!");
  } else if(game.movecount > 8) {
    $("#winner").text("You tied, guess you're both pretty smart!");
  }
}

function resizeTicTacToe() {
  $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
  var h = $("#b1").width();
  $("#line-1").height(h);
  $("#line-2").height(h);
  $("#line-3").height(h);
  $('.box').css({"padding-bottom":h});
  $('.board-box').css({"font-size":h/1.75});
}

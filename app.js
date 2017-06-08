
$(document).ready(function() {
  var h = $("#b1").width();
  $("#line-1").height(h);
  $("#line-2").height(h);
  $("#line-3").height(h);
  $('.box').css({"padding":h/2});

  newGame();

  $(".box").click(function(e) {
    var box = parseInt($(this).attr("id").slice(1,2));
    console.log(box);
    if (game.squares[box] == "x" || game.squares[box] == "o") {
      alert("Someone already played in that spot");
    } else {
      game.squares[box] = game.turn;
      $(this).find("div").text(game.turn);
      changeTurn();
    }
    console.log(game.squares);
  })

  $("#reset").click(function(e) {
    e.preventDefault();
    newGame();
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

function newGame () {
  game.squares = [];
  game.squares.length() = 9;
  game.winner = "no";
  game.movecount = 0;
  game.turn = "x";
}

function checkWinner() {

  if( game.squares[1] == game.turn && game.squares[2] == game.turn && game.squares[3] == game.turn ||   //row-1
      game.squares[4] == game.turn && game.squares[5] == game.turn && game.squares[6] == game.turn ||   //row-2
      game.squares[7] == game.turn && game.squares[8] == game.turn && game.squares[9] == game.turn ||   //row-3
      game.squares[1] == game.turn && game.squares[4] == game.turn && game.squares[7] == game.turn ||   //col-1
      game.squares[2] == game.turn && game.squares[5] == game.turn && game.squares[8] == game.turn ||   //col-2
      game.squares[3] == game.turn && game.squares[6] == game.turn && game.squares[9] == game.turn ||   //col-3
      game.squares[1] == game.turn && game.squares[5] == game.turn && game.squares[9] == game.turn ||   //diagonal-1
      game.squares[3] == game.turn && game.squares[5] == game.turn && game.squares[7] == game.turn || ) //diagonal-2
  {
    winner = game.turn;
    alert("Player " + game.turn + " won the game! Congradulations";
    newGame();
  }



  

    )
}
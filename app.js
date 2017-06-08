
$(document).ready(function() {
  var h = $("#b1").width();
  $("#line-1").height(h);
  $("#line-2").height(h);
  $("#line-3").height(h);
  $('.box').css({"padding":h/2});

  $(".box").click(function(e) {
    var box = parseInt($(this).attr("id").slice(1,2));
    console.log(box);
    if (game.squares[box] == "x" || game.squares[box] == "o") {
      alert("Someone already played in that spot");
    } else {
      game.squares[box] = game.turn;
      changeTurn();
      $("#b1").find("div").text('x');
    }
    console.log(game.squares);
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
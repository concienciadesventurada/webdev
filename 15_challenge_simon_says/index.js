var gameIsRunning = 0;

do {
  //empieza el juego = 0
  var nivel = 1;

  do {
    var x = Math.floor(Math.random()* 100000) + 1;

    console.log(x);

    if (x === 53245) {
      // ah el usuario la cago, 1kkk
      gameIsRunning = 1;
      break;
    }
  } while (nivel > 0);

} while (gameIsRunning === 0);

$(".btn").on("click", function () {
  console.log(Math.floor(Math.random()* 4) + 1);
});

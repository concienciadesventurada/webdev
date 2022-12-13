
function diceRoll() {
  
  var p1Roll = Math.floor(Math.random() * 6) + 1;
  var p2Roll = Math.floor(Math.random() * 6) + 1;

  var diceSource1 = "images/dice" + p1Roll + ".png";
  var diceSource2 = "images/dice" + p2Roll + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", diceSource1);
  document.querySelectorAll("img")[1].setAttribute("src", diceSource2);

  if (diceSource1 > diceSource2) {
    document.querySelector("h1").innerText = "Player 1 wins!";
  }
  else if (diceSource1 < diceSource2) {
    document.querySelector("h1").innerText = "Player 2 wins!";
  }
  else {
    document.querySelector("h1").innerText = "Draw!";
  }
}


/* 

function rollDice(id) {
  
  var roll = Math.floor(Math.random() * 6) + 1;

  switch (roll) {
    case 1:
      document.getElementById(id).src="images/dice1.png";
    case 2:
      document.getElementById(id).src="images/dice2.png";
    case 3:
      document.getElementById(id).src="images/dice3.png";
    case 4:
      document.getElementById(id).src="images/dice4.png";
    case 5:
      document.getElementById(id).src="images/dice5.png";
    case 6:
      document.getElementById(id).src="images/dice6.png";
  }
  console.log(id + " " + roll);
}

rollDice('p1');
rollDice('p2');


*/

function playSound(key) {

  switch (key) {
      case "w":
        var audio = new Audio("sounds/0.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/1.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/2.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/3.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/4.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/5.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/6.mp3");
        audio.play();
        break;
      default:
        console.log(key.key);
        break;
    }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHtml = this.innerHTML;

    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, "3500");
}

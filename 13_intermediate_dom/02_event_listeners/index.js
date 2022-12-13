console.log("hey");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  var audioPath = "sounds/" + i + ".mp3";

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var audio = new Audio(audioPath);
    audio.play();
  });
}

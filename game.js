var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var start = false;
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  play(randomChosenColour);
  level++;
  $("h1").text("Level "+level);
  console.log(gamePattern);
  userClickedPattern = [];
}

function animatePress(a) {
  $("." + a).addClass("pressed");
  play(a);
  setTimeout(function() {
    $("." + a).removeClass("pressed");
  }, 100);
}

function checkAnswer(a){
  for (var i = 0; i<a.length; i++){
    if (a[i]!=gamePattern[i]){
      return -1;
    }
  }
  if (a.length == gamePattern.length) return 1;
  return 0;
}

function play(a) {
  // var audio = new Audio("sounds/"+a+".mp3");
  // audio.play();
  switch (a) {
    case "blue":
      var audio = new Audio("sounds/" + a + ".mp3");
      audio.play();
      break;
    case "red":
      var audio = new Audio("sounds/" + a + ".mp3");
      audio.play();
      break;
    case "green":
      var audio = new Audio("sounds/" + a + ".mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("sounds/" + a + ".mp3");
      audio.play();
      break;
    default:
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();

  }
  $("." + a).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

$(document).keypress(function(){
  if (start==false){
  start = true;
  level = -1;
  nextSequence();
  $("h1").text("Level 0");
  }
});

$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  animatePress(userChosenColour);
  if (checkAnswer(userClickedPattern)==1)
    setTimeout(function() {
      nextSequence();
    }, 1000);
  if (checkAnswer(userClickedPattern)==-1){
    start = false;
    $("body").addClass("game-over");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    gamePattern = [];
    $("h1").text("Game Over, Press Any Key to Restart");
  };

});

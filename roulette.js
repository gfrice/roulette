var lastBet = new Boolean(); // won 1 or lost 0
var minBet = 5;
var betInc = 2.5;
var choice = new Boolean(); // black 1 or red 0

var red = [1, 36, 3, 34, 5, 32, 7, 30, 9, 14, 23, 16, 21, 18, 19, 12, 25, 27];
var black = [13, 24, 15, 22, 17, 20, 11, 26, 28, 2, 35, 4, 33, 6, 31, 8, 29, 10];
var green = [0, 00];

var holes = red.concat(black.concat(green));

window.onload = calcBet(minBet, lastBet, betInc);

$(document).ready(function() {
  $('input[type=radio]').click(function() {
    if (this.name === "guess");
    document.getElementById("spinbutt").disabled = false;
  })
})

function calcBet(minBet, lastBet, betInc) {
  if (lastBet) {
    var currBet = minBet;
  } else {
    var currBet = lastBet * betInc;
  }
  document.getElementById("bet").innerHTML = currBet;
}

function checkWinner(winNum, choosed) {
  alert(choosed instanceof Array);

  alert("Winning Num: " + winNum + " | Choice: " + choosed);
  var isIt = jQuery.inArray(winNum, choosed);
  alert(isIt);
  /*
  switch (winNum.indexOf(choosed)) {
    case 0:
      text = "Is Winner";
      break;
    case -1:
      text = "Is Not Winner";
      break;
  }
  alert(text);
  //return text;
  */
}

function spin() {

  var winningNumber = holes[Math.floor(Math.random() * holes.length)];
  var theChosen = document.querySelector('input[name="guess"]:checked').id;
  alert(theChosen instanceof Array);
  document.getElementById("choice").innerHTML = theChosen;
  document.getElementById("winDiv").innerHTML = winningNumber;
  //alert(winningNumber);
  var win = checkWinner(winningNumber, theChosen);
  document.getElementById("winner").innerHTML = win;

}

var gameSettings = {
  compSequence: [],
  playerSequence: [],
  round: 1,
  highScore: 0,
}

var cowAudio = document.createElement('audio');
  cowAudio.setAttribute('src', 'sounds/cowCut.mp3');
  cowAudio.setAttribute('autoplay:false', 'autoplay');

var chickenAudio = document.createElement('audio');
  chickenAudio.setAttribute('src', 'sounds/chickenCut.mp3');
  chickenAudio.setAttribute('autoplay:false', 'autoplay');

var pigAudio = document.createElement('audio');
  pigAudio.setAttribute('src', 'sounds/pigCut.mp3');
  pigAudio.setAttribute('autoplay:false', 'autoplay');

var goatAudio = document.createElement('audio');
  goatAudio.setAttribute('src', 'sounds/goatCut.mp3');
  goatAudio.setAttribute('autoplay:false', 'autoplay');

var failAudio = document.createElement('audio');
  failAudio.setAttribute('src', 'sounds/Fail.mp3');
  failAudio.setAttribute('autoplay:false', 'autoplay');

var clearBtn = function () {
  $(".gamePiece").css("border", "none");
  $(".gamePiece").css("background-color", "white");
  };

/* Dr. Mike helped with creating a switch statement rather than using a for loop
and setting the delay function with setTimeout based on the switch statement */

function showAnimal(animalNumber) {
  switch(animalNumber) {
    case 1:
      cowAudio.play();
      $("#cowBtn").css("border", "5px solid green");
      $("#cowBtn").css("background-color", "green");
      setTimeout(clearBtn, 750);
      break;
    case 2:
      chickenAudio.play();
      $("#chickenBtn").css("border", "5px solid red");
      $("#chickenBtn").css("background-color", "red");
      setTimeout(clearBtn, 750);
      break;
    case 3:
      pigAudio.play();
      $("#pigBtn").css("border", "5px solid blue");
      $("#pigBtn").css("background", "blue");
      setTimeout(clearBtn, 750);
      break;
    case 4:
      goatAudio.play();
      $("#goatBtn").css("border", "5px solid yellow");
      $("#goatBtn").css("background-color", "yellow");
      setTimeout(clearBtn, 750);
      break;
    }
}

//Dr. Mike assisted in creating a setTimeout function and showing me its functionality

function delayedPlay(animalNumber, delay) {
  setTimeout(function() {
    showAnimal(animalNumber);
  }, delay);
}

$("#reset").on( "click", function() {
  this.compSequence = [];
  this.playerSequence = [];
  this.round = 1;
  this.highScore = 0;
  $("#counter").html(this.round - 1);
  $("#roundNum").html(this.round);
  $("#play").css("visibility", "visible");
});

function computerTurn () {
  createSequence();
  gameLoop ();
  $("#roundNum").html(gameSettings.round);
  if (gameSettings.round == (gameSettings.highScore + 1)) {
    ++gameSettings.highScore;
  }
  $("#counter").html(gameSettings.highScore);
}

function createSequence() {
    gameSettings.compSequence.push(Math.floor(Math.random() * 4) + 1);
};

function gameLoop() {
  for(var i = 0; i <= gameSettings.compSequence.length; i++) {
    delayedPlay(gameSettings.compSequence[i], i * 800);
  }
}

function newRound () {
  ++gameSettings.round;
  gameSettings.playerSequence = [];
}

function endGame () {
  gameSettings.compSequence = [];
  gameSettings.playerSequence = [];
  gameSettings.round = 1;
  //window.alert("Not quite right. Click PLAY to try a new sequence.");
  failAudio.play();
  $("#roundNum").html(gameSettings.round);
  $("#play").css("visibility", "visible");
}

$(document).ready(function() {

  $("#play").on( "click", function() {
    gameSettings.playerSequence = [];
    computerTurn();
    $("#play").css("visibility", "hidden");
  });

  $("#cowBtn").on( "click", function() {
      cowAudio.play();
      $("#cowBtn").css("border", "5px solid green");
      $("#cowBtn").css("background-color", "green");
      gameSettings.playerSequence.push(1);
      console.log("the player sequence is " + gameSettings.playerSequence);
      if ((gameSettings.playerSequence.length === gameSettings.compSequence.length)
          && _.isEqual(gameSettings.compSequence, gameSettings.playerSequence)) {
            setTimeout(function() {
              newRound();
            }, 1500);
            setTimeout(function() {
              computerTurn();
              }, 1500);
            }
      else if (gameSettings.playerSequence.length === gameSettings.compSequence.length) {
            setTimeout(function() {
              endGame();
            }, 300);
            }
      setTimeout(clearBtn, 500);
      });

  $("#chickenBtn").on( "click", function() {
      chickenAudio.play();
      $("#chickenBtn").css("border", "5px solid red");
      $("#chickenBtn").css("background-color", "red");
      gameSettings.playerSequence.push(2);
      console.log("the player sequence is " + gameSettings.playerSequence);
      if ((gameSettings.playerSequence.length === gameSettings.compSequence.length)
          && _.isEqual(gameSettings.compSequence, gameSettings.playerSequence)) {
            setTimeout(function() {
              newRound();
            }, 1500);
            setTimeout(function() {
              computerTurn();
            }, 1500);
            }
      else if (gameSettings.playerSequence.length === gameSettings.compSequence.length) {
            setTimeout(function() {
              endGame();
            }, 300);
            }
      setTimeout(clearBtn, 500);
      });

  $("#pigBtn").on( "click", function() {
      pigAudio.play();
      $("#pigBtn").css("border", "5px solid blue");
      $("#pigBtn").css("background", "blue");
      gameSettings.playerSequence.push(3);
      console.log("the player sequence is " + gameSettings.playerSequence);
      if ((gameSettings.playerSequence.length === gameSettings.compSequence.length)
          && _.isEqual(gameSettings.compSequence, gameSettings.playerSequence)) {
            setTimeout(function() {
              newRound();
            }, 1500);
            setTimeout(function() {
              computerTurn();
            }, 1500);
            }
      else if (gameSettings.playerSequence.length === gameSettings.compSequence.length) {
            setTimeout(function() {
              endGame();
            }, 300);
            }
      setTimeout(clearBtn, 500);
      });

  $("#goatBtn").on( "click", function() {
      goatAudio.play();
      $("#goatBtn").css("border", "#5px solid yellow");
      $("#goatBtn").css("background-color", "yellow");
      setTimeout(clearBtn, 500);
      gameSettings.playerSequence.push(4);
      console.log("the player sequence is " + gameSettings.playerSequence);
      if ((gameSettings.playerSequence.length === gameSettings.compSequence.length)
          && _.isEqual(gameSettings.compSequence, gameSettings.playerSequence)) {
            setTimeout(function() {
              newRound();
            }, 1500);
            setTimeout(function() {
              computerTurn();
            }, 1500);
            }
      else if (gameSettings.playerSequence.length === gameSettings.compSequence.length) {
            setTimeout(function() {
              endGame();
            }, 300);
            }
      setTimeout(clearBtn, 500);
      });
});

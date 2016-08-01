var gameSettings = {
  compSequence: [],
  playerSequence: [],
  round: 5,
  speed: 2000,
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

var clearBtn = function () {
  $(".gamePiece").css("border", "none");
  $(".gamePiece").css("background-color", "white");
  };

function showAnimal(animalNumber) {
  switch(animalNumber) {
    case 1:
      cowAudio.play();
      console.log("cow");
      $("#cowBtn").css("border", "5px solid green");
      $("#cowBtn").css("background-color", "green");
      setTimeout(clearBtn, 750);
      break;
    case 2:
      chickenAudio.play();
      console.log("chicken");
      $("#chickenBtn").css("border", "5px solid red");
      $("#chickenBtn").css("background-color", "red");
      setTimeout(clearBtn, 750);
      break;
    case 3:
      pigAudio.play();
      console.log("pig");
      $("#pigBtn").css("border", "5px solid blue");
      $("#pigBtn").css("background", "blue");
      setTimeout(clearBtn, 750);
      break;
    case 4:
      goatAudio.play();
      console.log("goat");
      $("#goatBtn").css("border", "5px solid yellow");
      $("#goatBtn").css("background-color", "yellow");
      setTimeout(clearBtn, 750);
      break;
    }
}

function delayedPlay(animalNumber, delay) {
  setTimeout(function() {
    showAnimal(animalNumber);
  }, delay);
}

$(document).ready(function() {

  $("#play").on( "click", function() {

    function createSequence(round) {
      for (var i = 1; i <= round; i++) {
        gameSettings.compSequence.push(Math.floor(Math.random() * 4) + 1);
      }
    }

    createSequence(gameSettings.round);
    console.log(gameSettings.compSequence);

    function gameLoop() {
      for(var i = 0; i <= gameSettings.compSequence.length; i++) {
        // sleep(2000);
        delayedPlay(gameSettings.compSequence[i], i * 1000);
      }
    }

    gameLoop(gameSettings.compSequence);
  });

  /* $.when(gameLoop()).done(function() {
      $(".gamePiece").css("border", "none");
      $(".gamePiece").css("background-color", "white");
    }); */

  $("#cowBtn").click( function () {
      cowAudio.play();
      console.log("cow");
      $("#cowBtn").css("border", "5px solid green");
      $("#cowBtn").css("background-color", "green");
      setTimeout(clearBtn, 500);
  })

  $("#chickenBtn").click( function() {
      chickenAudio.play();
      console.log("chicken");
      $("#chickenBtn").css("border", "5px solid red");
      $("#chickenBtn").css("background-color", "red");
      setTimeout(clearBtn, 500);
  })

  $("#pigBtn").click( function() {
      pigAudio.play();
      console.log("pig");
      $("#pigBtn").css("border", "5px solid blue");
      $("#pigBtn").css("background", "blue");
      setTimeout(clearBtn, 500);
  })

$("#goatBtn").click( function() {
      goatAudio.play();
      console.log("goat");
      $("#goatBtn").css("border", "#5px solid yellow");
      $("#goatBtn").css("background-color", "yellow");
      setTimeout(clearBtn, 500);
  })

});

/* very very bad!!!
function sleep(milliseconds) {
    var start = new Date().getTime();
    while (1) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
*/



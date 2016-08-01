//test to make sure js file is linked properly === console.log("Hello")

var gameSettings = {
  compSequence: [],
  playerSequence: [],
  round: 1,
  speed: 2000,
}

var cowAudio = document.createElement('audio');
cowAudio.setAttribute('src', 'sounds/cow.mp3');
cowAudio.setAttribute('autoplay:false', 'autoplay');

var chickenAudio = document.createElement('audio');
chickenAudio.setAttribute('src', 'sounds/chicken.mp3');
chickenAudio.setAttribute('autoplay:false', 'autoplay');

var pigAudio = document.createElement('audio');
pigAudio.setAttribute('src', 'sounds/pig.mp3');
pigAudio.setAttribute('autoplay:false', 'autoplay');

var goatAudio = document.createElement('audio');
goatAudio.setAttribute('src', 'sounds/goat.mp3');
goatAudio.setAttribute('autoplay:false', 'autoplay');

$(document).ready(function() {

  $("#play").on( "click", function() {
    //window.alert("Is this still working?");

    //create the compSequence for 1st time
    function createSequence(round) {
      for (i = 1; i <= round; i++) {
        gameSettings.compSequence.push(Math.floor(Math.random() * 4) + 1);
      }
    }

    createSequence(gameSettings.round);
    console.log(gameSettings.compSequence);

    function gameLoop() { //how to loop through compSequence?
      for(i = 0; i <= gameSettings.compSequence.length; i++) {
        if (gameSettings.compSequence[i] === 1) {
          cowAudio.play();
          $("#cowBtn").css("border", "5px solid green");
          $("#cowBtn").css("background", "green");
        }
        else if (gameSettings.compSequence[i] === 2) {
          chickenAudio.play();
          $("#chickenBtn").css("border", "5px solid red");
          $("#chickenBtn").css("background", "red");
        }
        else if (gameSettings.compSequence[i] === 3) {
          pigAudio.play();
          $("#pigBtn").css("border", "5px solid blue");
          $("#pigBtn").css("background", "blue");
        }
        else if (gameSettings.compSequence[i] === 4) {
          goatAudio.play();
          $("#goatBtn").css("border", "5px solid yellow");
          $("#goatBtn").css("background", "yellow");
        }
      }
    }

    gameLoop(gameSettings.compSequence);

    });

  $("#cowBtn").click( function() {
    cowAudio.play();
  })

  $("#chickenBtn").click( function() {
    chickenAudio.play();
  })

  $("#pigBtn").click( function() {
    pigAudio.play();
  })

$("#goatBtn").click( function() {
    goatAudio.play();
  })

});



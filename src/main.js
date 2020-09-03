import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './game.js';
import Wizard from './wizard.js';
import Bard from './bard.js';
import Paladin from './paladin.js';
import Assassin from './assassin.js';
import Barbarian from './barbarian.js';
import Mage from './mage.js';

function switchPlayerSelect(GAME) {
  if($('#playerID').text() === '1') {
    $('#playerID').text("2")
  } else {
    $('#playerID').text("1")
    $('#game').hide();
    checkCharacters(GAME);
    $('#character-confirmation').show();
  }
}
function checkCharacters(GAME) {
  $('#characters').text(GAME.players[0].classType + ' vs ' + GAME.players[1].classType);
}
function writeStats(player, dom) {
  let keys= Object.keys(player);
  dom.text('');
  for(let i = 2; i < keys.length; i++) {
    //console.log(player['attack'])
    dom.append('<li>'+ keys[i]  + ': ' + player[keys[i]] + '</li>');
  }
}
function characterFight(GAME) {
  $('#character1').text(GAME.players[0].classType);
  $('#character2').text(GAME.players[1].classType);
}
function attack( defensiveProgressDom, GAME){
  let damageArray = GAME.attack(GAME.getAttackingPlayer(), GAME.getDefendingPlayer());
  let deadPlayerIndex = GAME.checkDeath();
  updateHealthBar(GAME.getDefendingPlayer(), defensiveProgressDom);
    $('#attack-roll').text(' attacking Roll: ' +damageArray[1])
    $('#defense-roll').text(' defending Roll: ' +damageArray[2])
    $('#damage').text(' damage output: ' + damageArray[0])
  if(deadPlayerIndex >= 0) {
    setTimeout(function() {  
    $('#fight-page').hide();
    $('#winners-page').show();
    let winnerIndex = GAME.checkWinner();
    writeStats(GAME.players[winnerIndex], $('#winner-stats'));
    $('#winner-output').text(GAME.players[winnerIndex].classType);
    updateHealthBar(GAME.players[winnerIndex], $('#health-bar-winner'));
    }, 750)
  }else {
    GAME.nextTurn();
    $('#attack1').toggle();
    $('#attack2').toggle();
    // $('#').text(player turn ?)
  }
  
}
//$('#progress')
function updateHealthBar(player, dom) {
    let healthBarPercentage = ((player.health / player.startingHealth).toFixed(2)) * 100
    console.log(healthBarPercentage);
    if(healthBarPercentage < 75 && healthBarPercentage > 33) {
      dom.css('background-color', 'yellow');
    } else if(healthBarPercentage < 33) {
      dom.css('background-color', 'red');

    } else {
      dom.css('background-color', 'green');

    }

    dom.css('width', healthBarPercentage + '%');
}

$(document).ready(function() {
  let GAME = new Game();
  $("#game-start").click(function() {
    $("#show-game-title").hide();
    $("#game").show();
  });

  $('#wizard').click(function () {
    GAME.addPlayer(new Wizard())
    switchPlayerSelect(GAME);
    
  });
  $('#paladin').click(function () {
    GAME.addPlayer(new Paladin())
    switchPlayerSelect(GAME);
  });
  $('#assassin').click(function () {
    GAME.addPlayer(new Assassin())
    switchPlayerSelect(GAME);
  });
  $('#mage').click(function () {
    GAME.addPlayer(new Mage())
    switchPlayerSelect(GAME);
  });
  $('#bard').click(function () {
    GAME.addPlayer(new Bard())
    switchPlayerSelect(GAME);
  });
  $('#barbarian').click(function () {
    GAME.addPlayer(new Barbarian())
    switchPlayerSelect(GAME);
  });
  $('#change-character').click(function () {
    $('#game').show();
    $('#character-confirmation').hide();
    GAME.resetGame();
  });
  $('#fight-start').click(function () {
    $('#character-confirmation').hide();
    $('#fight-page').show();
    if (GAME.findHighestSpeed() > 0) {
      GAME.nextTurn();
      $('#attack1').toggle();
      $('#attack2').toggle();
    }
    characterFight(GAME);
    writeStats(GAME.players[0], $('#player1-stats'));
    writeStats(GAME.players[1], $('#player2-stats'));
  });
  $('#attack1').click(function() {
       
    attack($('#health-bar-player2'), GAME );
    writeStats(GAME.players[0], $('#player1-stats'));
    writeStats(GAME.players[1], $('#player2-stats'));
    
  });
  $('#attack2').click(function() {
    attack($('#health-bar-player1'), GAME);
    writeStats(GAME.players[0], $('#player1-stats'));
    writeStats(GAME.players[1], $('#player2-stats'));
    
  });
  $('#reset').click(function() {
    location.reload();
  });
  $('#winner').text
}); 
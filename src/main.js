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

$(document).ready(function() {
  $("#game-start").click(function() {
    $("#show-game-title").hide();
  });

});
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Wizard from './wizard.js';
import Bard from './bard.js';
import Paladin from './paladin.js';
import Assassin from './assassin.js';
import Barbarian from './barbarian.js';

$(document).ready(function() {
  
  let test = new Wizard();
  
  alert(test.health);
  let test1 = new Assassin();
  
  alert(test1.health);
  let test2 = new Barbarian();
  
  alert(test2.health);
  let test3 = new Bard();
  
  alert(test3.health);
  let test4 = new Paladin();
  
  alert(test4.health);

});
import Game from '../src/game.js';
import Assassin from '../src/assassin'
import Bard from '../src/bard'

describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
    game.players.push(new Bard());
    game.players.push(new Assassin());
    // bard assassin
  });

  test('check creation of game object', () => {
    game = new Game();
    expect(game).toMatchObject(new Game());
  });

  test('check player turn is unchanged', () => {
    expect(game.playersTurnIndex).toEqual(0);
  });
  
  test('check player turn is changed once', () => {
    game.nextTurn();
    expect(game.playersTurnIndex).toEqual(1);
  });
  
  test('check player turn is changed twice', () => { 
    game.nextTurn();
    game.nextTurn();
    expect(game.playersTurnIndex).toEqual(0);
  });

  test('check if intended player is removed', () => { // bard  assassin bard
    game.players.push(new Bard());
    game.players[2].health = 1000;
    game.removePlayer(game.players[2]);
    expect(game.players.length).toEqual(2);
    expect(game.players[0]).toMatchObject(new Bard());
  });

  test('check if dice roll is equal to 1 or higher', () => {
    for (let i =0; i <= 100; i++) {
      //console.log(game.rollDice(20));
      expect(game.rollDice(20)).toBeLessThanOrEqual(20);  
      expect(game.rollDice(20)).toBeGreaterThanOrEqual(1);
    }
  });

  test('check is player is added', () => {
    let player = new Assassin();
    game.addPlayer(player)
    expect(game.players[game.players.length - 1]).toMatchObject(new Assassin());
  })
  test('sort players array by speed in descending order', () => {
    game.addPlayer(new Bard());
    game.addPlayer(new Bard());
    game.addPlayer(new Assassin());
    game.addPlayer(new Assassin());
    game.addPlayer(new Assassin());
    game.addPlayer(new Bard());
    game.addPlayer(new Assassin());
    game.addPlayer(new Assassin());
    game.addPlayer(new Assassin());
    game.addPlayer(new Bard());
    
    //  0 1 2 3
    // [A,B,B,A]
    game.determineFirstPlayer();
    for(let i =0; i < game.players.length - 2; i++) {
      expect(game.players[i].speed).toBeGreaterThanOrEqual(game.players[i + 1].speed);
      console.log(game.players[i]);
    }

  });

  test('checking that damage was dealt after an attack', () => {
    game.nextTurn();
    for(let i = 0; i < 10; i++) {
      console.log(game.attack(game.getAttackingPlayer(), game.getDefendingPlayer()));
 
    }
    expect(game.attack(game.getAttackingPlayer(), game.getDefendingPlayer())).toBeGreaterThanOrEqual(1);
  
    
});
});
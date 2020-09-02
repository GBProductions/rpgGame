import Assassin from '../src/assassin.js';

describe('Assassin', () => {

  let assassin;

  beforeEach(() => {
    assassin = new Assassin();
    
  });

  test('check creation of assassin object', () => {
    expect(assassin).toMatchObject(new Assassin());
  });
  
  test('check that assassin.attack() returns a valid value > 0', () => {
    expect(assassin.attacking(0)).toBeGreaterThanOrEqual(0);
  });
  test('check that assassin.blocking() returns a valid value > 0', () => {
    expect(assassin.blocking(0)).toBeGreaterThanOrEqual(0);
  });

});


// game{

// battleAttack(player1, player2) {
// let damage = player1.attack() - player2.defense()
// player2SetHealth(damage);
// nextTUrn();
// }

// attemptFlee()

// }
// add luck and change modifier based
//flee speed + luck?
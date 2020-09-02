import {Barbarian} from '../src/barbarian.js';

describe('Barbarian', () => {

  let barbarian;

  beforeEach(() => {
    barbarian = new Barbarian();
    
  });

  test('check creation of assassin object', () => {
    expect(barbarian).toMatchObject(new Barbarian());
  });
  
  test('check that assassin.attack() returns a valid value > 0', () => {
    expect(barbarian.attacking(0)).toBeGreaterThanOrEqual(0);
  });
  test('check that assassin.blocking() returns a valid value > 0', () => {
    expect(barbarian.blocking(0)).toBeGreaterThanOrEqual(0);
  });

});
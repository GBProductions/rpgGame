import Paladin from '../src/paladin.js';

describe('Paladin', () => {

  let paladin;

  beforeEach(() => {
    paladin = new Paladin();
    
  });

  test('check creation of assassin object', () => {
    expect(paladin).toMatchObject(new Paladin());
  });
  
  test('check that assassin.attack() returns a valid value > 0', () => {
    expect(paladin.attacking(0)).toBeGreaterThanOrEqual(0);
  });
  test('check that assassin.blocking() returns a valid value > 0', () => {
    expect(paladin.blocking(0)).toBeGreaterThanOrEqual(0);
  });

});
import {Bard} from '../src/bard.js';

describe('Bard', () => {

  let bard;

  beforeEach(() => {
    bard = new Bard();
    
  });

  test('check creation of assassin object', () => {
    expect(bard).toMatchObject(new Bard());
  });
  
  test('check that assassin.attack() returns a valid value > 0', () => {
    expect(bard.attacking(0)).toBeGreaterThanOrEqual(0);
  });
  test('check that assassin.blocking() returns a valid value > 0', () => {
    expect(bard.blocking(0)).toBeGreaterThanOrEqual(0);
  });

});
import Wizard from '../src/wizard.js';

describe('wizard', () => {

  let wizard;

  beforeEach(() => {
    wizard = new Wizard();
    
  });

  test('check creation of wizard object', () => {
    expect(wizard).toMatchObject(new Wizard()); 
  });
  
  test('check that wizard.attack() returns a valid value > 0', () => {
    expect(wizard.attacking(0)).toBeGreaterThanOrEqual(0);
  });
  test('check that wizard.blocking() returns a valid value > 0', () => {
    expect(wizard.blocking(0)).toBeGreaterThanOrEqual(0);
  });

});
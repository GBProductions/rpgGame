export default class Mage {
  constructor(){
    this.classType = 'Mage';
    this.startingHealth = 60;
    this.health = 60;
    this.attack = 30;
    this.speed = 2;
    this.defense = 30;
    this.luck = 80;
  }

  attacking(modifier) {
    return modifier + this.attack;
  }

  blocking(modifier) {
    return modifier + this.defense;
  }
}
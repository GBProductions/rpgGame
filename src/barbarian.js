export default class Barbarian { //more health, tank
  constructor(){
    this.classType = 'Barbarian';
    this.startingHealth = 100;
    this.health = 100;
    this.attack = 30;
    this.speed = 10;
    this.defense = 55;
    this.luck = 7;
  }

  attacking(modifier) {
    return modifier + this.attack;
  }

  blocking(modifier) {
    return modifier + this.defense;
  }

}
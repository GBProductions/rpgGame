export default class Barbarian { //more health, tank
  constructor(){
    this.classType = 'Barbarian';
    this.health = 100;
    this.attack = 50;
    this.speed = 10;
    this.defense = 70;
    this.luck = 7;
  }

  attacking(modifier) {
    return modifier + this.attack;
  }

  blocking(modifier) {
    return modifier + this.defense;
  }

}
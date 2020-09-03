export default class Paladin { // medium
  constructor(){
    this.classType = 'Paladin';
    this.health = 80;
    this.attack = 40;
    this.speed = 30;
    this.defense = 40;
    this.luck = 10;
  }

  attacking(modifier) {
    return modifier + this.attack;
  }

  blocking(modifier) {
    return modifier + this.defense;
  }
}
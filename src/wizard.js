export default class Wizard {
  constructor(){
    this.health = 60;
    this.attack = 70;
    this.speed = 20;
    this.defense = 40;
    this.luck = 12;
  }

  attacking(modifier) {
    return modifier + this.attack;
  }

  blocking(modifier) {
    return modifier + this.defense;
  }
}
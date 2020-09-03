export default class Assassin { // high damage and speed
  constructor(){
    this.classType = 'Assassin';
    this.startingHealth = 60;
    this.health = 60;
    this.attack = 65;
    this.speed = 80;
    this.defense = 20;
    this.luck = 60;
  }

  attacking(modifier) {
    return modifier + this.attack;
  }

  blocking(modifier) {
    return modifier + this.defense;
  }

}
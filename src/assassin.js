export default class Assassin { // high damage and speed
  constructor(){
    this.health = 60;
    this.attack = 65;
    this.speed = 80;
    this.defense = 20;
  }

  attacking(modifier) {
    return modifier + this.attack;
  }

  blocking(modifier) {
    return modifier + this.defense;
  }

}
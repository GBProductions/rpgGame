export default class Bard { // bad at everything
  constructor(){
    this.classType = 'Bard';
    this.health = 40;
    this.attack = 20;
    this.speed = 20;
    this.defense = 20;
    this.luck = 100;
  }

  attacking(modifier) {
    return modifier + this.attack;
  }

  blocking(modifier) {
    return modifier + this.defense;
    
  }

}
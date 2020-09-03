export default class Game {
  constructor(values){
    this.players = []; 
    this.playersTurnIndex = 0;
  }

  attack(attackingPlayer, defendingPlayer) {
     let modifierAttack = this.rollDice((attackingPlayer.luck + attackingPlayer.attack) / 3);
     let modifierDefend = this.rollDice((defendingPlayer.luck + defendingPlayer.defense) / 4);
    let damageDealt = attackingPlayer.attacking(modifierAttack) - defendingPlayer.blocking(modifierDefend);
  
    if(damageDealt <= 0) {
      damageDealt = 1;
    }
    defendingPlayer.health -= damageDealt;
    if(defendingPlayer.health < 0){
      defendingPlayer.health = 0;
    }
   return [damageDealt, modifierAttack, modifierDefend];
  }
  nextTurn() {
    if(this.playersTurnIndex >= this.players.length - 1) {
      this.playersTurnIndex = 0;
    } else {
      this.playersTurnIndex++;
    }
  }
  removePlayer(player) {
    let x = this.players.indexOf(player)//needs to be fixed | removePlayer?
    this.players.splice(x, x + 1);//needs to be fixed
  }

  rollDice(sides) {
    return Math.ceil(Math.random()*sides)
  }

  addPlayer(player){/// to add player
    this.players.push(player);

  }

  determineFirstPlayer(){//based on speed
    this.players.sort(function (a,b) {
      return b.speed - a.speed;
    });

  }
  findHighestSpeed(){
    if(this.players[0].speed >= this.players[1].speed){
      return 0;
    } else {
      return 1;
    }
  }
  getAttackingPlayer(){
    return this.players[this.playersTurnIndex];
  }
  getDefendingPlayer(){
    if(this.playersTurnIndex >= this.players.length - 1){
      return this.players[0];
    } else {
      return this.players[this.playersTurnIndex + 1];
    }

  }

  checkDeath(){
    for (let i =0; i < this.players.length; i++) {
      if (this.players[i].health <= 0) {
        return i;
      } 
    }
    return -1;
  }
  checkWinner(){
    for (let i =0; i < this.players.length; i++) {
      if (this.players[i].health <= 0) {
        if(i === 0) {
          return 1;
        } else {
          return 0;
        }
      } 
    }
    return -1;
  }

  resetGame(){
    this.players = [];
    this.playersTurnIndex = 0;
  }

}


/*
to add:
fortifiy
items
*/
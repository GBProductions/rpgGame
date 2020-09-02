class Game {
  constructor(values){
    this.players = []; 
    this.playersTurnIndex = 0;
  }

  attack(attackingPlayer, defendingPlayer) {
    let modifierAttack = this.rollDice(sides);//figure out sides
    let modifierDefend = this.rollDice(sides);//figure out sides
    let damageDealt = attackingPlayer.attacking(modifierAttack) - defendingPlayer.blocking(modifierDefend);
    defendingPlayer.health -= damageDealt;
    
    if(defendingPlayer.health <= 0 ) {
      defendingPlayer.dead();//check
      this.died(defending);//
    } else {
      this.nextTurn();
    }
  }
  nextTurn() {
    if(this.playersTurnIndex === this.players.length - 1) {
      this.playersTurnIndex = 0;
    } else {
      this.playersTurnIndex++;
    }
  }
  died(player) {
    let x = this.players.findIndex(player)//needs to be fixed | removePlayer?
    this.players.remove(x);//needs to be fixed
  }

  rollDice(sides) {
    return Math.ceil(Math.random()*sides)
  }

  addPlayer(){/// to add player
  }
  removePlayer(){ //
  }

  determineFirstPlayer(){//based on speed
  }


}


/*
to add:
fortifiy
items
*/
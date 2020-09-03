
CHARACTER SCREEN:
row/cols
Add cards for each class
Add photos for each card
Add a button for each card that pushes a new class into the game object/ assign to player 1or2
Fighting UI
  

SCREENS:
landing 

character select/setup

run screen

winner screen

reset to landing or char


ADDITIONAL FUNCTIONALITY

Fortify/Heal

Items (ie potions, armor, upgrades)

continuous game with bard npc that drop items


whiteboard///////////////////////////////

Receive string from user 

  let string = $(input)submit();


String to Array 

  let letterArray = string.split('').toLowerCase;

Check array for letters 

function () {
  for (let i = 0; i <= 26; i++){
    letterNumber.push(0);
  }

  let letterNumber = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] = "a") {
      letterNumber[i]++;
    } else if (letterArray[i] = "b") {
      letterNumber[i]++;
    } else if (ect.....) {
      letterNumber[i]++;

      ... 

    } else if (letterArray[i] = "z") {
      letterNumber[i]++;
    }
    return letterNumber
  }

Output array 

$("").text(letterNumber);


letterNumber
for(i = 0; i  < string.length; i++) {
  letterNumber[String.charCodeAt(i) - 97]++
}
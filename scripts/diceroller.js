// here is the dice roller//

const j ="";
const e ="";
  function getRandomint(max){ 
    return Math.floor(Math.random() * max);
  }
  function diceRoller(){
    const dice = document.getElementById("dice-roll")
    dice.innerHTML = '';
    const roll = getRandomint(prompt("Number sides to the die?"))+1
      .then((j)=> {
      let roll = j['roll'];
      dice.innerHTML = roll;
      })
    .catch((e) => {
        roll.innerHTML = e;
      });
  }
window.addEventListener('load', (event) =>{diceRoller(); });
    

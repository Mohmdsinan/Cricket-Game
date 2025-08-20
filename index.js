function tossSelection(choice) {
  const tossResult = Math.random() < 0.5 ? 'head' : 'tail';


  if (tossResult === choice) {
    const pTag = document.querySelector('.bat-ball');
    pTag.innerHTML = 'You won in toss';

    const chooseText = document.createElement("p");
    chooseText.innerText = "Choose your option";
    pTag.appendChild(chooseText);

    const batButton = document.createElement("button");
    batButton.innerText = "Bat";
    batButton.addEventListener("click", () => selected('bat'));
    batButton.classList.add("choose-button");

    const ballButton = document.createElement("button");
    ballButton.innerText = "Ball";
    ballButton.addEventListener("click", () =>  selected('ball'));

    batButton.classList.add("choose-button");

    pTag.appendChild(batButton);
    pTag.appendChild(ballButton);

  } else {
    const pTag = document.querySelector('.bat-ball');
    pTag.innerHTML = 'You lose in toss';
  }
}

function selected(choice) {
  if (choice === 'bat') {
    
    const gameArea = document.querySelector(".game-area");

    gameArea.innerText ="Your batting Turn! \n choose your run \n";


    for(let i= 1; i<= 6; i++){
      if(i === 5)
        continue;

      else{
        runButton = document.createElement("button");
        runButton.innerText = i;
        gameArea.appendChild(runButton);
        runButton.addEventListener ("click", ()=> userRuns (i)) ;
      }
    }
  }
}

function userRuns (runs){
  
}
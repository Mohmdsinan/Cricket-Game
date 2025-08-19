function tossSelection(choice){
  const tossResult = Math.random() < 0.5 ? 'head' : 'tail' ;
  

  if (tossResult === choice) {
    const pTag = document.querySelector('.bat-ball');
    pTag.innerHTML = 'You won in toss';

    const chooseText = document.createElement("p");
    chooseText.innerText = "Choose your option";
    pTag.appendChild(chooseText);

    const batButton = document.createElement("button");
    batButton.innerText = "Bat";
    batButton.classList.add("choose-button");

    const ballButton = document.createElement("button");
    ballButton.innerText = "Ball";
    batButton.classList.add("choose-button");

    pTag.appendChild(batButton);
    pTag.appendChild(ballButton);

  } else {
    const pTag = document.querySelector('.bat-ball');
    pTag.innerHTML = 'You lose in toss';
  }
}

let btn = document.querySelector("button");
btn.addEventListener("click",  () => {
    play();
});

function computer() {
    let values = ["rock", "paper", "scissor"];
    let random =  Math.floor(Math.random() * values.length);
    let choice = values[random];
    return choice;
}


function choice(userchoice) {
    let computerchoice = computer();
    if(userchoice == computerchoice) {
        return "tie";
    } else if ((userchoice == "rock" && computerchoice == "scissor") ||
        (userchoice == "scissor" && computerchoice == "paper") ||
        (userchoice == "paper" && computerchoice == "rock"))  {
        return "You win";
     }
     else {
        return "computer wins";
        }
}

function play() {
    let computerchoice = computer();
    var comp = computerchoice.trimStart();
    let userchoice = document.getElementById("userinput").value;
    choice(userchoice);
    // console.log(result);
    
    const resultElement = document.getElementById("result");
    const resultInput = document.getElementById("input");
    const resultComputer = document.getElementById("computer");
    resultInput.innerHTML = `You chose: ${userchoice}`;
    resultComputer.innerHTML = `Computer chose: ${comp}`;
    resultElement.innerHTML = `Result :${choice(userchoice)} `;
    
}




// let computerChoice = computer();
    // let playerChoice = document.querySelector("input").value;
    // if (computerChoice === "stone") {
    //     if (playerChoice === "paper") {
    //         console.log("You win");
    //     } else {
    //         console.log("You lose");
    //     }
    // }

    // function computer() {
//     return new Promise(() => {
//       setTimeout(() => {
//         let values = ["rock", "paper", "scissor"];
//         let random = Math.floor(Math.random() * values.length);
//         let choice = values[random];
//         return choice;
//       }, 2000);
//     });
//   }
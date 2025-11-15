let userscore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice');
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        choice.classList.add("clicked");
        setTimeout(()=>
        choice.classList.remove("clicked"),350);
        playGame(userChoice);
    });
});
function genCompChoice() {
    const options = ['rock', 'paper', 'scissor'];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}
function playGame(userchoice) {
    const compchoice = genCompChoice();
    console.log("computer-choice:", compchoice);
    console.log("user-choice:", userchoice);
    const userchoices=document.getElementById('userchoices');
    const computerchoices=document.getElementById('computerchoices');
    userchoices.innerText=`you choose:  ${userchoice}`;
    computerchoices.innerText=`Computer choose:  ${compchoice}`;
    const msg = document.getElementById('btn');
   const user= document.getElementById('player-score');
   const computer= document.getElementById('computer-score');
    if (userchoice === compchoice) {
        msg.innerText = "ITS A TIE😒";
        msg.style.background='yellow';
        msg.style.color="black";
    }
    else if (userchoice == "rock" && compchoice == "scissor" || userchoice == "paper" && compchoice == "rock" || userchoice == "scissor" && compchoice == "paper") {
        msg.innerText = "YOU WIN😍";
        msg.style.background='green';
        userscore++;
        user.innerText=userscore;
        msg.style.color="white";
    }
    else {
        msg.innerText = "YOU LOOSE😭";
        msg.style.background='red';
        msg.style.color="white";
        compScore++;
        computer.innerText=compScore;
    }
}
document.getElementById('reset').addEventListener('click',()=>{
    document.getElementById('player-score').innerText="0";
    document.getElementById('computer-score').innerText="0";
    document.getElementById('userchoices').innerText="";
    document.getElementById('computerchoices').innerText="";
    document.getElementById('btn').innerText="Play your Move";
    document.getElementById('btn').style.background="black";
    document.getElementById('btn').style.color="white";
    console.log("Game restarted");
})
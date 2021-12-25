let userScore=0;
let computerScore=0;


const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("Rock");
const paper_div=document.getElementById("Paper");
const scissors_div=document.getElementById("Scissors");
const resetButton = document.getElementById("reset-button")

function getComputerChoice(){
    const choices=["Rock","Paper","Scissors"];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function resetScores(){
    computerScore = 0;
    computerScore_span.innerHTML = computerScore
    userScore = 0;
    userScore_span.innerHTML = userScore;
  };
function win(userChoice, computerChoice){
    const smallUserWord="user".fontsize(3).substring();
    const smallComputerWord="computer".fontsize(3).substring();
    const userChoice_div=document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=`${userChoice} ${smallUserWord} beats ${computerChoice} ${smallComputerWord} . You win! 🔥 `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),500);
}
function lose(userChoice, computerChoice){
    const smallUserWord="user".fontsize(3).substring();
    const smallComputerWord="computer".fontsize(3).substring();
    const userChoice_div=document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML=`${userChoice} ${smallUserWord} loses to ${computerChoice} ${smallComputerWord} . You lost... 🤦`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'),500);
}
function draw(userChoice, computerChoice){
    const smallUserWord="user".fontsize(3).substring();
    const smallComputerWord="computer".fontsize(3).substring();
    const userChoice_div=document.getElementById(userChoice);
    result_div.innerHTML=`${userChoice} ${smallUserWord} equals ${computerChoice} ${smallComputerWord} . It's a draw  🙃`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'),500);
}
function game(userChoice){
    const computerChoice=getComputerChoice();
    
    switch (userChoice + computerChoice) {
        case "PaperRock":
        case "RockScissors":
        case "ScissorsPaper":
          win(userChoice, computerChoice);
          break;
    
        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
          lose(userChoice, computerChoice);
          break;
    
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
          draw(userChoice, computerChoice);
          break;
      }

}
function main(){
    rock_div.addEventListener('click',() => game("Rock"));
    paper_div.addEventListener('click',() => game("Paper"));
    scissors_div.addEventListener('click',() => game("Scissors"));
    resetButton.addEventListener('click', () => resetScores());
}

main();
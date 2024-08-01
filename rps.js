let user1 = 0;
let user2 = 0;
let round = 0;
const scissor = document.querySelector('#scissor');
const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const playerScore = document.querySelector('#player');
const computerScore = document.querySelector('#computer');
const buttons = document.querySelector('button');

let getComputerChoice = () => {
    let randomNumber = (Math. floor(Math. random() * 3)) 
    if (randomNumber === 0){ 
        return 'Rock'; 
    } else if (randomNumber === 1) {
        return 'Paper'; 
    } else if (randomNumber === 2) {
        return 'Scissor'; 
    } 
    } 

    let playRound = (playerSelection, computerSelection) => {
        if (playerSelection == computerSelection) {
            console.log('Draw!') 
        } else if (playerSelection == 'Scissor' && computerSelection == 'Rock') {
            user2 += 1;
            console.log('You Lose!');
        } else if (playerSelection == 'Scissor' && computerSelection == 'Paper') {
            user1 += 1;
            console.log('You Win!');
        } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
            user2 += 1;
            console.log('You Lose!');
        } else if (playerSelection == 'Rock' && computerSelection == 'Scissor') {
            user1 += 1;
            console.log('You Win!');
        } else if (playerSelection == 'Paper' && computerSelection == 'Scissor') {
            user2 += 1;
            console.log('You Lose!');
        } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
            user1 += 1;
            console.log('You Win!');
        } else {
            return 'Error'        
        }
    }      

let playerInput = ''

scissor.addEventListener('click', () => {  
    playerInput = 'Scissor';
    let computerSelection = getComputerChoice();
    console.log(playerInput, computerSelection)

    playRound(playerInput, computerSelection);
    playerScore.textContent = `${user1}`
    computerScore.textContent = `${user2}`
    if (user1 == 5) {
        alert('You Win!')
    } else if (user2 == 5) {
        alert('Computer Win!')
    }
});

paper.addEventListener('click', () => { 
    playerInput = 'Paper';    
    let computerSelection = getComputerChoice();
    console.log(playerInput, computerSelection)
    playRound(playerInput, computerSelection);
    playerScore.textContent = `${user1}`
    computerScore.textContent = `${user2}`
    if (user1 == 5) {
        alert('You Win!')
    } else if (user2 == 5) {
        alert('Computer Win!')
    }
});


rock.addEventListener('click', () => {  
    playerInput = 'Rock';
    let computerSelection = getComputerChoice();
    console.log(playerInput, computerSelection)
    playRound(playerInput, computerSelection);
    playerScore.textContent = `${user1}`
    computerScore.textContent = `${user2}`
    if (user1 == 5) {
        alert('You Win!')
    } else if (user2 == 5) {
        alert('Computer Win!')
    }
});

function reset(){
    playerScore.innerHTML = `${0}`
    computerScore.innerHTML = `${0}`
    user1 = 0;
    user2 = 0;
}

if (user1 == 5 || user2 == 5) {
    reset();
}
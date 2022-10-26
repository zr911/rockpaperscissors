let user1 = 0;
let user2 = 0;

const getComputerChoice = () => {
    const randomNumber = (Math. floor(Math. random() * 3)) 
    if (randomNumber === 0){ 
        return 'Rock'; 
    } else if (randomNumber === 1) {
        return 'Paper'; 
    } else if (randomNumber === 2) {
        return 'Scissor'; 
    } 
} 

const computerSelection = getComputerChoice();

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return 'Draw!'
    } else if (playerSelection == 'Scissor' && computerSelection == 'Rock') {
        user2 += 1;
        return ('You Lose!');
    } else if (playerSelection == 'Scissor' && computerSelection == 'Paper') {
        user1 += 1;
        return ('You Win!');
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        user2 += 1;
        return ('You Lose!');
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissor') {
        user1 += 1;
        return ('You Win!');
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissor') {
        user2 += 1;
        return ('You Lose!');
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        user1 += 1;
        return ('You Win!');
    } else {
        return 'Error'
    }
}

let game = () => {
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt('Rock, Paper or Scissor?')
        const playerSelection = playerInput[0].toUpperCase() + playerInput.slice(1).toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(user1);
        console.log(user2);
    }
    if (user1 > user2) {
        console.log('Congratulations!')
    } else if (user2 > user1) {
        console.log('Boo!')
    } else {
        console.log('It\'s a Draw!')
    }
}

game();
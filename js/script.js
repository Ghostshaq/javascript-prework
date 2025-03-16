function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
    if (argPlayerMove === 'nieznany ruch') {
        printMessage('Błędny ruch! Wybierz 1, 2 lub 3.');
    } else if (argPlayerMove === argComputerMove) {
        printMessage('Remis!');
    } else if (
        (argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
        (argComputerMove === 'papier' && argPlayerMove === 'nożyce') ||
        (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')
    ) {
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Komputer wygrywa!');
    }
}

function playGame(playerInput) {
    clearMessages();
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);

    printMessage('Mój ruch to: ' + computerMove);
    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});
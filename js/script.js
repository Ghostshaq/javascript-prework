(() => {
    let playerScore = 0;
    let computerScore = 0;

    const printMessage = (msg) => {
        const div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    };

    const clearMessages = () => {
        document.getElementById('messages').innerHTML = '';
    };

    const getMoveName = (argMoveId) => {
        if (argMoveId === 1) return 'kamień';
        if (argMoveId === 2) return 'papier';
        if (argMoveId === 3) return 'nożyce';
        return 'nieznany ruch';
    };

    const displayResult = (argComputerMove, argPlayerMove) => {
        if (argPlayerMove === 'nieznany ruch') {
            printMessage('Błędny ruch! Wybierz 1, 2 lub 3.');
            return;
        }

        if (argPlayerMove === argComputerMove) {
            printMessage('Remis!');
        } else if (
            (argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
            (argComputerMove === 'papier' && argPlayerMove === 'nożyce') ||
            (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')
        ) {
            printMessage('Ty wygrywasz!');
            playerScore++;
        } else {
            printMessage('Komputer wygrywa!');
            computerScore++;
        }

        document.getElementById('player-score').textContent = playerScore;
        document.getElementById('computer-score').textContent = computerScore;

        if (playerScore === 5 || computerScore === 5) {
            setTimeout(endGame, 500);
        }
    };

    const playGame = (playerInput) => {
        if (playerScore === 5 || computerScore === 5) return;

        clearMessages();

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);
        const playerMove = getMoveName(playerInput);

        printMessage('Mój ruch to: ' + computerMove);
        printMessage('Twój ruch to: ' + playerMove);

        displayResult(computerMove, playerMove);
    };

    const endGame = () => {
        const message = playerScore === 5 ? 'WYGRAŁEŚ!' : 'PRZEGRAŁEŚ!';

        document.body.innerHTML = `
            <div class="end-screen">
                <h1>${message}</h1>
                <button id="restart-game">Zagraj ponownie</button>
            </div>
        `;

        document.getElementById('restart-game').addEventListener('click', restartGame);
    };

    const restartGame = () => {
        playerScore = 0;
        computerScore = 0;
        location.reload();
    };

    document.getElementById('play-rock').addEventListener('click', () => playGame(1));
    document.getElementById('play-paper').addEventListener('click', () => playGame(2));
    document.getElementById('play-scissors').addEventListener('click', () => playGame(3));
})();


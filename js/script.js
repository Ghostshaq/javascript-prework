let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber == 2){
	computerMove = 'papier';
}

else if(randomNumber == 3){
	computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// ruch gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
	playerMove = 'kamień';
  } else if (playerInput == '2') {
	playerMove = 'papier';
  } else if (playerInput == '3') {
	playerMove = 'nożyce';
  }
  
  printMessage('Twój ruch to: ' + playerMove);

  //zwracanie wyniku

  if (playerMove === 'nieznany ruch') {
	printMessage('Błędny ruch! Wpisz 1, 2 lub 3.');
  } else if (playerMove === computerMove) {
	printMessage('Remis!');
  } else if (
	(computerMove === 'kamień' && playerMove === 'papier') ||
	(computerMove === 'papier' && playerMove === 'nożyce') ||
	(computerMove === 'nożyce' && playerMove === 'kamień')
  ) {
	printMessage('Ty wygrywasz!');
  } else {
	printMessage('Komputer wygrywa!');
  }
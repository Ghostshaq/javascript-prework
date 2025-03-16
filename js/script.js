function getMoveName(argMoveId) {
	if (argMoveId == 1) {
	  return 'kamień';
	} else if (argMoveId == 2) {
	  return 'papier';
	} else if (argMoveId == 3) {
	  return 'nożyce';
	}
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
  }
  
  function displayResult(argComputerMove, argPlayerMove) {
	if (argPlayerMove === 'nieznany ruch') {
	  printMessage('Błędny ruch! Wpisz 1, 2 lub 3.');
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
  
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  
  let computerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + computerMove);

  /*if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber == 2){
	computerMove = 'papier';
}

else if(randomNumber == 3){
	computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove); */

// ruch gracza
  
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  
  let playerMove = getMoveName(playerInput);

/*if (playerInput == '1') {
	playerMove = 'kamień';
  } else if (playerInput == '2') {
	playerMove = 'papier';
  } else if (playerInput == '3') {
	playerMove = 'nożyce';
  }
  
  printMessage('Twój ruch to: ' + playerMove); */

  printMessage('Twój ruch to: ' + playerMove);
  
  displayResult(computerMove, playerMove);
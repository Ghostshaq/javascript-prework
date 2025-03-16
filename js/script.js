function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let playerMove = `papier`;

printMessage('Zagrałem ' + playerMoveMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
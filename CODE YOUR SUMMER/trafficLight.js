const trafficController = (color) => {
	let feedBack
	if(color == 'red') feedBack = 'Stop'
	else if(color == 'green') feedBack = 'GO'
	else if(color == 'yellow') feedBack = 'Wait'
	else feedBack = 'Invalid'	
		return  feedBack

	}

const prompt = require('prompt-sync')()
userColor = prompt("Enter your Traffic Colors ").toLowerCase()
console.log(trafficController(userColor))
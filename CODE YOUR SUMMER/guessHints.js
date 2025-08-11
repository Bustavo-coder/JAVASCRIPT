const getGuess = () =>{
	const secretNum = 25
	userInput = prompt('Enter Your Guess ')
while( secretNum != userInput){
	if(userInput > secretNum ) console.log("To High")
	else if(userInput < secretNum ) console.log("To Low")
	userInput = prompt('Enter Your Guess to Try Again ')
	}
	if(userInput == secretNum) console.log('Correct')
}


const prompt = require('prompt-sync')()
getGuess()
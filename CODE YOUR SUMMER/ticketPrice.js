const ticketBooth = (age) =>{
	if(age >= 18) return '$10 is the adult price'
	else return '$5 is the  child price'

	
	}
const prompt = require('prompt-sync')()
userInput = prompt('Enter Your Guess to Try Again ')
console.log(ticketBooth(userInput))

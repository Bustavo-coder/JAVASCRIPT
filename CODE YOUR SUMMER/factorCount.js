function gotthroughNumber(range){
		let factors = 0
	for(var count = 1; count < range;count++){
		if(range % count == 0) factors++
		}
		return factors
	}


const prompt = require('prompt-sync')()
userInput = Number(prompt('Enter Your Range'))
console.log(gotthroughNumber(userInput))
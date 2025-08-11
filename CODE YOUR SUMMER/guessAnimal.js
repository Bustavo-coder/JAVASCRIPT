const guessAnimal = (animal) =>{
	let storedAnimal = 'dog'
	if(animal == storedAnimal) return `Correct! it's a dog `
	else return 'Nope its a dog!'
	}

const prompt = require('prompt-sync')()
userPrompt = prompt("Guess The animal ").toLowerCase()
console.log(guessAnimal(userPrompt))
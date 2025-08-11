function ageRestriction(age){
	const minimumage = 10
	if(age >= minimumage) return "Welcome to the show!"
	else return  'Sorry, you’re too young!'


	}
const prompt = require('prompt-sync')()
userPrompt = Number(prompt("Enter your age "))

console.log(ageRestriction(userPrompt))
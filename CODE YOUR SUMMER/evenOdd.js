function checkEvenOrOdd(number){
	if(number % 2 == 0) return "Even"
	else return "Odd"
	}
const prompt = require('prompt-sync')()
userinput = prompt('Enter Number')
console.log(checkEvenOrOdd(userinput))
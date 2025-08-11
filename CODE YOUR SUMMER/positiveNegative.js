const prompt = require('prompt-sync')()
 userPrompt = Number(prompt("Enter the Number "))
function checkNumber(numb){
	if(numb > 0) return "Positive"
	else return 'Negative or zero'

	}

console.log(checkNumber(userPrompt))


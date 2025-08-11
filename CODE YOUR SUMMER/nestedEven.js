function checkEvenOrOdd(number){
	let even = ""
	for(var count = 1; count < number; count++){
	if(count % 2 == 0) even += count + ","
		}
	return even
	}

const prompt = require('prompt-sync')()
userinput = prompt('Enter Number')
console.log(checkEvenOrOdd(userinput))
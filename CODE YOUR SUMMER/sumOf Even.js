function checkEven(number){
	let evenCount = 0
	for(var count = 1; count <= number; count++){
	if(count % 2 == 0) evenCount += count
		}
	return evenCount
	}

const prompt = require('prompt-sync')()
userinput = Number(prompt('Enter Number '))
console.log(checkEven(userinput))
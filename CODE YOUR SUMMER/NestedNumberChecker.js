function nestedNumber(number){
	if(number % 3 == 0 && number % 5 == 0) return 'FizzBuzz'
	else if (number % 3 == 0 ) return 'Fizz'
	else if(number % 5 == 0) return 'Buzz'
	else 'Buxxxa'



	}

const prompt = require('prompt-sync')()
start = Number(prompt('Enter Your Starting Range'))
console.log(nestedNumber(start))
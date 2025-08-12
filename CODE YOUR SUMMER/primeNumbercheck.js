function checkPrime(number){
	isPrime = true
	for(var count = 2; count < number; count++){
		if(number % count == 0) isPrime = false
			}

	if(isPrime)console.log('Prime')
	else console.log('Not prime')

	}

const prompt = require('prompt-sync')()
userResponse= Number(prompt('Enter the Number'))
 checkPrime(userResponse)
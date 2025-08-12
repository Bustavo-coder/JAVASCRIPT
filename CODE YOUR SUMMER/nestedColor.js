function nestedColorMessage(userResponse){
	if(userResponse == 'red'){
		for(let count = 0; count < 3;count++) console.log('Red Is Awesome!')
		}else console.log('I Like red Better')


}

const prompt = require('prompt-sync')()
userInput = prompt('Enter Your color ').toLowerCase()
nestedColorMessage(userInput)
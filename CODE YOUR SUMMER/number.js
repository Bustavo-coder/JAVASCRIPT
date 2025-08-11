const propmt = require('prompt-sync')()
const magicRandom = 8
userprompt = propmt("Guess The Number ")

 while(userprompt != magicRandom){
	console.log('Nice try, guess again')
	userprompt = propmt("Enter Number")
}

 if(userprompt == magicRandom) console.log('Correct')
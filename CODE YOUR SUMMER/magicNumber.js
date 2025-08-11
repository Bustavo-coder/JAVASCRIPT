const propmt = require('prompt-sync')()
const magicRandom = 42
userprompt = propmt("Guess The Number ")

 while(userprompt != magicRandom){
	console.log('Nice try, guess again')
	userprompt = propmt("Keep Looking ")
}

 if(userprompt == magicRandom) console.log('You Found The Magic Number')
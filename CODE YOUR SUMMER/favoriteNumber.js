const propmt = require('prompt-sync')()
const random = 7
userprompt = propmt("Guess The Number ")
 while(userprompt != random){
	userprompt = propmt("Nice try Guess again ")
}

 if(userprompt == random) console.log('That My Favourite Number')
	else console.log('Nice try, guess again')
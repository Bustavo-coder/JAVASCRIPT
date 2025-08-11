const prompt = require('prompt-sync')()
userName = prompt("Enter your Name ").toLowerCase()

function starName(name){
	for(var count = 0; count < 3; count++){
	console.log(`${name} on one line,then ${name}! again and one more time`)
		}
	}
starName(userName)
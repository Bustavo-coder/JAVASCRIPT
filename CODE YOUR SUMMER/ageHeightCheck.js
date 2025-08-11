function userInfo(age,height){
	if(age >= 12 && height >= 140) return 'Ride Allowed'
	else if(age >= 12 && height < 140) return "To Short"
	else if(age < 12 && height >=  140) return 'To Young'
	else return 'To Young And Short'

	}


const prompt = require('prompt-sync')()
userAge = Number(prompt("Enter Your Age"))
userHeight = Number(prompt("Enter Your Height"))
console.log(userInfo(userAge,userHeight))
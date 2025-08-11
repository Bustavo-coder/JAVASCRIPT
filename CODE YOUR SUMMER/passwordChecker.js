const getAcces = (userPassword) =>{
	const password = "secret123"
	if(userPassword ==  password) return "Access granted! Welcome!" 
	else return "Access denied!"
}
const prompt = require('prompt-sync')()
userPassword = prompt("Enter Your Password ")
console.log(getAcces(userPassword))
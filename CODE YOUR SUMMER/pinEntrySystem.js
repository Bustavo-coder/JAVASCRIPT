const getAcces = () =>{
	const password = "1234"
	userPassword = prompt("Enter Your Password ").toLowerCase()
	count = 0
	while(count < 3) {
		if(userPassword == password) break;
		else userPassword = prompt(" Incorrect Try Again ").toLowerCase()
			count++
		}
		if(userPassword == password) return 'Succes'
		else return 'Locked out'
}


const prompt = require('prompt-sync')()
console.log(getAcces())
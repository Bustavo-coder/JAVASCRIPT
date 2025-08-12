function checkDivisibleby (numb){
	for(let count = 0; count <= numb;count++){
		if(count % 3 == 0 &&  count % 5 == 0)console.log(count)	
		}
}

const prompt = require('prompt-sync')()
userNumber = prompt("Enter The Ranage To Check ")
checkDivisibclsleby(userNumber)
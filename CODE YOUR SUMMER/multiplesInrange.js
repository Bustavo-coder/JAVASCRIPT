function multiplesRange(start,stop){
	for(let count = start; count < stop;count++) {
			if (count % 4 == 0) console.log(count)
		}




	}
const prompt = require('prompt-sync')()
start = Number(prompt('Enter Your Starting Range'))
stop = Number(prompt('Enter Your stop Range'))
multiplesRange(start,stop)

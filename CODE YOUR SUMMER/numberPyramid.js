function print(number){
	for(var count = 0; count < number;count++){
			let sum = ""
		for(var counter = 0; counter < count; counter++){
			sum+= count

			}
		console.log(sum)
		}

	}

const prompt = require('prompt-sync')()
start = Number(prompt('Enter Number'))
print(start)

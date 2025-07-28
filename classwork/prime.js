const prompt = require('prompt-sync')()
const prompInput = prompt("Enter the Number Range\n")
// for(let count = 0; count < prompInput ; count++){
 // const result = count % 2 != 0 && count % count == 0 && count % 5 != 0 && count % 3 != 0? console.log(count): count 
//}

for(let count = 3; count < prompInput ; count++){
	let typeValue = 0
	for(counter = 2; counter < count ; counter++){
		
		if(count % counter == 0){
			typeValue = 1
			
		}
	
}
	if(typeValue == 0) console.log(count)

	
}
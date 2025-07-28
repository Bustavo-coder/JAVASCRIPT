const score = []
const prompt = require('prompt-sync')()
let largest = 0
 let secondlargest = 0
for(var count = 0; count < 8;count++){
	score[count] = prompt("Enter the scores") 
	if(score[count] > largest) largest = score[count] 

}
console.log(largest)

for(var counter = 0; counter < score.length; counter++){
	if(score[counter] == largest) continue
	if(score[counter] > secondlargest) secondlargest = score[counter]
	
}
console.log(secondlargest)

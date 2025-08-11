const vowels = ["a","e","i","o","u"]

function checkWords(words){
	let sum = 0
	for(let index = 0; index < words.length;index++){
		if(vowels.includes(words.charAt(index))) sum++
		}
		return sum
	}

const prompt = require('prompt-sync')()
userPrompt = prompt("Enter the words ").toLowerCase()
console.log(checkWords(userPrompt))


	
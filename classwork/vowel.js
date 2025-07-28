let sentence = "I am a boy i leav in ginns"
	sentence = sentence.toUpperCase()
const vowel = "AEIOU"
let totalvowel = 0

for(var count = 0; count < sentence.length;count++){
	
	for(var counter = 0; counter < vowel.length;counter++){

		if(sentence.charAt(count) == vowel.charAt(counter)) totalvowel++
	}
}

console.log(totalvowel)
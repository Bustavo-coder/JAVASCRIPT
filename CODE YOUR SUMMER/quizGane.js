const quix = [
	{
	questions : "What Is The Capital Of France",
	options : "1. Donald Trump \n 2.Ribero\n 3\nParis",
	ans : 1
		
	},
	{
	questions : "What Is The Capital Of Nigeria",
	options : "1. Donald Trump \n 2.Abuja\n 3\nAbidjan",
	ans : 1
		
	}

		]

	function getquiz(quiz){
			let score = 0
		for(let questionNumber = 0;  questionNumber < quiz.length; questionNumber++){
			for (const qustion in quiz[questionNumber]){
				//if(qustion =='ans'){
					//console.log(quiz[questionNumber])}
					}
				userResponse = Number(prompt('Enter your ans'))
				if(userResponse == quiz[questionNumber].ans){
				console.log("Correct") 
				score++
				
				}else console.log('Incorrect')
			
				}
			return `You got ${score} out of ${quiz.length}`
		}

const prompt = require('prompt-sync')()
console.log(getquiz(quix))

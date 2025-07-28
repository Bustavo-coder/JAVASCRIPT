"use strict"
	const prompt = require('prompt-sync')();
const getScore = () => {
	let scoreInput = prompt("Enter Student Score\n")
	 let scoreInput2 = Number(scoreInput)
	while (scoreInput2  < 0 ||scoreInput2  > 100){
	console.log("Invalid Score, Enter a score From 0 to 100")
	scoreInput = prompt("Enter Student Score\n")
	scoreInput2 = Number(scoreInput);
		}
	
	return scoreInput2
}

function calcGrade (score){
	let grade = 'h'
	if(score >= 80) grade = "A"
	else if(score > 65 && score <= 79) grade = 'B'
	else if ( score > 55 && score <= 64 ) grade = "C"
	else if(score > 45 && score <= 54) grade = "D"
	else if(score > 40 && score <= 44) grade = "E"
	// else grade = "F"
	
	return grade;

}

const getFeedback = (userGrade) => {
	let gradeFeedback = 't'
		if(userGrade == 'A') gradeFeedback = "Excellent performance";
		else if(userGrade== 'B')  gradeFeedback = "Good Job Keep Improving";
		else if (userGrade == 'C')  gradeFeedback = "Fair Effort, Keep Working On Your Self";
		else if (userGrade == 'D')gradeFeedback = "You Can Do Better Don't give up";
		else if (userGrade == 'E')  gradeFeedback = "Needs Improvement, Ask for help";
		else  gradeFeedback = "You Are a Failure, you are supposed to be a dinner man Atorike";
		return gradeFeedback;

}

const main = () => {
	 const scoreVariable = getScore()
	console.log(scoreVariable)
	const gradeVariable = calcGrade(scoreVariable)
	console.log(gradeVariable)
	const feedbackVariable = getFeedback(gradeVariable)
	console.log(feedbackVariable)

}

main()

const userResponse = prompt("Do You Wish to try a new Score(yes or no)\n")
	while(userResponse == "yes"){
		 main()
	userResponse = prompt("Do You Wish to try a new Score(yes or no)")
	}

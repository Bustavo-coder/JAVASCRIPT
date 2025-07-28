function getPassword(userPassword){
	return userPassword;

	}

const checkComplexity = (password) => {
		let alphaTotal = 0;
		let numbTotal = 0;
	for(let i = 0; i < password.length; i++){
		if(typeof password.charAt(i) == Number) numbTotal++	
		else alphaTotal++;
	}
	console.log(`Number of Alphabetic charcters ${alphaTotal}\nand Number of Numeric Charcters is  ${ numbTotal}`)
	return alphaTotal;
	}

const evaluateStrenght = (chaAlpaTotal,charNumTotal) =>{
		let feedBack = ""
	if(chaAlpaTotal > 8 && charNumTotal == 0){
		feedBack = "Strong" 
	}else if(chaAlpaTotal <= 8 && chaAlpaTotal > 5 && charNumTotal == 0){
			feedBack = "Moderate" 
	}
	else feedBack = "Weak"  
	console.log(`Password Length : ${feedBack}`)
	return feedBack;
		}

const mainFunction = () => {
	const passwordStore = getPassword("Adeyemi2004")
	const alphaTotals = checkComplexity (passwordStore)
	evaluateStrenght(alphaTotals , (passwordStore.length - 	alphaTotals))
	
	
	}
mainFunction()
console.log("Try Another Score (yes/no)")
let userResponse = "Yes"
while(userResponse == "No") mainFunction()
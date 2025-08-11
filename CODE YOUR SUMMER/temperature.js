function tempcheck(temp){
		if(temp > 30) return 'Hot!'
		else if(temp >= 15 && temp < 30) return 'Nice!'
		else return 'cold!'
	}

console.log(tempcheck(12))
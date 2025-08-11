function gradeCaluculator(scores){
	if(scores >= 90) return 'A'
	else if(scores >= 80 && scores <= 90) return 'B'
	else if(scores >= 70 && scores <= 79) return 'C'
	else if(scores < 70) return 'F'
	}

console.log(gradeCaluculator(50))
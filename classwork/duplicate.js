function getDuplicate(arrayValues){

	const noDuplicate = [];
	for(let count = 0; count < arrayValues.length; count++){
			let check = 0
		for(let counter = 0; counter < arrayValues.length;counter++){
				if(count == counter)continue
				if(arrayValues[count] === arrayValues[counter])check++
				}
		if(check < 1) noDuplicate.push(arrayValues[count])
			}
		
	return noDuplicate

}

const values = [2,3,4,2,5,6,2,7,8,9]
console.log(getDuplicate(values));
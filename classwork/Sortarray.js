function joinarray(arrayValues1,arrayValues2){
		let storeNumber = 0
		let totals = arrayValues1
		let totalLen =  arrayValues1.length + arrayValues2.length
	for(let index = arrayValues1.length; index < totalLen;index++){
		totals[index] = arrayValues2[storeNumber]
		storeNumber++
}

	for(let count = 0;count < totals.length-1;count++){
			for(let counter = count; counter < totals.length;counter++){
				if(totals[count] > totals[counter]){
					storeNumber = totals[counter]
					totals[counter] = totals[count]
					totals[count] = storeNumber
					}

			}
		}
	
	return totals
}
array1 = [2,3,4,5,6, 8, 90, 43, 89, 001, 34, 67]
array2 = [10,11,12,15,16]
console.log(joinarray(array1,array2,));




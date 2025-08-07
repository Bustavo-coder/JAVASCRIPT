const cleanbugArray = (oldArray) =>{
	cleanedArray = []
	
	for(let count = 0; count < oldArray.length;count++){
			if(oldArray[count] < 6 && oldArray[count]  > 0){
				cleanedArray.push(oldArray[count])
					}
			
			}
	return cleanedArray;

	}

console.log(cleanbugArray([0,1,2,3,4,5,6,7,25,1000,1,-1,-2,-3]))
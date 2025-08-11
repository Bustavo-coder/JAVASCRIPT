const numPattern = (range) =>{
	for(let count = 1; count <= range;count++){
			let sum = ""
	for(let counter = 1; counter < count;counter++) sum += counter
		console.log(sum)

	}
}
numPattern(10)
let number = 0
for(let count = 0;count < 6;count++){
	line = ""
	for(let counter = 0; counter < count; counter++){
		
		number++

		if(number < 9) line+= " "
		if(number == 9) line+= " "
		line += number + " "
	}
		console.log(line)
}
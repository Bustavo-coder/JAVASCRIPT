number_list = [2,3,4,5,2,8,9,10,4,10,2,10,13,14,16]
newArr = []

for numb in range(0,len(number_list)):
	check = 0
	for innernumber in  range(0,len(number_list)):
		if numb == innernumber : continue
		if number_list[numb] == number_list[innernumber]: check+= 1

	if check < 1 : newArr.append(number_list[numb])
print(newArr)
		
		
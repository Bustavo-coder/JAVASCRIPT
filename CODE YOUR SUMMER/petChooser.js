const prompt = require('prompt-sync')()
function getPet(animal) {
		if(animal === 'dog') return ('Woof! Dogs Are Awesome')
		else return`${pet} are Cool choice, but i love dogs!`
	}

const pet = prompt("Pick Your Favorite Pet ").toLowerCase()
console.log(getPet(pet))
const prompt = require('prompt-sync')()
const pet = prompt("Pick Your Favorite Pet ").toLowerCase()

if(pet == 'dog')console.log('Woof! Dogs Are Awesome')
else console.log(`${pet} are Cool choice, but i love dogs!`)

const prompt = require('prompt-sync')()
let name = prompt("Enter Your Name ")
name = name.toLowerCase()

if(name == "alex") console.log(`Hello, Freind!`)
else console.log('Hi stranger!')



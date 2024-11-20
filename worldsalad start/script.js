let userName = prompt('whats your name?')
let userAge = prompt('whats your age?')
console.log (userName)
console.log (userAge)


let mystory=`hello, ${userName}, How are you doing today? How does it feel to be ${userAge} years old???`
console.log(mystory)

document.getElementById('story').innerHTML=mystory;
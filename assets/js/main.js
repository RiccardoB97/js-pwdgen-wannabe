// Ask user name
var userName = prompt("What's your name?")
// Ask user surname
var userSurname = prompt("What's your surname?")
// Ask user favourite color
var favColor = prompt("What's your favorite color?")
// Print in HTML: name+surname+color+21
var finalPassword = userName + userSurname + favColor + "21"
document.getElementById('password').innerHTML = finalPassword.toLowerCase()
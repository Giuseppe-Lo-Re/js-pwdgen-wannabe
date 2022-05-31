
// Ask to user him name
const userName = prompt("qual'è il tuo nome?")

// test
console.log(userName)


// Ask to user him surname
const userSurname = prompt("qual'è il tuo cognome?")

// test
console.log(userSurname)


// Ask to user him preferred color
const userColor = prompt("qual'è il tuo colore preferito?")

// test
console.log(userColor)


// Password generation: name + surname + preferred color + 21
const userPassword = userName + userSurname + userColor + 21

// test
console.log(userPassword)


// User Message
const userMessage = 'La tua password è ' + userName + userSurname + userColor + 21;

// test
console.log(userMessage)


// Write in HTML User Message
document.getElementById('password').innerHTML = userPassword;
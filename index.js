//A var that stores the name of a user via a prompt.
var name = prompt("What is your name?");

var newName = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();

alert("Hello, " + newName + "! Welcome to JavaScript programming!");
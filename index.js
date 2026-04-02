//A var that stores the name of a user via a prompt.
var name = prompt("What is your name?");

//Isolating the first characters
var firstChar = name.slice(0,1);

//First char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

//Isolating the remaining characters
var secondChar = name.slice(1,name.length);

//Ensuring the remaining char of the name remains in small letters
var lowerCaseSecondChar = secondChar.toLowerCase();

//capitalised version of name using concatenation
var capitalisedName = upperCaseFirstChar + lowerCaseSecondChar

alert("Welcome " + capitalisedName + "!");

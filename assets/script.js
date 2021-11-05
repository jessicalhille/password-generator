// Assignment code here
var lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialOptions = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to contain?"); 
    if (passwordLength === "" || passwordLength === null) {
      window.alert("You need to provide a valid number! Please try again.");
      return generatePassword();
    }
    
    if (passwordLength >= 8 && passwordLength <= 128) {
      var lowercase = confirm("Click OK to include lowercase characters.");
      var uppercase = confirm("Click OK to include uppercase characters.");
      var numeric = confirm("Click OK to include numeric characters.");
      var special = confirm("Click OK to include special characters.");    
    } else {
      window.alert("You must type a number between 8 and 128! Please try again.");
      return generatePassword();
    }

    if (lowercase === false && uppercase === false && numeric === false && special === false) {
      window.alert("You must choose at least one option! Please try again.");
      return generatePassword();
    }

  var passwordCharacters = []
    if (lowercase === true) {
      passwordCharacters = passwordCharacters.concat(lowercaseOptions)
    }
    if (uppercase === true) {
      passwordCharacters = passwordCharacters.concat(uppercaseOptions)
    }
    if (numeric === true) {
      passwordCharacters = passwordCharacters.concat(numberOptions)
    }
    if (special === true) {
      passwordCharacters = passwordCharacters.concat(specialOptions)
    }

  var password = ""
    for (var i = 0; i < passwordLength; i++) {
      password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }

  return password;
} 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

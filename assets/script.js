// Assignment code here
var lowercaseOptions = "abcdefghijklmnopqrstuvwxyz";
var uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberOptions = "0123456789";
var specialOptions = "!@#$%^&*()_-+=;:/?.,<>"

function getLength() {
  var passwordLength = window.prompt("How many characters would you like your password to contain?"); 
    if (passwordLength === "" || passwordLength === null) {
      window.alert("You need to provide a valid number! Please try again.");
      return getLength();
    }
    if (passwordLength >= 8 && passwordLength <= 128) {
      console.log(passwordLength)
    } else {
      window.alert("You must type a number between 8 and 128! Please try again.")
      return getLength();
    }
};

  // b. lowercase, uppercase, numeric, special characters
function getLowercase() {
  var lowercaseLetters = window.prompt("Click OK to confirm including lowercase letters.");
    if (lowercaseLetters === true) {
      return lowercaseLetters;
    } else (lowercaseLetters === false) {
      return lowercaseLetters;
    }
};

function getUppercase() {
  var uppercaseLetters = window.prompt("Click OK to confirm including uppercase letters.");
    if (uppercaseLetters === true) {
      return uppercaseLetters;
    } else (uppercaseLetters === false) {
      return uppercaseLetters;
    };
};

function getNumeric() {
  var numericCharacters = window.prompt("Click OK to confirm including numberic characters.");
    if (numericCharacters === true) {
      return numericCharacters;
    } else {};
};

  var specialCharacters = window.prompt("Click OK to confirm including special characters.");
    if (specialCharacters) {
      console.log(specialCharacters);
    } else {};

// 2. validate the input

// 3. generate password based on criteria



// 4. display generated password on the page
  return "generated password will go here";
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

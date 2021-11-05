// Assignment code here
const lowercaseOptions = "abcdefghijklmnopqrstuvwxyz";
const uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberOptions = "0123456789";
const specialOptions = "!@#$%^&*()_-+=;:/?.,<>"

function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to contain?"); 
    if (passwordLength === "" || passwordLength === null) {
      window.alert("You need to provide a valid number! Please try again.");
      return generatePassword();
    }
    if (passwordLength >= 8 && passwordLength <= 128) {
      console.log(passwordLength)
    } else {
      window.alert("You must type a number between 8 and 128! Please try again.")
      return generatePassword();
    }

  var lowercase = confirm("Click OK to include lowercase characters.")
    if (lowercase === true) {
      console.log(lowercase);
    }

  var uppercase = confirm("Click OK to include uppercase characters.")
    if (uppercase === true) {
      console.log(uppercase);
    }
  
  var numericChar = confirm("Click OK to include numeric characters.")
    if (numericChar === true) {
      console.log(numericChar);
    }

  var specialChar = confirm("Click OK to include special characters.")
    if (specialChar === true) {
      console.log(specialChar);
    }

  // b. lowercase, uppercase, numeric, special characters

// 2. validate the input

// 3. generate password based on criteria

// 4. display generated password on the page


  return "password here";
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

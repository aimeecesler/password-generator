// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  // TODO: GENERATE A REAL PASSWORD AND REPLACE THE RETURN STRING WITH A REAL PASSWORD
  // return "THIS IS NOT MY FINAL PASSWORD"

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// PSUEDO CODE
// User presses button on page
// Prompt: How many characters would you like your password to contain (must be a number between 8 and 128)
// If user response is within the parameters, move on to next step, if not give error message and end prompts.
// Ask user if they want lowercase letters in their password?
// Ask user if they want uppercase letters in their password?
// Ask user if they want numbers in their password?
// Ask user if they want special characters in their password?
// If user answers yes to any of the above criteria, then include it in the password.
// If user answers no to all of the above criteria, display error message that they must pick at least on of those options.
// Generate password using parameters selected by user.
// display password (return)

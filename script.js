// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // TODO: GENERATE A REAL PASSWORD AND REPLACE THE RETURN STRING WITH A REAL PASSWORD

  var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers =  [1,2,3,4,5,6,7,8,9];
  var specialCharacters = ["!","@","#","$","%","&","*","?","+","-","/"];

  var characterOptions = [];
  var password = ""

  var passwordLength = prompt(
    "How many characters would you like your password to contain? (must be a number between 8 and 128)"
  );

  if (passwordLength > 128 || passwordLength < 8) {
    alert("Invalid Entry: Password must be between 8 and 128 characters.");
    // TODO: how do I make it stop here and reset if they put in an invalid entry?
  } else console.log("Password Length: " + passwordLength);

  var containsLowercase = confirm(
    "Would you like your password to contain lowercase letters?"
  );
  console.log("Contains lowercase: " + containsLowercase);

  var containsUppercase = confirm(
    "Would you like your password to contain UPPERCASE letters?"
  );
  console.log("Contains uppercase: " + containsUppercase);

  var containsNumbers = confirm(
    "Would you like your password to contain numbers?"
  );
  console.log("Contains numbers: " + containsNumbers);

  var containsSpecialCharacters = confirm(
    "Would you like your password to contain special characters?"
  );
  console.log("Contains special characters: " + containsSpecialCharacters);

  if (
    containsLowercase === false &&
    containsUppercase === false &&
    containsNumbers === false &&
    containsSpecialCharacters === false
  ) {
    alert(
      "Error: Your password must contain at least one of the following - lowercase letters, uppercase letters, numbers, special characters"
    );
    // TODO: how do I make it stop here and reset if they put in an invalid entry?
  } 
  if (containsLowercase === true) {
    characterOptions = characterOptions.concat(alphabetLower)
    console.log(characterOptions);
  } 
  if (containsUppercase === true) {
    characterOptions = characterOptions.concat(alphabetUpper)
    console.log(characterOptions);
  } 
  if (containsNumbers === true) {
    characterOptions = characterOptions.concat(numbers)
    console.log(characterOptions);
  } 
  if (containsSpecialCharacters === true) {
    characterOptions = characterOptions.concat(specialCharacters)
    console.log(characterOptions);
  } 

  // for (var i = 0; i < passwordLength; i++){
  // var char = Math.floor(Math.random() * characterOptions.length);
  // password += characterOptions.charAt(char);
  // console.log(password);
  // }

  // return ;
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
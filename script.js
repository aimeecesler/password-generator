// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Funtion to Generate a Password
function generatePassword() {

  // VARIABLES TO DEFINE
  // Lowercase alphabet array
  var alphabetLower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Uppercase alphabet array
  var alphabetUpper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "&",
    "*",
    "?",
    "+",
    "-",
    "/",
  ];

  var characterOptions = [];
  var password = "";

// First prompt when user pushes the button, user must enter a valid number or it will yield an error message
// if valid number is entered variable is set to that number
  var passwordLength = prompt(
    "How many characters would you like your password to contain? (must be a number between 8 and 128)"
  );

  // if an invalid number is entered, the below message will display and function will restart
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Invalid Entry: Password must be between 8 and 128 characters.");
    generatePassword();
  } else {

    // Second question, user responds and sets variable to true or false
    var containsLowercase = confirm(
      "Would you like your password to contain lowercase letters?"
    );

    // Third question, user responds and sets variable to true or false
    var containsUppercase = confirm(
      "Would you like your password to contain UPPERCASE letters?"
    );

    // Fourth question, user responds and sets variable to true or false
    var containsNumbers = confirm(
      "Would you like your password to contain numbers?"
    );

    // Fifth question, user responds and sets variable to true or false
    var containsSpecialCharacters = confirm(
      "Would you like your password to contain special characters?"
    );

    // after all questions are answered, validate that there are enough parameters to continue
    if (
      containsLowercase === false &&
      containsUppercase === false &&
      containsNumbers === false &&
      containsSpecialCharacters === false
    ) {

    // if questions 2-5 were all answered no, then an error message will be given and the function will restart
      alert(
        "Error: Your password must contain at least one of the following - lowercase letters, uppercase letters, numbers, special characters"
      );
      generatePassword();
      // if there are enough parameters chosen, add the desired password parameters to an array named characterOptions
    } else {
      // if lowercase is selected, add lowercase to the array
      if (containsLowercase === true) {
        characterOptions = characterOptions.concat(alphabetLower);
      }
      // if uppercase is selected, add uppercase to the array
      if (containsUppercase === true) {
        characterOptions = characterOptions.concat(alphabetUpper);
      }
      // if numbers are selected, add numbers to the array
      if (containsNumbers === true) {
        characterOptions = characterOptions.concat(numbers);
      }
      // if special characters are selected, add special characters to the array
      if (containsSpecialCharacters === true) {
        characterOptions = characterOptions.concat(specialCharacters);
      }

      // for the number of characters selected by the user, chose a random character at location char from the array
      // at the end of the for loop, assign the string of characters to password
      for (var i = 0; i < passwordLength; i++) {
        var char = Math.floor(Math.random() * characterOptions.length);
        password += characterOptions[char];
      }
    }
  }

  // return password to its designated location
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// variables for password critera
var lowercase = "a" + "b" + "c" + "d" + "e" + "f" + "g" + "h" + "i" + "j" + "k" + "l" + "m" + "n" + "o" + "p" + "q" + "r" + "s" + "t" + "u" + "v" + "w" + "x" + "y" + "z";
var uppercase = "A" + "B" + "C" + "D" + "E" + "F" + "G" + "H" + "I" + "J" + "K" + "L" + "M" + "N" + "O" + "P" + "Q" + "R" + "S" + "T" + "U" + "V" + "W" + "X" + "Y" + "Z";
var symbols = "!" + "@" + "#" + "$" + "%" + "^" + "&" + "*" + "(" + ")";
var numbers = "1" + "2" + "3" + "4" + "5" + "6" + "7" + "8" + "9" + "0";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener ("click", writePassword);

// function so that when the button is clicked prompts start
function generatePassword() {
  alert("Must contain lower or uppercase letters, numbers and/or symbols");
  alert("Length must be between 8 - 128 characters");
  alert("You must select length and which characters to include");

// Gives option to continue or cancel
  var userSelect = confirm("Do you wish to continue?");
// If user cancels, message is displayed then prompts stop
  if (!userSelect) {
    alert("See you next time!");
    return;
  }
// Prompt for user to input how long they would like the password to be
  var passwordLength = prompt("How many characters do you want in your password?\nMinimum 8 characters - maximum 128 characters");
// Condition so that if password is in between min and max, alert confirmation shows user choice then asks if they would like to include uppercase letters
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("You chose: " + passwordLength);
    var uppercaseConfirm = confirm("Which criteria would you like to include in your password?\nUppercase Letters?\nOk to confirm");
  // If user enters invalid numbers, message is displayed and exits prompts
  } else {
    alert("Please start again");
    return;
  }
// If user confirms to include uppercase, message confirms they would like to include uppercase then prompts to ask if they would like to include lowercase
  if (uppercaseConfirm) {
      alert("You chose to INCLUDE uppercase letters");
        var lowercaseConfirm = confirm("Lowercase letters?\nOk to confirm");
  // If user chooses to exclude uppercase, message is displayed showing selection and then prompts to ask if they would like to include lowercase
  } else {
    alert("You chose to EXCLUDE uppercase letters")
    var lowercaseConfirm = confirm("Lowercase letters?\nOk to confirm");
  } 
// If user confirms to include lowercase, message confirms they would like to include lowercase then prompts to ask if they would like to include numbers
  if (lowercaseConfirm) {
      alert("You chose to INCLUDE lowercase letters");
        var numbersConfirm = confirm("Numbers?\nOk to confirm");
  // If user chooses to exclude lowercase, message is displayed showing selection and then prompts to ask if they would like to include numbers
  } else {
    alert("You chose to EXCLUDE lowercase letters")
    var numbersConfirm = confirm("Numbers?\nOk to confirm");
  } 
// If user confirms to include numbers, message confirms they would like to include numbers then prompts to ask if they would like to include symbols
  if (numbersConfirm) {
      alert("You chose to INCLUDE numbers");
        var symbolsConfirm = confirm("Symbols?\nOk to confirm");
  // If user chooses to exclude numbers, message is displayed showing selection and then prompts to ask if they would like to include symbols
  }  else {
    alert("You chose to EXCLUDE numbers")
    var symbolsConfirm = confirm("Symbols?\nOk to confirm");
  } 
  // variable with empty string for password when generated at random
  var passwordRandom = "";
  // If user chooses to include symbols, message is displayed showing selection
  if (symbolsConfirm) {
      alert("You chose to INCLUDE symbols");
    // If user chooses to exclude symbols, message is displayed showing selection
  } else {
    alert("You chose to EXCLUDE symbols")
  }
// Condition for when user chooses to include uppercase, lowercase, numbers and symbols, variable created for all characters
  if (uppercaseConfirm && lowercaseConfirm && numbersConfirm && symbolsConfirm) {
    var allCharacters = lowercase + uppercase + numbers + symbols;
  // Message displays to confirm # of characters chosen and which criteria was included
      alert("You chose: " + passwordLength + " characters, uppercase & lowercase letters, numbers and symbols");
      // Chooses letters at random from selected criteria and repeated to reach users selected password length
        for (var i = 0; i < passwordLength; i++) {
          var indexAll = Math.floor(Math.random() * allCharacters.length);
          passwordRandom += allCharacters[indexAll];
        }
    // Sends randomized generated password to be displayed in text input box
    return passwordRandom;
  // Condition for when user chooses to include uppercase, lowercase and numbers, variable created for those 3
  } else if (uppercaseConfirm && lowercaseConfirm && numbersConfirm && !symbolsConfirm) {
    var uppercaseLowercaseNumbers = uppercase + lowercase + numbers;
    // Message displays to confirm # of characters chosen and which criteria was included
      alert("You chose: " + passwordLength + " characters, uppercase & lowercase letters and numbers");
      // Chooses letters at random from selected criteria and repeated to reach users selected password length
        for(var i = 0; i < passwordLength; i++) {
          var indexUpperLowerNumb = Math.floor(Math.random() * uppercaseLowercaseNumbers.length);
          passwordRandom += uppercaseLowercaseNumbers[indexUpperLowerNumb];
        }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
    // Condition for when user chooses to include uppercase, lowercase and symbols, variable created for those 3
  } else if (uppercaseConfirm && lowercaseConfirm && !numbersConfirm && symbolsConfirm) {
    var uppercaseLowercaseSymbols = uppercase + lowercase + symbols;
    // Message displays to confirm # of characters chosen and which criteria was included
      alert("You chose: " + passwordLength + " characters, uppercase & lowercase letters and symbols");
      // Chooses letters at random from selected criteria and repeated to reach users selected password length
        for(var i = 0; i < passwordLength; i++) {
          var indexUpperLowerSym = Math.floor(Math.random() * uppercaseLowercaseSymbols.length);
          passwordRandom += uppercaseLowercaseSymbols[indexUpperLowerSym];
        }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
      // Condition for when user chooses to include uppercase, numbers and symbols, variable created for those 3
  } else if (uppercaseConfirm && !lowercaseConfirm && numbersConfirm && symbolsConfirm) {
    var uppercaseNumbersSymbols = uppercase + numbers + symbols;
    // Message displays to confirm # of characters chosen and which criteria was included
      alert("You chose: " + passwordLength + " characters, uppercase letters, numbers and symbols");
      // Chooses letters at random from selected criteria and repeated to reach users selected password length
        for(var i = 0; i < passwordLength; i++) {
          var indexUpperNumbSym = Math.floor(Math.random() * uppercaseNumbersSymbols.length);
          passwordRandom += uppercaseNumbersSymbols[indexUpperNumbSym];
        }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
      // Condition for when user chooses to include lowercase, numbers and symbols, variable created for those 3
  } else if (!uppercaseConfirm && lowercaseConfirm && numbersConfirm && symbolsConfirm) {
    var lowercaseNumbersSymbols = lowercase + numbers + symbols;
    // Message displays to confirm # of characters chosen and which criteria was included
      alert("You chose: " + passwordLength + " characters, lowercase letters, numbers and symbols");
      // Chooses letters at random from selected criteria and repeated to reach users selected password length
        for(var i = 0; i < passwordLength; i++) {
          var indexLowerNumbSym = Math.floor(Math.random() * lowercaseNumbersSymbols.length);
          passwordRandom += lowercaseNumbersSymbols[indexLowerNumbSym];
        }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
      // Condition for when user chooses to include uppercase and lowercase, variable created for those 2
  } else if (uppercaseConfirm && lowercaseConfirm && !numbersConfirm && !symbolsConfirm) {
    var uppercaseLowercase = uppercase + lowercase;
    // Message displays to confirm # of characters chosen and which criteria was included
      alert("You chose: " + passwordLength + " characters and uppercase & lowercase letters");
      // Chooses letters at random from selected criteria and repeated to reach users selected password length
        for(var i = 0; i < passwordLength; i++) {
          var indexUpperLower = Math.floor(Math.random() * uppercaseLowercase.length);
          passwordRandom += uppercaseLowercase[indexUpperLower];
        }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
       // Condition for when user chooses to include uppercase and numbers, variable created for those 2
  } else if (uppercaseConfirm && !lowercaseConfirm && numbersConfirm && !symbolsConfirm) {
    var uppercaseNumbers = uppercase + numbers;
    // Message displays to confirm # of characters chosen and which criteria was included
      alert("You chose: " + passwordLength + " characters, uppercase letters and numbers");
      // Chooses letters at random from selected criteria and repeated to reach users selected password length
        for(var i = 0; i < passwordLength; i++) {
          var indexUpperNumb = Math.floor(Math.random() * uppercaseNumbers.length);
          passwordRandom += uppercaseNumbers[indexUpperNumb];
        }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
       // Condition for when user chooses to include uppercase and symbols, variable created for those 2
  } else if (uppercaseConfirm && !lowercaseConfirm && !numbersConfirm && symbolsConfirm) {
    var uppercaseSymbols = uppercase + symbols;
    // Message displays to confirm # of characters chosen and which criteria was included
      alert("You chose: " + passwordLength + " characters, uppercase letters and symbols");
    // Chooses letters at random from selected criteria and repeated to reach users selected password length
        for(var i = 0; i < passwordLength; i++) {
          var indexUpperSym = Math.floor(Math.random() * uppercaseSymbols.length);
          passwordRandom += uppercaseSymbols[indexUpperSym];
        }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
       // Condition for when user chooses to include numbers and lowercase, variable created for those 2
  } else if (!uppercaseConfirm && lowercaseConfirm && numbersConfirm && !symbolsConfirm) {
    var lowercaseNumbers = lowercase + numbers;
    // Message displays to confirm # of characters chosen and which criteria was included
      alert("You chose: " + passwordLength + " characters, lowercase letters and numbers");
      // Chooses letters at random from selected criteria and repeated to reach users selected password length
        for(var i = 0; i < passwordLength; i++) {
          var indexLowerNumb = Math.floor(Math.random() * lowercaseNumbers.length);
          passwordRandom += lowercaseNumbers[indexLowerNumb];
        }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
       // Condition for when user chooses to include symbols and lowercase, variable created for those 2
  } else if (!uppercaseConfirm && lowercaseConfirm && !numbersConfirm && symbolsConfirm) {
    var lowercaseSymbols = lowercase + symbols;
    // Message displays to confirm # of characters chosen and which criteria was included
      alert("You chose: " + passwordLength + " characters, lowercase letters and symbols");
      // Chooses letters at random from selected criteria and repeated to reach users selected password length
        for(var i = 0; i < passwordLength; i++) {
          var indexLowerSym = Math.floor(Math.random() * lowercaseSymbols.length);
          passwordRandom += lowercaseSymbols[indexLowerSym];
        }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
       // Condition for when user chooses to include numbers and symbols, variable created for those 2
  } else if (!uppercaseConfirm && !lowercaseConfirm && numbersConfirm && symbolsConfirm) {
    var numbersSymbols = numbers + symbols;
    // Message displays to confirm # of characters chosen and which criteria was included
      alert("You chose: " + passwordLength + " characters, numbers and symbols");
      // Chooses letters at random from selected criteria and repeated to reach users selected password length
        for(var i = 0; i < passwordLength; i++) {
          var indexNumbSym = Math.floor(Math.random() * numbersSymbols.length);
          passwordRandom += numbersSymbols[indexNumbSym];
        }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
       // Condition for when user chooses to include uppercase only
  } else if (uppercaseConfirm && !lowercaseConfirm && !numbersConfirm && !symbolsConfirm) {
    // Message displays to confirm # of characters chosen and which criteria was included
    alert("You chose: " + passwordLength + " characters and uppercase letters only");
    // Chooses letters at random from selected criteria and repeated to reach users selected password length
      for(var i = 0; i < passwordLength; i++) {
        var indexUpper = Math.floor(Math.random() * uppercase.length);
        passwordRandom += uppercase[indexUpper];
      }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
      // Condition for when user chooses to include lowercase only
  } else if (!uppercaseConfirm && lowercaseConfirm && !numbersConfirm && !symbolsConfirm) {
    // Message displays to confirm # of characters chosen and which criteria was included
    alert("You chose: " + passwordLength + " characters and lowercase letters only")
    // Chooses letters at random from selected criteria and repeated to reach users selected password length
      for(var i = 0; i < passwordLength; i++) {
        var indexLower = Math.floor(Math.random() * lowercase.length);
        passwordRandom += lowercase[indexLower];
      }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
      // Condition for when user chooses to include numbers only
  } else if (!uppercaseConfirm && !lowercaseConfirm && numbersConfirm && !symbolsConfirm) {
    // Message displays to confirm # of characters chosen and which criteria was included
    alert("You chose: " + passwordLength + " characters and numbers only");
    // Chooses letters at random from selected criteria and repeated to reach users selected password length
      for(var i = 0; i < passwordLength; i++) {
        var indexNumb = Math.floor(Math.random() * numbers.length);
        passwordRandom += numbers[indexNumb];
      }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
      // Condition for when user chooses to include symbols only
  } else if (!uppercaseConfirm && !lowercaseConfirm && !numbersConfirm && symbolsConfirm) {
    // Message displays to confirm # of characters chosen and which criteria was included
    alert("You chose: " + passwordLength + " characters and symbols only");
    // Chooses letters at random from selected criteria and repeated to reach users selected password length
      for(var i = 0; i < passwordLength; i++) {
        var indexSym = Math.floor(Math.random() * symbols.length);
        passwordRandom += symbols[indexSym];
      }
      // Sends randomized generated password to be displayed in text input box
      return passwordRandom;
    // Displays message when user does not choose any of the criteria and exits prompts
  } else {
    alert("You must choose at least one of the following\nUppercase letters, Lowercase letters, Numbers and/or Symbols\nPlease start again");
    return;
  }  
}


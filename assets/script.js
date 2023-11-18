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

function generatePassword() {
  alert("Must contain lower or uppercase letters, numbers and/or symbols");
  alert("Length must be between 8 - 128 characters");
  alert("You must select length and which characters to include");

  var userSelect = confirm("Do you wish to continue?");

  if (!userSelect) {
    alert("See you next time!");
    return;
  }

  var passwordLength = prompt("How many characters do you want in your password?\nMinimum 8 characters - maximum 128 characters");

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("You chose: " + passwordLength);
    var uppercaseConfirm = confirm("Which criteria would you like to include in your password?\nUppercase Letters?\nOk to confirm");
  } else {
    alert("Please start again");
    return;
  }

  if (uppercaseConfirm) {
      alert("You chose to INCLUDE uppercase letters");
        var lowercaseConfirm = confirm("Lowercase letters?\nOk to confirm");
  } else {
    alert("You chose to EXCLUDE uppercase letters")
    var lowercaseConfirm = confirm("Lowercase letters?\nOk to confirm");
  } 

  if (lowercaseConfirm) {
      alert("You chose to INCLUDE lowercase letters");
        var numbersConfirm = confirm("Numbers?\nOk to confirm");
  } else {
    alert("You chose to EXCLUDE lowercase letters")
    var numbersConfirm = confirm("Numbers?\nOk to confirm");
  } 

  if (numbersConfirm) {
      alert("You chose to INCLUDE numbers");
        var symbolsConfirm = confirm("Symbols?\nOk to confirm");
  }  else {
    alert("You chose to EXCLUDE numbers")
    var symbolsConfirm = confirm("Symbols?\nOk to confirm");
  } 
  
  var passwordRandom = "";
  
  if (symbolsConfirm) {
      alert("You chose to INCLUDE symbols");
  } else {
    alert("You chose to EXCLUDE symbols")
  }

  var passwordRandom = "";

  if (uppercaseConfirm && lowercaseConfirm && numbersConfirm && symbolsConfirm) {
    var allCharacters = lowercase + uppercase + numbers + symbols;
      alert("You chose: " + passwordLength + " characters, uppercase & lowercase letters, numbers and symbols");
        for (var i = 0; i < passwordLength; i++) {
          var indexAll = Math.floor(Math.random() * allCharacters.length);
          passwordRandom += allCharacters[indexAll];
        }
    return passwordRandom;
  } else if (uppercaseConfirm && lowercaseConfirm && numbersConfirm && !symbolsConfirm) {
    var uppercaseLowercaseNumbers = uppercase + lowercase + numbers;
      alert("You chose: " + passwordLength + " characters, uppercase & lowercase letters and numbers")
        for(var i = 0; i < passwordLength; i++) {
          var indexUpperLowerNumb = Math.floor(Math.random() * uppercaseLowercaseNumbers.length);
          passwordRandom += uppercaseLowercaseNumbers[indexUpperLowerNumb];
        }
      return passwordRandom;
  } else if (uppercaseConfirm && lowercaseConfirm && !numbersConfirm && symbolsConfirm) {
    var uppercaseLowercaseSymbols = uppercase + lowercase + symbols;
      alert("You chose: " + passwordLength + " characters, uppercase & lowercase letters and symbols");
        for(var i = 0; i < passwordLength; i++) {
          var indexUpperLowerSym = Math.floor(Math.random() * uppercaseLowercaseSymbols.length);
          passwordRandom += uppercaseLowercaseSymbols[indexUpperLowerSym];
        }
      return passwordRandom;
  } else if (uppercaseConfirm && !lowercaseConfirm && numbersConfirm && symbolsConfirm) {
    var uppercaseNumbersSymbols = uppercase + numbers + symbols;
      alert("You chose: " + passwordLength + " characters, uppercase letters, numbers and symbols");
        for(var i = 0; i < passwordLength; i++) {
          var indexUpperNumbSym = Math.floor(Math.random() * uppercaseNumbersSymbols.length);
          passwordRandom += uppercaseNumbersSymbols[indexUpperNumbSym];
        }
      return passwordRandom;
  } else if (!uppercaseConfirm && lowercaseConfirm && numbersConfirm && symbolsConfirm) {
    var lowercaseNumbersSymbols = lowercase + numbers + symbols;
      alert("You chose: " + passwordLength + " characters, lowercase letters, numbers and symbols");
        for(var i = 0; i < passwordLength; i++) {
          var indexLowerNumbSym = Math.floor(Math.random() * lowercaseNumbersSymbols.length);
          passwordRandom += lowercaseNumbersSymbols[indexLowerNumbSym];
        }
      return passwordRandom;
  } else if (uppercaseConfirm && lowercaseConfirm && !numbersConfirm && !symbolsConfirm) {
    var uppercaseLowercase = uppercase + lowercase;
      alert("You chose: " + passwordLength + " characters and uppercase & lowercase letters");
        for(var i = 0; i < passwordLength; i++) {
          var indexUpperLower = Math.floor(Math.random() * uppercaseLowercase.length);
          passwordRandom += uppercaseLowercase[indexUpperLower];
        }
      return passwordRandom;
  } else if (uppercaseConfirm && !lowercaseConfirm && numbersConfirm && !symbolsConfirm) {
    var uppercaseNumbers = uppercase + numbers;
      alert("You chose: " + passwordLength + " characters, uppercase letters and numbers");
        for(var i = 0; i < passwordLength; i++) {
          var indexUpperNumb = Math.floor(Math.random() * uppercaseNumbers.length);
          passwordRandom += uppercaseNumbers[indexUpperNumb];
        }
      return passwordRandom;
  } else if (uppercaseConfirm && !lowercaseConfirm && !numbersConfirm && symbolsConfirm) {
    var uppercaseSymbols = uppercase + symbols;
      alert("You chose: " + passwordLength + " characters, uppercase letters and symbols")
        for(var i = 0; i < passwordLength; i++) {
          var indexUpperSym = Math.floor(Math.random() * uppercaseSymbols.length);
          passwordRandom += uppercaseSymbols[indexUpperSym];
        }
      return passwordRandom;
  } else if (!uppercaseConfirm && lowercaseConfirm && numbersConfirm && !symbolsConfirm) {
    var lowercaseNumbers = lowercase + numbers;
      alert("You chose: " + passwordLength + " characters, lowercase letters and numbers");
        for(var i = 0; i < passwordLength; i++) {
          var indexLowerNumb = Math.floor(Math.random() * lowercaseNumbers.length);
          passwordRandom += lowercaseNumbers[indexLowerNumb];
        }
      return passwordRandom;
  } else if (!uppercaseConfirm && lowercaseConfirm && !numbersConfirm && symbolsConfirm) {
    var lowercaseSymbols = lowercase + symbols;
      alert("You chose: " + passwordLength + " characters, lowercase letters and symbols");
        for(var i = 0; i < passwordLength; i++) {
          var indexLowerSym = Math.floor(Math.random() * lowercaseSymbols.length);
          passwordRandom += lowercaseSymbols[indexLowerSym];
        }
      return passwordRandom;
  } else if (!uppercaseConfirm && !lowercaseConfirm && numbersConfirm && symbolsConfirm) {
    var numbersSymbols = numbers + symbols;
      alert("You chose: " + passwordLength + " characters, numbers and symbols");
        for(var i = 0; i < passwordLength; i++) {
          var indexNumbSym = Math.floor(Math.random() * numbersSymbols.length);
          passwordRandom += numbersSymbols[indexNumbSym];
        }
      return passwordRandom;
  } else if (uppercaseConfirm && !lowercaseConfirm && !numbersConfirm && !symbolsConfirm) {
    alert("You chose: " + passwordLength + " characters and uppercase letters only");
      for(var i = 0; i < passwordLength; i++) {
        var indexUpper = Math.floor(Math.random() * uppercase.length);
        passwordRandom += uppercase[indexUpper];
      }
      return passwordRandom;
  } else if (!uppercaseConfirm && lowercaseConfirm && !numbersConfirm && !symbolsConfirm) {
    alert("You chose: " + passwordLength + " characters and lowercase letters only")
      for(var i = 0; i < passwordLength; i++) {
        var indexLower = Math.floor(Math.random() * lowercase.length);
        passwordRandom += lowercase[indexLower];
      }
      return passwordRandom;
  } else if (!uppercaseConfirm && !lowercaseConfirm && numbersConfirm && !symbolsConfirm) {
    alert("You chose: " + passwordLength + " characters and numbers only");
      for(var i = 0; i < passwordLength; i++) {
        var indexNumb = Math.floor(Math.random() * numbers.length);
        passwordRandom += numbers[indexNumb];
      }
      return passwordRandom;
  } else if (!uppercaseConfirm && !lowercaseConfirm && !numbersConfirm && symbolsConfirm) {
    alert("You chose: " + passwordLength + " characters and symbols only");
      for(var i = 0; i < passwordLength; i++) {
        var indexSym = Math.floor(Math.random() * symbols.length);
        passwordRandom += symbols[indexSym];
      }
      return passwordRandom;
  } else {
    alert("You must choose at least one of the following\nUppercase letters, Lowercase letters, Numbers and/or Symbols\nPlease start again");
    return;
  }

 

  
}


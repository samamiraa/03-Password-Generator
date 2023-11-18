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
    var lowercaseConfirm = confirm("Lowercase letters?\nYes or No");
  } 

  if (lowercaseConfirm) {
      alert("You chose to include lowercase letters");
        var numbersConfirm = prompt("Numbers? Yes or No");
  } else {
    var numbersConfirm = prompt("Numbers? Yes or No");
  } 

  numbersConfirm = numbersConfirm.toUpperCase();

  if (numbersConfirm === "YES") {
      alert("You chose to include numbers");
        var symbolsConfirm = prompt("Symbols? Yes or No");
  }  else if (numbersConfirm === "NO") {
    var symbolsConfirm = prompt("Symbols? Yes or No");
  } else {
    return;
  }

  symbolsConfirm = symbolsConfirm.toUpperCase();
  
  
  if (symbolsConfirm === "YES") {
      alert("You chose to include symbols");
  } else {
    return;
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
  }

 

  
}


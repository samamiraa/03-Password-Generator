var lowercase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var uppercase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var symbols = ("!", "@", "#", "$", "%", "^", "&", "*", "(", ")");
var numbers = ("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");

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

  var passwordRandom = " ";
  var passwordLength = prompt("How many characters do you want in your password?");

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("You chose: " + passwordLength);
  } else {
    alert("Password must be between 8 - 128 characters");
    var passwordLength = prompt("How many characters do you want in your password?");
  } 

  var uppercaseConfirm = prompt("Which criteria would you like to include in your password?\nUppercase Letters?\nYes or No");

  uppercaseConfirm = uppercaseConfirm.toUpperCase();

  if (uppercaseConfirm === "YES") {
    var indexUpper = Math.floor(Math.random() * uppercase.length);
    var uppercaseRandom = uppercase[indexUpper];
      alert("Uppercase: " + uppercaseRandom);
        var lowercaseConfirm = prompt("Lowercase letters?\nYes or No");
  } else if (uppercaseConfirm === "NO") {
    var lowercaseConfirm = prompt("Lowercase letters?\nYes or No");
  } else {
    return;
  }

  lowercaseConfirm = lowercaseConfirm.toUpperCase();

  if (lowercaseConfirm === "YES") {
    var indexLower = Math.floor(Math.random() * lowercase.length);
    var lowercaseRandom = lowercase[indexLower];
      alert("Lowercase: " + lowercaseRandom);
        var numbersConfirm = prompt("Numbers? Yes or No");
  } else if (lowercaseConfirm === "NO") {
    var numbersConfirm = prompt("Numbers? Yes or No");
  } else {
    return;
  }

  numbersConfirm = numbersConfirm.toUpperCase();

  if (numbersConfirm === "YES") {
    var indexNumbers = Math.floor(Math.random() * numbers.length);
    var numbersRandom = numbers[indexNumbers];
      alert("Numbers: " + numbersRandom);
        var symbolsConfirm = prompt("Symbols? Yes or No");
  }  else if (numbersConfirm === "NO") {
    var symbolsConfirm = prompt("Symbols? Yes or No");
  } else {
    return;
  }

  symbolsConfirm = symbolsConfirm.toUpperCase();
  
  if (symbolsConfirm === "YES") {
    var indexSymbols = Math.floor(Math.random() * symbols.length);
    var symbolsRandom = symbols[indexSymbols];
      alert("Symbols: " + symbolsRandom);
  } else {
    return;
  }

 

  
}


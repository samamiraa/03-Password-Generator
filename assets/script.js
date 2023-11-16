var lowercase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var uppercase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var symbols = ("!", "@", "#", "$", "%", "^", "&", "*", "(", ")");
var numbers = ("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");

var passwordMessage = ("Password must contain lowercase, uppercase, numbers and/or special characters");

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

  var uppercaseConfirm = prompt("Which criteria would you like to include in your password?\nUppercase Letters?\nYes or No");

  if (uppercaseConfirm === "Yes") {
    var indexUpper = Math.floor(Math.random() * uppercase.length);
    var uppercaseRandom = uppercase[indexUpper];
      alert("Uppercase: " + uppercaseRandom);
  } 

  var lowercaseConfirm = prompt("Lowercase letters?\nYes or No");

  if (lowercaseConfirm === "Yes") {
    var indexLower = Math.floor(Math.random() * lowercase.length);
    var lowercaseRandom = lowercase[indexLower];
      alert("Lowercase: " + lowercaseRandom);
  } 

  var numbersConfirm = prompt("Numbers? Yes or No");

  if (numbersConfirm === "Yes") {
    var indexNumbers = Math.floor(Math.random() * numbers.length);
    var numbersRandom = numbers[indexNumbers];
      alert("Numbers: " + numbersRandom);
  }

  var symbolsConfirm = prompt("Symbols? Yes or No")

}
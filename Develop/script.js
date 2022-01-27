// Assignment code here

// data variables
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "#", "$", "%", "@", "&", "'", "*", "+", "(", ")", "-", ".", "_", ";", "/", ":", ";", "<", "=", ">", "?", "~"];

// question prompts 
var genBtnPrompt = function () {
  
  var okayNumbers = confirm("Click 'OK' if you'd like to have generated numbers in your password.");

  var okayLowerCase = confirm("Click 'OK' if you want lowerCase characters to be generated in your password.");

  var okayUpperCase = confirm("Click 'OK' if you want upperCase characters to be generated in your password.");

  var okaySymbols = confirm("Click 'OK' to generate symbol characters within your password.");

  if (!(okayNumbers || okayLowerCase || okayUpperCase || okaySymbols)) {
      alert("You need to pick at least one option!");
      return genBtnPrompt()
  }
};

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

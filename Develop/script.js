// data variables
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "#", "$", "%", "@", "&", "'", "*", "+", "(", ")", "-", ".", "_", ";", "/", ":", ";", "<", "=", ">", "?", "~"];

// question prompts for password creation
function generatePassword() {
  
  var confirmNumber = confirm("Click 'OK' if you'd like to have generated numbers in your password.");

  var confirmLowerCase = confirm("Click 'OK' if you want lowerCase characters to be generated in your password.");

  var confirmUpperCase = confirm("Click 'OK' if you want upperCase characters to be generated in your password.");

  var confirmSymbols = confirm("Click 'OK' to generate symbol characters within your password.");

  var passwordLength = parseInt(prompt("How long would you like your password to be? Please pick a number between (8-150)"));
  
  var password = "";

  var passwordType = [];
  if(confirmNumber) {
    passwordType = passwordType.concat(Numbers);
  }
  if(confirmLowerCase) {
    passwordType = passwordType.concat(lowerCase);
  }
  if(confirmUpperCase) {
    passwordType = passwordType.concat(upperCase);
  }
  if(confirmSymbols) {
    passwordType = passwordType.concat(symbols);
  }

  

  if (!(confirmNumbers || confirmLowerCase || confirmUpperCase || confirmSymbols)) {
      alert("You need to pick at least one!");
  };


//function generatePassword() {
  // convert a string to an integer
  var passwordLength = parseInt(prompt("How long would you like your password to be? Please pick a number between (8-150)"));
    if (passwordLength < 8 || passwordLength > 150 || passwordLength === "" || isNaN(passwordLength)) {
      alert("Please choose a number between (8-150)");
};

var result = "";


    // for loop to generate the possibilities
    for (var i = 0; i < passwordLength; i++) {

        if (confirmNumber === true && confirmLowerCase === true && confirmUpperCase === true && confirmSymbols === true) {
            result += (allChar[(Math.floor(Math.random() * allChar.length))]);
        }
        else if (confirmLowerCase === true && confirmNumber === true) {
            result += (lowerNum[(Math.floor(Math.random() * lowerNum.length))]);
        }
        
  }

    //this returns the value to the password variable declared created below and inserts it into the HTML textarea using the querySelector
    return result;
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
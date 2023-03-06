// Assignment Code
var generateBtn = document.querySelector("#generate");
  
// Write password to the #password input
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passwordText); 

  function writePassword() {
    var password = generatePassword();
  }

// Set variable for each cases: Upper/Lower case, number and Symbol
  var upperCase = "ABCDEFGHIJKLMNO";
  var lowerCase = upperCase.toLowerCase(); 
  var number = "0123456789";
  var symbol = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
  
// Create function to generate password 
  function generatePassword() { 
    var minlength = 8; 
    var maxlength = 128; 
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,128}$/; 
    var includeUpper = window.confirm('Do you want to include upper character?');
    var includeLower = window.confirm('Do you want to include lower character?'); 
    var includeNumber = window.confirm('Do you want to include number?');
    var includeSymbol = window.confirm('Do you want to include symbol?');  
    var userLength = window.prompt('Do you wish to create password with min length of 8 and not over 128?');
    
// Change userInput into Integer data type 
    var userLengthnum = parseInt(userLength); 

// Create variable with empty string and if else condition from user's input
    var availableCharacter = ""; 

    if (includeUpper) {
      availableCharacter+=upperCase; 
    }
    if(includeLower) {
      availableCharacter+=lowerCase;
    }
    if(includeNumber) {
      availableCharacter+=number;
    }
    if(includeSymbol) {
      availableCharacter+=symbol;
    }
// Crete variable for final password and loop 
    var finalPassword = ""; 

    for (i = 1; i <= userLengthnum; i++) {
      var randomNum = Math.floor(Math.random()*availableCharacter.length);
      finalPassword+=availableCharacter[randomNum]; 
      console.log(finalPassword);
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


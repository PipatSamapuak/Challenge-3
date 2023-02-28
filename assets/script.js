// Assignment Code
var generateBtn = document.querySelector("#generate");
  
// Write password to the #password input
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passwordText); 

  function writePassword() {
    var password = generatePassword();
  }

  var upperCase = "ABCDEFGHIJKLMNO";
  var lowerCase = upperCase.toLowerCase(); 
  var number = "0123456789";
  var symbol = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 

  function generatePassword() { 
    var minlength = 8; 
    var maxlength = 128; 
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,128}$/; 
    var includeUpper = window.confirm('Do you want to include upper character?');
    var includeLower = window.confirm('Do you want to include lower character?'); 
    var includeNumber = window.confirm('Do you want to include number?');
    var includeSymbol = window.confirm('Do you want to include symbol?');  
    var userLength = window.prompt('Do you wish to create password with min length of 8 and not over 128?');
    
    var userLengthnum = parseInt(userLength); 

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
    var finalPassword = ""; 

    for (i = 1; i <= userLengthnum; i++) {
      var randomNum = Math.floor(Math.random()*availableCharacter.length);
      finalPassword+=availableCharacter[randomNum]; 
      console.log(finalPassword);
    }
    // return PW 
    // if user answers "No" all the way, should have an option for randomly generate password
  }
    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Validate the generated password 

 // var userLength = window.prompt("Do you wish to create password with min 8 characters and not over 128 characters?");

    // if (userLength != null) { 
    // } else (window.prompt('Do you wish to add character in your password?'));
    // if (userLength != null) {
    
    // } 
  // } 

  //function validatePassword() {
    // var newPassword = document.getElementById('changePasswordForm').newPassword.value;
    // var minNumberofChars = 6;
    //  var maxNumberofChars = 16;
    // var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,128}$/;
    // alert(newPassword); 
    // if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
       // return false;
    // }
    // if(!regularExpression.test(newPassword)) {
       // alert("password should contain atleast one number and one special character");
        //return false;
   // }
// }
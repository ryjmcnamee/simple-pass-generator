// Assignment code here
function generatePassword() {

  const letterArray = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const specialCharacterArray = ["!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","`"];
  

  var generatedPassword = [];
  //Instantiate while-loop conditional. 
  //While-loop determines if at least ONE option is selected 
  var validChoices;
  while (validChoices == false) {
    var passwordLength = prompt();
    var passInclLowCase = confirm("Would you like to include lower case characters?");
    var passInclUppCase = confirm("Would you like to include upper case characters?");
    var passInclNumeric = confirm("Would you like to include numeric characters?");
    var passInclSpecial = confirm("Would you like to include special characters?");
    if ((passwordLength > 8 && passwordLength < 128) && (passInclLowCase + passInclUppCase + passInclNumeric + passInclSpecial)) {
      validChoices = true;
    }
    else {
      alert("Please select valid options.");
      var exitConditional = confirm("Would you like to try again?");
      if (exitConditonal) {
        return;
      }
    }
  }
  //Take above options and generate password
  for(var i = 0; i <= passwordLength; i++){
    var characterSelected;
    while(characterSelected == false){
      var typeSelector = Math.floor(Math.random()*4);
      switch(typeSelector){
        case 0:
          generatedPassword.push()
          break;
        case 1:
          generatedPassword.push();
          break;
        case 2:
          generatedPassword.push();
          break;
        case 3:
          generatedPassword.push()
          break;
      }
    }
  }
}

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

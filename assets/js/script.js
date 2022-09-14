// Assignment code here
function generatePassword() {
  //define character lists
  const letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const specialCharacterArray = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "`"];
  //function used later to generate a character given a type
  function selectCharacter(type) {
    switch (type) {
      case "lower":
        var charSelect = Math.floor(Math.random() * letterArray.length);
        return (letterArray[charSelect])
        break;
      case "upper":
        var charSelect = Math.floor(Math.random() * letterArray.length);
        return (letterArray[charSelect].toUpperCase())
        break;
      case "special":
        var charSelect = Math.floor(Math.random() * specialCharacterArray.length);
        return (specialCharacterArray[charSelect])
        break;
      case "numeric":
        var charSelect = Math.floor((Math.random() * 8) + 1);
    }
  }

  var generatedPasswordArray = [];
  var generatedPassword = "";
  //Instantiate while-loop conditional. 
  //While-loop determines if at least ONE option is selected 
  var validChoices = false;
  while (validChoices == false) {
    var passwordLength = prompt("How many characters would you like to include? 8 - 128 characters only.");
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
      if (exitConditional) {
        return;
      }
    }
  }
  //If this line is reached, valid options have been selected.
  //Now we offload the choices into an array
  var selectedChoices = [];
  if (passInclLowCase) {
    selectedChoices.push(0);
  }
  if (passInclUppCase) {
    selectedChoices.push(1);
  }
  if (passInclSpecial) {
    selectedChoices.push(2);
  }
  if (passInclNumeric) {
    selectedChoices.push(3);
  }
  //Take above options and generate password
  for (var i = 0; i <= passwordLength; i++) {
    var characterSelected = false;
    while (characterSelected == false) {
      var typeSelector = Math.floor(Math.random() * 3);
      if (selectedChoices.includes(typeSelector)) {
        switch (typeSelector) {
          case 0:
            generatedPasswordArray.push(selectCharacter("lower"))
            break;
          case 1:
            generatedPasswordArray.push(selectCharacter("upper"));
            break;
          case 2:
            generatedPasswordArray.push(selectCharacter("special"));
            break;
          case 3:
            generatedPasswordArray.push(selectCharacter("numeric"))
            break;
        }
        characterSelected = true;
      }
    }
  }
  //Parse into one string
  for (var i = 0; i < generatedPasswordArray.length; i++){
    generatedPassword = generatedPassword + generatedPasswordArray[i];
  }
  return(generatedPassword)
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

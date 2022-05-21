// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = window.prompt ("Choose between 8-128 characters");
  console.log(length);


  if (length < 8 || length > 128) {
   window.alert("You need to provide a valid answer. Please try again.");
  return generatePassword()
  }

  var confirmLowercase = window.confirm("Would you like lowercase characters?")
  confirmLowercase = confirmLowercase.confirm

  if (confirmLowercase) {

  }

  var confirmUppercase = window.confirm("Would you like uppercase characters?");

  var confirmNumbers = window.confirm("Would you like number characters?");

  var confirmSpecialCharacters = window.confirm("Would you like special characters?");

   return length;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


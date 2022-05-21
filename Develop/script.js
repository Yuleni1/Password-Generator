// Assignment code here
var generateBtn = document.querySelector("#generate");
var uppercase = ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9",]
var specialCharacters = ["~","!","@","#","$","%","^","&","*"]
var answer;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = window.prompt ("Choose between 8-128 characters");
  console.log(length);


  if (length < 8 || length > 128) {
   window.alert("You need to provide a valid answer. Please try again.");
  return generatePassword()
  }

  var confirmLowercase = window.confirm("Would you like lowercase characters?")

  var confirmUppercase = window.confirm("Would you like uppercase characters?");

  var confirmNumbers = window.confirm("Would you like number characters?");

  var confirmSpecialCharacters = window.confirm("Would you like special characters?");

   return password;


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
}
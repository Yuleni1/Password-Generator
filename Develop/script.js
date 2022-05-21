// Assignment code here

// Get references to the #generate element
//locates the id in the button location
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function that is called in the eventlistner
function writePassword() {
// the variable password is equal to the generatePassword function.
  var password = generatePassword();
// variable passwordText is connected to the html via id #password
  var passwordText = document.querySelector("#password");

//passwordText will extract the value and assign it to the password
  passwordText.value = password;

}
// Generate password function
function generatePassword() {
  
  var length = window.prompt ("Choose between 8-128 characters");
  console.log(length);
  if (length < 8 || length > 128) {
   window.alert("You need to provide a valid answer. Please try again.");
  return generatePassword()
  }

  var confirmLowercase = window.confirm("Would you like lowercase characters?")
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  console.log(lowercase);

  var confirmUppercase = window.confirm("Would you like uppercase characters?");
  var uppercase = ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  console.log(uppercase);

  var confirmNumbers = window.confirm("Would you like number characters?");
  var numbers = ["1","2","3","4","5","6","7","8","9","0"]
  console.log(numbers);

  var confirmSpecialCharacters = window.confirm("Would you like special characters?");
  var specialCharacters = ["~","!","#","$","%","^","&","*"]
  console.log(specialCharacters);


  if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecialCharacters){
    window.alert("please select a valid character selection. Please try again.");
    return generatePassword()
  }

  

   return length;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


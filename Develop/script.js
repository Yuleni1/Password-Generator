// Assignment code here

// Get references to the #generate element
//locates the id in the button location
var generateBtn = document.querySelector("#generate");
// var possibleAnswers = [];
var box = ""

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
  
  //Length prompt
  var characterLength = window.prompt ("Choose between 8-128 characters");

  //alert if the length does not apply to prompt
  if (characterLength < 8 || characterLength > 128) {
   window.alert("You need to provide a valid answer. Please try again.");
  return generatePassword()
  }

  //lowercase confirm
  var confirmLowercase = window.confirm("Would you like lowercase characters? Press 'ok' to confirm.")
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  
  if (confirmLowercase){
    box = box + lowercase
    console.log(confirmLowercase);
    console.log(box);
  }
  
  else if(confirmLowercase) {
    return false 
  }
  

//uppercase confirm
  var confirmUppercase = window.confirm("Would you like uppercase characters? Press 'ok' to confirm.");
  var uppercase = ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
  if (confirmUppercase){
    box = box + uppercase
    console.log(box);
  }

  else if(confirmUppercase) {
    return false 
  }
  
//number confirm
  var confirmNumbers = window.confirm("Would you like number characters? Press 'ok' to confirm.");
  var numbers = ["1","2","3","4","5","6","7","8","9","0"]

  if (confirmNumbers){
    box = box + numbers
    console.log(box);
   
  }

  else if(confirmNumbers) {
    return false 
  }

//special characters confirm
  var confirmSpecialCharacters = window.confirm("Would you like special characters? Press 'ok' to confirm.");
  var specialCharacters = ["~","!","#","$","%","^","&","*"]

  if (confirmSpecialCharacters){
    box = box + specialCharacters
    console.log(box);
  }
  else if(confirmSpecialCharacters) {
    return false 
  }



//alert if no character variable selected
  if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecialCharacters){
    window.alert("Please select a valid character selection. Please try again.");
    return generatePassword();
  }



//for loop section starts
userSelections = []
console.log("box;", box)
var newBox = box.replace(/,/g, "")
box = "";
for (var i = 0; i < characterLength; i++){
var randomChar = newBox [Math.floor(Math.random() * newBox.length)]
console.log(newBox.length);
userSelections.push(randomChar);
};


return userSelections.join("");

};

//generate password function ends. 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

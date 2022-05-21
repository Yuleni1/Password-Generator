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
  

  var characterLength = window.prompt ("Choose between 8-128 characters");
  if (characterLength < 8 || characterLength > 128) {
   window.alert("You need to provide a valid answer. Please try again.");
  return generatePassword()
  }

  var confirmLowercase = window.confirm("Would you like lowercase characters?")
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  
  if (confirmLowercase){
    box = box + lowercase
    console.log(confirmLowercase);
    console.log(box);
  }
  
  else if(confirmLowercase) {
    return false 
  }
  


  var confirmUppercase = window.confirm("Would you like uppercase characters?");
  var uppercase = ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
  if (confirmUppercase){
    box = box + uppercase
    console.log(box);
  }

  else if(confirmUppercase) {
    return false 
  }

  

  var confirmNumbers = window.confirm("Would you like number characters?");
  var numbers = ["1","2","3","4","5","6","7","8","9","0"]

  if (confirmNumbers){
    box = box + numbers
    console.log(box);
    return numbers
  }

  else if(confirmNumbers) {
    return false 
  }


  var confirmSpecialCharacters = window.confirm("Would you like special characters?");
  var specialCharacters = ["~","!","#","$","%","^","&","*"]

  if (confirmSpecialCharacters){
    box = box + specialCharacters
    console.log(box);
  }
  else if(confirmSpecialCharacters) {
    return false 
  }




  if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecialCharacters){
    window.alert("please select a valid character selection. Please try again.");
    return generatePassword();
  }



//empty array to be able to input the function declared below
userSelections = []
// creates a new variable called newBox which applies the box(which containes the arrays) and replaces the commas
var newBox = box.replace(/,/g, "")
// for loop:

// variable i = 0; and i is less then characterLength (characterLength is a integer that is determined by the user); then that gets compiled by i++ by however many times the user inputed.
for (var i = 0; i < characterLength; i++){
// variable randomChar is a variable that contains the newBox(contains all the arrays selected) with the randomization of the math element. newBox.length(is the amount of rotations selection and the legnth of the array)
var randomChar = newBox [Math.floor(Math.random() * newBox.length)]
console.log(newBox.length);
//userSelection is a changing declaration depending on what the randomChar function initiates. 
userSelections.push(randomChar);
  

  }
//  console.log("do you see this",userSelections.join(""));
  //  return userSelections 
  // this returns the userSelections to be able to view in the web and using .join we make it an string. 
return userSelections.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


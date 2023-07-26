// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890"
var special = "!@#$%^&*()";


function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be?")
  // if the password is less then 8 or greater than 128, reprompt user
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please try again")
    return;
  }
  console.log(passwordLength)
  var characterPool = ""
  var passwordLowercase = confirm("Would you like lowercase letters?")
  console.log(passwordLowercase)
  if (passwordLowercase === true) {
    //lowercase needs to be added to characterPool
    characterPool += lowercase
    console.log(characterPool)
  }
  var passwordUppercase = confirm("Would you like your password to have upercase letters?")
  if (passwordUppercase === true) {
    characterPool += uppercase
    console.log(characterPool)

  }
  console.log(passwordUppercase)
  var passwordNumeric = confirm("Would you like your password to have numbers?")
  if (passwordNumeric === true) {
    characterPool += numeric
    console.log(characterPool)

  }
  console.log(passwordNumeric)
  var passwordSpecial = confirm("Would you like your pass word to contain special characters?")
  if(passwordSpecial === true) {
    characterPool += special
    console.log(characterPool)

  }
  console.log(passwordSpecial)
  console.log(characterPool)
if(characterPool === ""){
  alert("Please try again")
  return;
}
var finalPassword = ""
//iteralte up to n times  - passwordLength
//get a random letter from a string in javascript
for (var i=0  ; i < passwordLength; i++) {
  finalPassword += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
  return finalPassword;

}


}
//if (length <8 || length >128) {alert("Please try again")}


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

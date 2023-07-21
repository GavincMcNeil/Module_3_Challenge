// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var special = "!@#$%^&*()";


function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be?")
  // if the password is less then 8 or greater than 128, reprompt user
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please try again")
    return;
  }
  console.log(passwordLength)
  var passwordLowercase = confirm("Would you like lowercase values?")
  if (passwordLowercase === true) {
    return console.log(passwordLowercase)
  }
  var passwordUppercase = confirm("Would you like your password to have numbers?")
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

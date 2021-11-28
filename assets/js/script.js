// Assignment code here
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var allOptions = [];
  // Prompt the user for the password criteria
  //    Password length 8 < x < 128
  askLength = parseInt(prompt("How long would you like your password? Enter between 8 and 128 characters")); 
  if (!askLength) {
    alert("You must enter a value!");
    generatePassword();
  } else if (askLength < 8 || askLength > 128) {
    askLength = parseInt(prompt("You must choose between 8 and 128"));
  } else {
  // ask about lower, upper, numbers, and symbols
    confirmNumber = confirm("Will this password contain numbers?");
    confirmSymbols = confirm("Will this password contain special characters?");
    confirmUpper = confirm("Will this password contain Uppercase letters?");
    confirmLower = confirm("Will this password contain Lowercase letters?");
  };
// Validate the input
  if (!confirmLower && !confirmNumber && !confirmSymbols && !confirmUpper) {
    options = alert("You must choose a option!");
  };
  if (confirmLower) {
    allOptions.push(getRandomLower);
  };
  if (confirmUpper) {
    allOptions.push(getRandomUpper);
  };
  if (confirmNumber) {
    allOptions.push(getRandomNumber);
  };
  if (confirmSymbols) {
    allOptions.push(getRandomSymbol);
  };
  //Generate the input



  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };

  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  var passwordOpt = "";

  for (var i = 0; i < askLength; i++) {
    var arrayMath = Math.floor(Math.random() * allOptions.length);
    var placeholder = allOptions[arrayMath];
    passwordOpt += placeholder();
  };
  console.log(passwordOpt);
  //Display password to the page
  return passwordOpt;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
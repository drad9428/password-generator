// Assignment code here
function generatePassword(){
  var specialArr = ['~', '!',',','@','#','$','%','^','&','*','(',')','{','}','[',']','<','>',',','.','/',':',"'"];
  var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var upperArr = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
  var lowerArr = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
  var newArr = [];

  pwLength = prompt('Length of password (8-128)')

  if(pwLength < 8 || pwLength > 128 || pwLength === ''){
    alert('Invalid length')

    return
  }

  var specialConfirm = confirm('Do you want special chars')
  var numberConfirm = confirm('Do you want numbers')
  var upperConfirm = confirm('Do you want upper chars')
  var lowerConfirm = confirm('Do you want lower chars')

  if(specialConfirm === false && numberConfirm === false && lowerConfirm === false && upperConfirm === false){
    alert('Requires a selection')
    
    return
  }

  if(specialConfirm){
    newArr = newArr.concat(specialArr)
  }
  if(numberConfirm){
    newArr = newArr.concat(numberArr)
  }
  if(upperConfirm){
    newArr = newArr.concat(upperArr)
  }
  if(lowerConfirm){
    newArr = newArr.concat(lowerArr)
  }

  var newPassword = ''

  for(let i = 0; i < pwLength; i++){
    var rand = Math.floor(Math.random() * newArr.length)
    newPassword = newPassword + newArr[rand]
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

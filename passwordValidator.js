// function takes 2 arguments: password,username
// password must:
// - be atleast 8 characters
// - cannot contain spaces
// - cannot contain the username

function isValidPassword(password, username) {
  // check length
  if (password.length < 8) {
    return false;
  }

  // check for space
  if (password.indexOf(" ") !== -1) {
    return false;
  }

  //   check if it contains username
  if (password.indexOf(username) !== -1) {
    return false;
  }

  return true;
}

let checkValidity = isValidPassword("beloved2020", "beloved");
console.log(checkValidity);

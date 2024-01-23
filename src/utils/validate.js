export const checkValidateData = (name, emailOrPh, password) => {
  let nameRegex = /^[a-zA-Z\s]+$/;
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let phRegex = /^[1-9]\d{9}$/;
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  if (nameRegex.test(name) === false) {
    return "Please enter a valid name.";
  }
  if (
    emailRegex.test(emailOrPh.trim()) === false &&
    phRegex.test(emailOrPh.trim()) === false
  ) {
    return "Please enter a valid email address or phone number.";
  }

  if (passwordRegex.test(password.trim()) === false) {
    return "Your password must contain atleast 8 chracter, capital letter, small letter, number and special character .";
  }

  return null;
};

export const checkValidateName = (name) => {
  let nameRegex = /^[a-zA-Z\s]+$/;

  if (nameRegex.test(name) === false) {
    return "Please enter a valid name.";
  } else {
    return null;
  }
};

export const checkValidateEmail = (emailOrPh) => {
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  // let phRegex = /^[1-9]\d{9}$/;

  if (emailRegex.test(emailOrPh.trim()) === false) {
    return "Please enter a valid email address.";
  } else {
    return null;
  }
};

export const checkValidatePassword = (password) => {
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  if (passwordRegex.test(password.trim()) === false) {
    return "Your password must contain atleast 8 chracter, capital letter, small letter, number and special character .";
  } else {
    return null;
  }
};

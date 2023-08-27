const Validate = () => {
  //picking input field with theirnames
  let email = document.loginform.email;
  let password = document.loginform.password;

  //picking error fields
  let errorEmail = document.getElementById("emailError");
  let errorPassword = document.getElementById("passwordError");

  //validating email
  if (email.value == "") {
    email.style.border = "1px solid red";
    errorEmail.textContent = "Email is required";
    errorEmail.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    email.focus();
    return false;
  }
  let EmailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.value.match(EmailRegex)) {
    email.style.border = "1px solid red";
    errorEmail.textContent = "The email address should be valid";
    errorEmail.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    email.focus();
    return false;
  } else {
    email.style.border = "2px solid green";
    errorEmail.textContent = "";
    password.focus();
  }

  //validating password
  if (password.value == "") {
    password.style.border = "1px solid red";
    errorPassword.textContent = "password is required";
    errorPassword.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    password.focus();
    return false;
  } else {
    password.style.border = "1px solid green";
  }
};

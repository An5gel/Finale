const Validate = () => {
  //picking input field with their names
  let firstName = document.signupform.firstname;
  let lastName = document.signupform.lastname;
  let userName = document.signupform.username;
  let email = document.signupform.email;
  let phone = document.signupform.telephone;
  let gender = document.signupform.gender;
  let ninNumber = document.signupform.ninnumber;
  let role = document.signupform.role;
  let section = document.signupform.section;
  let password = document.signupform.password;

  //picking error fields
  let errorfirstName = document.getElementById("dnameerror");
  let errorlastName = document.getElementById("lastnameerror");
  let erroruserName = document.getElementById("usernameerror");
  let errorEmail = document.getElementById("emailerror");
  let phoneError = document.getElementById("telephoneerror");
  let genderError = document.getElementById("genderError");
  let ninNumberError = document.getElementById("ninnumberError");
  let roleError = document.getElementById("roleerror");
  let sectionError = document.getElementById("sectionerror");
  let passwordError = document.getElementById("passworderror");

  //validating first name inputs
  //validating for emptyness
  if (firstName.value == "") {
    firstName.style.border = "2px solid red";
    errorfirstName.textContent = "please provide your firstname";
    errorfirstName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else if (firstName.value.length < 2) {
    firstName.style.border = "2px solid red";
    errorfirstName.textContent = "first name must be at least 2 characters";
    errorfirstName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else if (firstName.value.length > 15) {
    firstName.style.border = "2px solid red";
    errorfirstName.textContent =
      "first name must not be greater than 15 characters";
    errorfirstName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else {
    firstName.style.border = "2px solid green";
    errorfirstName.textContent = "";
    lastName.focus();
  }

  //validating for last name
  if (lastName.value == "") {
    lastName.style.border = "2px solid red";
    errorlastName.textContent = "please provide your lastname";
    errorlastName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else if (lastName.value.length < 2) {
    lastName.style.border = "2px solid red";
    errorlastName.textContent = "last name must be at least 2 characters";
    errorlastName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else if (lastName.value.length > 15) {
    lastName.style.border = "2px solid red";
    errorlastName.textContent =
      "last name must not be greater than 15 characters";
    errorlastName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else {
    lastName.style.border = "2px solid green";
    errorlastName.textContent = "";
    userName.focus();
  }

  //validating for username
  if (userName.value == "") {
    userName.style.border = "2px solid red";
    erroruserName.textContent = "please provide your username";
    erroruserName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    userName.focus();
    return false;
  } else if (userName.value.length < 2) {
    userName.style.border = "2px solid red";
    erroruserName.textContent = "user name must be at least 2 characters";
    erroruserName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    userName.focus();
    return false;
  } else if (userName.value.length > 15) {
    userName.style.border = "2px solid red";
    erroruserName.textContent =
      "user name must not be greater than 15 characters";
    erroruserName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    userName.focus();
    return false;
  } else {
    userName.style.border = "2px solid green";
    erroruserName.textContent = "";
    phone.focus();
  }

  //validating phone number
  if (phone.value == "") {
    phone.style.border = "2px solid red";
    phoneError.textContent = "phone number is invalid";
    phoneError.style =
      "color: red; font-size:11px; font-family: Helvetica,arial;";
    phone.focus();
    return false;
  }

  // let phoneRegex = /^[+][2][5][6][0-9]{9}$;/;

  let phoneRegex = /^\+256\d{9}$/;
  if (!phoneRegex.test(phone.value)) {
    phone.style.border = "2px solid red";
    phoneError.textContent = "Enter a valid number starting with +256";
    // //styling error
    phoneError.style =
      "color: red; font-size:11px; font-family: Helevetica,Arial;";
    // //focus cursor
    return false;
  } else {
    phone.style.border = "2px solid green";
    phoneError.textContent = "";
    gender.focus();
  }

  // validating gender
  if (gender.value == "") {
    gender.style.border = "2px solid red";
    genderError.textContent = "please select a gender";
    genderError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    gender.focus();
    return false;
  } else {
    gender.style.border = "2px solid green";
    genderError.textContent = "";
    ninNumber.focus();
  }

  // const ninRegex = /^CF([a-zA-Z0-9]{12})+$/;
  // const ninRegex2 = /^CM([a-zA-Z0-9]{12})+$/;
  let ninNumberRegex = /^CF([a-zA-Z0-9]{12})+$/;
  let ninNumberRegex2 = /^CM([a-zA-Z0-9]{12})+$/;

  // validating NIN number
  if (ninNumber.value == "") {
    ninNumber.style.border = "1px solid red";
    ninNumberError.textContent = "ninNumber is required";
    ninNumberError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    ninNumber.focus();
    return false;
  } else if (
    !(
      ninNumber.value.match(ninNumberRegex) ||
      ninNumber.value.match(ninNumberRegex2)
    )
  ) {
    ninNumber.style.border = "1px solid red";
    ninNumberError.textContent = "ninNumber should be valid";
    ninNumberError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    ninNumber.focus();
    return false;
  } else {
    ninNumber.style.border = "2px solid green";
    ninNumberError.textContent = "";
    email.focus();
  }

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
    role.focus();
  }

  // validating role
  if (role.value == "") {
    role.style.border = "2px solid red";
    roleError.textContent = "please select a role";
    roleError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    role.focus();
    return false;
  } else {
    role.style.border = "2px solid green";
    roleError.textContent = "";
    section.focus();
  }

  // validating section
  if (section.value == "") {
    section.style.border = "2px solid red";
    sectionError.textContent = "please select a section";
    sectionError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    section.focus();
    return false;
  } else {
    section.style.border = "2px solid green";
    sectionError.textContent = "";
    section.focus();
  }

  //validating password

  if (password.value == "") {
    password.style.border = "1px solid red";
    passwordError.textContent = "password is required";
    passwordError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    password.focus();
    return false;
  } else {
    password.style.border = "1px solid green";
  }
};

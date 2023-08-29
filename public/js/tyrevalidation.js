const Validate = ()=>{
    //picking input field with their names 
    let  firstName = document.tyreregister.firstname
    let phone = document.tyreregister.telephone
    let size = document.tyreregister.size
    let vehicleModel = document.tyreregister.vehiclemodel
    let make = document.tyreregister.make
    // let date = document.tyreregister.date
    // let time = document.tyreregister.time
    let service = document.tyreregister.service
    let price = document.tyreregister.price

    
   


    //picking error fields
    let errorfirstName = document.getElementById("dnameerror");
    let cnumbererror = document.getElementById("cnumbererror")
    let sizeError = document.getElementById("sizeError")
    let vehicleModelError = document.getElementById("modelError")    
    let makeError = document.getElementById("makeError")
    // let dateError = document.getElementById("dateerror")
    // let timeError = document.getElementById("timeerror")
    let serviceError = document.getElementById("serviceError")
    let priceError = document.getElementById("priceError")
  

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
        phone.focus();
      }

   
    //validating phone number
    if(phone.value == ""){
        phone.style.border = "2px solid red" 
        cnumbererror.textContent ="phone number is invalid"
        cnumbererror.style = "color: red; font-size:11px; font-family: Helvetica,arial;";
        phone.focus()
        return false
    }

    // let phoneRegex = /^[+][2][5][6][0-9]{9}$;/;
    
    let phoneRegex = /^\+256\d{9}$/;
    if(!phoneRegex.test(phone.value)){
        phone.style.border = "2px solid red";
        cnumbererror.textContent = "Enter a valid number starting with +256";
        // //styling error
         cnumbererror.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        // //focus cursor
      return false;
        
    }else {
      phone.style.border = "2px solid green";
      cnumbererror.textContent = "";
       size.focus();
    }

    // validating size
    if (size.value == "") {
      size.style.border = "2px solid red";
      sizeError.textContent = "please select a size";
      sizeError.style =
        "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
      size.focus();
      return false;
    }else {
      size.style.border = "2px solid green";
      sizeError.textContent = "";
      vehicleModel.focus();
    }

// validating car model
   
    if (vehicleModel.value == "") {
      vehicleModel.style.border = "2px solid red";
      vehicleModelError.textContent = "please select a car Model";
      vehicleModelError.style =
        "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
      vehicleModel.focus();
      return false;
    }else {
      vehicleModel.style.border = "2px solid green";
      vehicleModelError.textContent = "";
      make.focus();
    }
   
    
    // validating make
    if (make.value == "") {
      make.style.border = "2px solid red";
      makeError.textContent = "please select a make";
      makeError.style =
        "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
      make.focus();
      return false;
    }else {
      make.style.border = "2px solid green";
      makeError.textContent = "";
      service.focus();
    }

  // validating service
  if (service.value == "") {
    service.style.border = "2px solid red";
    serviceError.textContent = "please select a service";
    serviceError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    service.focus();
    return false;
  }else {
    service.style.border = "2px solid green";
    serviceError.textContent = "";
    price.focus();
  }

  // validating price
  if (price.value == "") {
    price.style.border = "2px solid red";
    priceError.textContent = "please select a price";
    priceError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    price.focus();
    return false;
  }else {
    price.style.border = "2px solid green";
    priceError.textContent = "";
   
  }

   
} 
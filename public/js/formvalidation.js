const Validate = ()=>{
    //picking input field with their names 
    let  firstName = document.register.firstname
    let phone = document.register.telephone
    let gender = document.register.gender
    let ninNumber = document.register.ninnumber
    let carNumber = document.register.carnumber
    let vehicleModel = document.register.vehiclemodel
    let vehiclecolor = document.register.vehiclecolor
    // let date = document.register.date
    // let time = document.register.time
    let cartype = document.register.cartype
    let service = document.register.service
    let price = document.register.price
    
   


    //picking error fields
    let errorfirstName = document.getElementById("dnameerror");
    let cnumbererror = document.getElementById("cnumbererror")
    let genderError = document.getElementById("genderError")
    let ninNumberError = document.getElementById("ninnumberError")
    let carnumError = document.getElementById("carnumError")
    let vehicleModelError = document.getElementById("modelError")    
    let vehicleColorError = document.getElementById("vColorError")
    let cartypeError = document.getElementById("cartypeError")
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
    }else {
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
            }
           
            else if (!(ninNumber.value.match(ninNumberRegex) || ninNumber.value.match(ninNumberRegex2))) {
              ninNumber.style.border = "1px solid red";
              ninNumberError.textContent = "ninNumber should be valid";
              ninNumberError.style =
                "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
              ninNumber.focus();
              return false;
            }else {
              ninNumber.style.border = "2px solid green";
              ninNumberError.textContent = "";
            carNumber.focus();
            }
       
     //validating number plate       
  // const carNumberRegex = /^(UA|UB)[A-Z][A-Z0-9]{0,4}[A-Z]$/;
  const carNumberRegex = /^U[A-Za-z0-9]{1,5}[A-Z]$/;
    
    if(carNumber.value === ""){
      carNumber.style.border = "2px solid red" 
      carnumError.textContent ="number plate can't be empty"
      carnumError.style = "color: red; font-size:11px; font-family: Helvetica,arial;";
      carNumber.focus()
      return false
    }
    else if(!carNumber.value.match(carNumberRegex)){
        carNumber.style.border = "2px solid red" 
        carnumError.textContent ="put valid number plate"
        carnumError.style = "color: red; font-size:11px; font-family: Helvetica,arial;";
        carNumber.focus()
        return false
    
    }
    else{
       carNumber.style.border = "2px solid green" 
        carnumError.textContent =""
        vehicleModel.focus
    }
    
    // validating car model
    // validating gender
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
     cartype.focus();
    }
   
    
    // validating cartype
    if (cartype.value == "") {
      cartype.style.border = "2px solid red";
      cartypeError.textContent = "please select a cartype";
      cartypeError.style =
        "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
      cartype.focus();
      return false;
    }else {
      cartype.style.border = "2px solid green";
      cartypeError.textContent = "";
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
    vehiclecolor.focus();
  }
  //validating vehicle color
  if(vehiclecolor.value == ""){
    vehiclecolor.style.border = "2px solid red" 
    vehicleColorError.textContent ="Color not defined"
    vehicleColorError.style = "color: red; font-size:11px; font-family: Helvetica,arial;";
    vehiclecolor.focus()
    return false
  }else {
    vehiclecolor.style.border = "2px solid green";
    vehicleColorError.textContent = "";
   
  }

} 
 
 
// // const fee = ()=>{ 

// //   const cartype = document.getElementById('cartype');
// //   const service = document.getElementById('service');
// //   const price = document.getElementById('price');
// //   const compareButton = document.getElementById('price');

// //   compareButton.addEventListener('click', () => {
// //     if (cartype.value='truck' === service.value='Day-park'){
// //       return price.value = 3000;
// //     }
// //      else {
// //       result.value = 'Fields are not equal';
// //     }
// //   });

// // };



   
   
   

   
//    // doctype html
//   // html
//   //   head
//   //     title Example Pug Template
//   //   body
//   //     h1 Compare and Put Example
  
//   //     label(for='field1') Field 1:
//   //     input#field1(type='text')
  
//   //     label(for='field2') Field 2:
//   //     input#field2(type='text' )
  
//   //     label(for='result') Result:
//   //     input#result(type='text' readonly)
  
//       // button#compare-button Compare and Put
  
//   //     script.  
   
    


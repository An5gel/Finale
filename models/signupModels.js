const mongoose = require("mongoose");
 const passportLocalMongoose = require("passport-local-mongoose")

 const signupSchema = new mongoose.Schema ({
    firstname:{
        type : String,
       
        trim: true,
    },
    lastname:{
        type : String,
        trim: true,
    },
   username:{
        type : String,
        trim: true,
    },
  email:{
         type: String,
          required: true,
     },
  telephone:{
        type : String
    },
    role:{
        type :String
    },
    branch:{
        type : String,
        
    },
   password:{
        type : String,
        trim : true,
    },
   
    
 })

// aunthenticating with email
signupSchema.plugin(passportLocalMongoose,{usernameField: "email"});
 module.exports = mongoose.model("Signup",signupSchema);


const mongoose = require("mongoose")

const TyreSchema = new mongoose.Schema ({
    firstname:{
        type : String,
        required: true,
        trim: true,
    },
    telephone:{
        type: String
    },
    
    size:{
        type : String
    },
    vehiclemodel:{
        type : String
    },
    make:{
        type : String
    },
    date:{
        type : String
    },
    time:{
        type : String
    },
    
    service:{
        type : String
    },
    price:{
        type : Number
    },
    employeeId:{
        type : String,
        required:true

    }
    
   
   
    
});


module.exports = mongoose.model("TyreClients",TyreSchema)


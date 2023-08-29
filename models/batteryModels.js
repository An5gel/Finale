const mongoose = require("mongoose")

const BatterySchema = new mongoose.Schema ({
    firstname:{
        type : String,
        required: true,
        trim: true,
    },

    gender:{
        type: String
    },
    
    ninnumber:{
        type: String
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
    

    }
    
   
   
    
});


module.exports = mongoose.model("BatteryClients",BatterySchema)


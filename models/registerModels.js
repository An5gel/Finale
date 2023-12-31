const mongoose = require("mongoose")

const ParkingSchema = new mongoose.Schema ({
    firstname:{
        type : String,
        required: true,
        trim: true,
    },
    telephone:{
        type: String
    },
    gender:{
        type: String
    },
    ninnumber:{
        type : String
    },
    carnumber:{
        type : String
    },
    vehiclemodel:{
        type : String
    },
    vehiclecolor:{
        type : String
    },
    date:{
        type : String
    },
    time:{
        type : String
    },
    cartype:{
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
        required: true
    },
    receiptid:{
        type : String,
        required: true
    },
    
   
   
    
});


module.exports = mongoose.model("Parker",ParkingSchema)


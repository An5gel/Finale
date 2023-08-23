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
    ninnumber:{
        type : String
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
    cartype:{
        type : String
    },
    service:{
        type : String
    },
    price:{
        type : Number
    }
    
   
   
    
});


module.exports = mongoose.model("TyreClients",TyreSchema)


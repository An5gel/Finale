const mongoose = require("mongoose")

//creating an async function
const connectDB = async ()=>{
    try{
        // conn = await mongoose.connect(process.env.MONGO_URI)
        conn = await mongoose.connect("mongodb://127.0.0.1:27017/finale")
        console.log(`MongoDB connected at : ${conn.connection.host}`) 
    
    }
    catch(error){
        console.log(`MongoDB connected error : ${error}`) 
        process.exit(1)
    
    }
      
};



module.exports = connectDB
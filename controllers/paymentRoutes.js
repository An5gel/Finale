const express = require("express");
const Parker = require("../models/registerModels");
const router = express.Router();




router.get("/report", async(req, res)=>{
    try{
        // a moongoose function that reads from the model
        let items = await Parker.find();
        let price = await Parker.aggregate([
            {"$group": {_id: "$all",
        totalPrice:{$sum: "$price"},
        
    }}
])
// console.log(price[0].totalPrice)
res.render("report.pug", {Parker: items, allPrices:price[0].totalPrice});       
}
    catch(error){
        console.log(error)
       return res.status(400).send({message: "sorry could not retrieve employees"})
    }
});



module.exports = router;
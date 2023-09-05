const express = require("express");
const BatteryClients = require("../models/batteryModels")

const router = express.Router();


/// batteryform routes
router.get('/batteryform', (req, res)=>{
    res.render('batteryform.pug')
});



// batteryform page route
router.get('/batteryform', async (req, res)=>{
    req.session.user = req.user
   let UserID = req.session.user.username;
   console.log(UserID)

   const parked = await BatteryClients.countDocuments();

   let receiptid = "B-00"+ parked
    res.render('batteryform.pug', {UserID:UserID, receiptid})
});

router.post("/batteryform", async (req, res) => {
    try{
        console.log(req.body);
        const client = new BatteryClients(req.body);
        await client.save();
        console.log(req.body);
        res.redirect("/api/batteryReport"); 
    } catch(error){
        res.status(400).render("batteryform.pug")
        console.log(error);
    }
});
router.get("/batteryReport", async(req, res)=>{
    try{
     let items = await BatteryClients.find();
     let price = await BatteryClients.aggregate([
            { $group: { _id: "$all",totalPrice: { $sum: "$price" } } },
          ]);
          
      console.log(price);
          res.render("batteryReport.pug", { persons: items, allPrices: price[0].totalPrice});
          
    }
    catch(error){
        console.log(error)
       return res.status(400).send({message: "sorry could not retrieve registered clients in tireclinic"})
    }
});

router.post("/batteryReport/delete", async (req, res )=>{
try{
    await BatteryClients.deleteOne({_id: req.body.id});
    res.redirect("back");
} 
catch(error){
    res.status(400).send("unable to delete items from the database")
}
});

// how to update data
router.get("/batteryform/edit/:id", async (req, res)=>{
try{
    const emp = await BatteryClients.findOne({
        _id:req.params.id
    })
    res.render("batteryedit.pug", {client:emp})
}
catch(error){
    res.status(400).send("could not find employee in database")
    console.log(error)
}
});
router.post("/batteryReport/edit/", async (req, res)=>{
try{
    await BatteryClients.findOneAndUpdate({_id:req.query.id},req.body);
    res.redirect("/api/batteryReport")
}
catch(error){
    res.status(400).send("could not find clients  in database")
    console.log(error)
}
});
// batteryreceipt route
router.get("/batteryreceipt/:id", async (req, res)=>{
    try{
        const client = await BatteryClients.findOne({
            _id:req.params.id
        })
        console.log(client)
        res.render("batteryreceipt.pug", {client})
    }
    catch(error){
        res.status(400).send("could not find receipt in database")
        console.log(error)
    }
});








module.exports = router
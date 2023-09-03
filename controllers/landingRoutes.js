const express = require("express");
const router = express.Router();

const Parker = require("../models/registerModels");

// landing page route
router.get('/landing', (req, res)=>{
    res.render('landing.pug')
});

// manager page route
router.get('/manager', (req, res)=>{
    res.render('manager.pug')
});

// attendant page route
router.get('/attendant', (req, res)=>{
    res.render('attendant.pug')
});

// parking page route
router.get('/parking', (req, res)=>{
    res.render('parking.pug')
});

// parkingreceipt page route
router.get('/parkingreceipt', (req, res)=>{
    res.render('receipt.pug')
});


// tire clinic page route
router.get('/tire', (req, res)=>{
    res.render('tire.pug')
});
// tyrereceipt clinic page route
router.get('/tyreReceipt', (req, res)=>{
    res.render('tyreReceipt.pug')
});


// battery page route
router.get('/battery', (req, res)=>{
    res.render('battery.pug')
});
// batteryform page route
router.get('/batteryform', (req, res)=>{
    res.render('batteryform.pug')
});


// batteryReceipt page route
router.get('/batteryReceipt', (req, res)=>{
    res.render('batteryReceipt.pug')
});

// services route
router.get('/services', (req, res)=>{
    res.render('services.pug')
});

// tab route
router.get('/tab', (req, res)=>{
    res.render('tab.pug')
});

// cashier route
router.get('/cashier', (req, res)=>{
    res.render('cashier.pug')
});
// cashier-parking report route

    router.get("/CPreport", async(req, res)=>{
        try{
         let items = await Parker.find();
         let price = await Parker.aggregate([
                { $group: { _id: "$all", totalPrice: { $sum: "$price" } } },
              ]);
              
          console.log(price);
              res.render("cashier-parkingreport.pug", { persons: items, allPrices: price[0].totalPrice });
              
        }
        catch(error){
            console.log(error)
           return res.status(400).send({message: "sorry could not retrieve registered clients"})
        }
});
 
// // tab route
// router.get('/tab', (req, res)=>{
//     req.session.user = req.user
//     if (req.session.user.role === 'manager'){
//     res.render('tab.pug')}
//     else{res.render("landing.pug")}
// });
// parkingreceipt route
router.get("/receipt/:id", async (req, res)=>{
    try{
        const client = await Parker.findOne({
            _id:req.params.id
        })
        console.log(client)
        res.render("receipt.pug", {client})
    }
    catch(error){
        res.status(400).send("could not find receipt in database")
        console.log(error)
    }
});












module.exports = router
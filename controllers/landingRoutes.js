const express = require("express");
const router = express.Router();

const Parker = require("../models/registerModels");

// landing page route
router.get('/landing', (req, res)=>{
    res.render('landing.pug')
});

// parking page route
router.get('/parking', (req, res)=>{
    res.render('parking.pug')
});

// tire clinic page route
router.get('/tire', (req, res)=>{
    res.render('tire.pug')
});

// battery page route
router.get('/battery', (req, res)=>{
    res.render('battery.pug')
});

// services route
router.get('/services', (req, res)=>{
    res.render('services.pug')
});

// tab route
router.get('/tab', (req, res)=>{
    res.render('tab.pug')
});
// receipt route
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
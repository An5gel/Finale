const express = require("express");
const router = express.Router();

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









module.exports = router
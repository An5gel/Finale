const express = require("express");
const router = express.Router();


// tab route
router.get('/tab', (req, res)=>{
    res.render('tab.pug')
});









module.exports = router
const express = require("express");
const router = express.Router();



const Signup = require("../models/signupModels");


router.get('/signup', (req, res)=>{
    res.render('signup.pug')
});

router.post("/regsignup", async (req, res)=>{
   try{
    const register = new Signup(req.body)
    console.log(req.body);
    await Signup.register (register,req.body.password);
    res.redirect("/api/form")
   }
   catch(error){
    res.status(400).send({message: "failed to register user"});
    console.log(error);
   }
});







module.exports = router
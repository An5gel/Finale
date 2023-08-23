const express = require("express");
const router = express.Router();



const Signup = require("../models/signupModels");


router.get('/signup', (req, res)=>{
    res.render('signup.pug')
});
router.get('/employee', (req, res)=>{
    res.render('employee.pug')
});


router.post("/regsignup", async (req, res)=>{
   try{
    const register = new Signup(req.body)
    await register.save();
    console.log(req.body);
    await Signup.register (register,req.body.password);
    res.redirect("/api/employee")
   }
   catch(error){
    res.status(400).send({message: "failed to register user"});
    console.log(error);
   }
});
router.get("/employee", async(req, res)=>{
    try{
        let items = await Signup.find();
       res.render("employee.pug", {persons: items});
    }
    catch(error){
        console.log(error)
       return res.status(400).send({message: "sorry could not retrieve employee"})
    }
});
router.post("/employee/delete", async (req, res )=>{
    try{
        await Parker.deleteOne({_id: req.body.id});
        res.redirect("back");
    } 
    catch(error){
        res.status(400).send("unable to delete items from the database")
    }
});
router.get("/signup/edit/:id", async (req, res)=>{
    try{
        const emp = await Signup.findOne({
            _id:req.params.id
        })
        res.render("editemployee", {client:emp})
    }
    catch(error){
        res.status(400).send("could not find employee in database")
        console.log(error)
    }
});






module.exports = router
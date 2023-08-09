const express = require("express");
const Parker = require("../models/registerModels");


const router = express.Router();


// parking page route
router.get('/parking', (req, res)=>{
    res.render('parking.pug')
});

// parking page route
router.get('/form', (req, res)=>{
    res.render('registerform.pug')
});

router.post("/regregister", async (req, res) => {
    try{
        console.log(req.body);
        const client = new Parker(req.body);
        await client.save();
        console.log(req.body);
        res.redirect("/api/services");
    }
    catch(error){
        res.status(400).render("registerform.pug")
        console.log(error);
    }
});

    router.get("/report", async(req, res)=>{
        try{
            let items = await Parker.find();
            res.render("report.pug", {persons: items});
        }
        catch(error){
            console.log(error)
           return res.status(400).send({message: "sorry could not retrieve registered clients"})
        }
});

router.post("/form/delete", async (req, res )=>{
    try{
        await Parker.deleteOne({_id: req.body.id});
        res.redirect("back");
    } 
    catch(error){
        res.status(400).send("unable to delete items from the database")
    }
});

// how to update data
router.get("/form/edit/:id", async (req, res)=>{
    try{
        const emp = await Parker.findOne({
            _id:req.params.id
        })
        res.render("editregister", {client:emp})
    }
    catch(error){
        res.status(400).send("could not find employee in database")
        console.log(error)
    }
});
router.get("/report/edit/", async (req, res)=>{
    try{
        await Parker.findOneAndUpdate({_id:req.query.id},req.body);
        res.render("/form")
    }
    catch(error){
        res.status(400).send("could not find clients  in database")
        console.log(error)
    }
});









module.exports = router
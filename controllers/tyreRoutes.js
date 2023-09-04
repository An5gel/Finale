const express = require("express");
const TyreClients = require("../models/tyreModels")

const router = express.Router();


/// tyreform routes
router.get('/tyreform', (req, res)=>{
    res.render('tireform.pug')
});
// tyreform page route
router.get('/tyreform', async (req, res)=>{
    req.session.user = req.user
   let UserID = req.session.user.username;
   console.log(req.session.firstname)
   const clinic = await TyreClients.countDocuments();
 
let receiptid = "T-00"+ clinic
    res.render('tireform.pug', {UserID, receiptid})
});

router.post("/tyreform", async (req, res) => {
    try{
        console.log(req.body);
        const client = new TyreClients(req.body);
        await client.save();
        console.log(req.body);
        res.redirect("/api/tyreReport"); 
    } catch(error){
        res.status(400).render("tireform.pug")
        console.log(error);
    }
});

router.get("/tyreReport", async(req, res)=>{
    try{
     let items = await TyreClients.find();
     let price = await TyreClients.aggregate([
            { $group: { _id: "$all", totalPrice: { $sum: "$price" } } },
          ]);
          
      console.log(price);
          res.render("tyreReport.pug", { persons: items, allPrices: price[0].totalPrice});
          
    }
    catch(error){
        console.log(error)
       return res.status(400).send({message: "sorry could not retrieve registered clients in tireclinic"})
    }
});
router.post("/tyreReport/delete", async (req, res )=>{
try{
    await TyreClients.deleteOne({_id: req.body.id});
    res.redirect("back");
} 
catch(error){
    res.status(400).send("unable to delete items from the database")
}
});

// how to update data
router.get("/tyreform/edit/:id", async (req, res)=>{
try{
    const emp = await TyreClients.findOne({
        _id:req.params.id
    })
    res.render("edittyreregister", {client:emp})
}
catch(error){
    res.status(400).send("could not find employee in database")
    console.log(error)
}
});
router.post("/tyreReport/edit/", async (req, res)=>{
try{
    await TyreClients.findOneAndUpdate({_id:req.query.id},req.body);
    res.redirect("/api/tyreReport")
}
catch(error){
    res.status(400).send("could not find clients  in database")
    console.log(error)
}
});
// tyrereceipt route
router.get("/tyrereceipt/:id", async (req, res)=>{
    try{
        const client = await TyreClients.findOne({
            _id:req.params.id
        })
        console.log(client)
        res.render("tyrereceipt.pug", {client})
    }
    catch(error){
        res.status(400).send("could not find receipt in database")
        console.log(error)
    }
});








module.exports = router
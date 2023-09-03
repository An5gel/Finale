const express = require("express");
const TyreClients = require("../models/tyreModels")

const router = express.Router();


/// tyreform routes
router.get('/tyreform', (req, res)=>{
    res.render('tireform.pug')
});
// tyreform page route
router.get('/tyreform', (req, res)=>{
    req.session.user = req.user
   let UserID = req.session.user.username;
   console.log(req.session.firstname)
    res.render('tireform.pug', {UserID})
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
        let items= ""
        let price = 0
        req.session.user = req.user
        let UserID = req.session.user.username;
        console.log(UserID)
        console.log(req.session.user.role)
        if(req.session.user.role === "attendant"){
            items = await TyreClients.find({employeeId: UserID});
            console.log(items)
       
            items.forEach((element) => {
            price += element.price

            });

        } else {
           items = await TyreClients.find();
          let priceData = await TyreClients.aggregate([
            { $group: { _id: "$all", totalPrice: { $sum: "$price" } } },
          ]);
          price = priceData[0].totalPrice
        }
        
         
         
          res.render("tyreReport.pug", { persons: items, allPrices: price });
          
    }
    catch(error){
        console.log(error)
       return res.status(400).send({message: "sorry could not retrieve registered clients in tyre section"})
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
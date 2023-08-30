const express = require("express");
const Parker = require("../models/registerModels");


const router = express.Router();


// parking page route
router.get('/parking', (req, res)=>{
    res.render('parking.pug')
});

// parking page route
router.get('/form', (req, res)=>{
    req.session.user = req.user
   let UserID = req.session.user.username;
   console.log(UserID)
    res.render('registerform.pug', {UserID})
});

router.post("/regregister", async (req, res) => {
    try{
        console.log(req.body);
        const client = new Parker(req.body);
        await client.save();
        console.log(req.body);
        res.redirect("/api/report"); 
    } catch(error){
        res.status(400).render("registerform.pug")
        console.log(error);
    }
});
    // router.post("/addFields", async (req, res) => {
    //     const id = req.session.user.parker.id;
    //     // Get the name and email from the form
    //     const { service, price } = req.body;
    //     // Add them to the parker's document
    //     await Park.findOneAndUpdate(id, { $set: {service, price } });
    //   });
      
   


    router.get("/report", async(req, res)=>{
        try{
            let items= ""
            let price = 0
            req.session.user = req.user
            let UserID = req.session.user.username;
            console.log(UserID)
            console.log(req.session.user.role)
            if(req.session.user.role === "attendant"){
                 items = await Parker.find({employeeId: UserID});
                 console.log(items)
           
                items.forEach((element) => {
                price += element.price
   
                });

            } else{
               items = await Parker.find();
              let priceData = await Parker.aggregate([
                { $group: { _id: "$all", totalPrice: { $sum: "$price" } } },
              ]);
              price = priceData[0].totalPrice
            }
            
             
              console.log(price);
              res.render("report.pug", { persons: items, allPrices: price });
        }
        catch(error){
            console.log(error)
           return res.status(400).send({message: "sorry could not retrieve registered clients"})
        }
});

router.post("/report/delete", async (req, res )=>{
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
        res.status(400).send("could not find client in database")
        console.log(error)
    }
});
router.post("/report/edit/", async (req, res)=>{
    try{
        await Parker.findOneAndUpdate({_id:req.query.id},req.body);
        res.redirect("/api/report")
    }
    catch(error){
        res.status(400).send("could not find clients  in database")
        console.log(error)
    }
});









module.exports = router
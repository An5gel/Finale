const express = require("express");
const router = express.Router();
const passport = require("passport")

router.get('/login', (req, res)=>{
    res.render('login.pug')
});
router.post("/login", passport.authenticate("local",
{failureRedirect: "/api/login"}), 
(req, res)=> {
    req.session.user = req.user
   let loggedinUser = req.session.user.firstname;
   console.log(loggedinUser)
   res.redirect("/api/services");
});

router.get("/logout", (req, res)=>{
    req.session.destroy(()=>{res.redirect("/api/login")});
    console.log("you have been loggedout")
})


module.exports = router
// login routes
// router.get("/login", (req, res) =>{
//     res.render("login.pug")
// });
// router.post("/login", passport.authenticate("local",
// {failureRedirect: "/api/login"}), 
// (req, res)=> {
//     req.session.user = req.user
//    let loggedinUser = req.session.user.firstname;
//    console.log(loggedinUser)
//    if(req.session.user.role === "director"){
//         res.render("director.pug")
//     }
//    if(req.session.user.role === "manager"){
//         res.render("manager.pug", {loggedinUser})
//     }
//    if(req.session.user.role === "attendant"){
//         res.render("attendant.pug")
//     }

// });





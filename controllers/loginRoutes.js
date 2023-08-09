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




module.exports = router
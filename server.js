const express = require("express");
const path = require("path")
require('dotenv').config();
const passport =require("passport")
// importing our database
const connectDB = require("./config/dbconfig");
const port = process.env.PORT || 4000;

const app = express();

const Signup = require("./models/signupModels");
 
// importing parkingRoutes
const landingRoutes = require('./controllers/landingRoutes')
const parkingRoutes = require('./controllers/parkingRoutes')
const signupRoutes = require('./controllers/signupRoutes')
const loginRoutes = require('./controllers/loginRoutes')
const tabRoutes = require('./controllers/tabRoutes')


// calling and setting express session
const expressSession = require("express-session")({
  secret: "secret", 
  resave: false,
  saveUninitialised: false
})

app.use(express.urlencoded({ extended:false }));
app.use(express.json())

// calling the confuguration to run
connectDB();

// setting up pug as our view engine
app.engine("pug", require("pug").__express);
app.set("view engine","pug");
app.set("views", path.join(__dirname, "views/pug"));

// using expresssession
app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session());

passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser());
passport.deserializeUser(Signup.deserializeUser());

 
// setting up directory for static files
app.use(express.static(path.join(__dirname, 'public')))


//  using imported routes
app.use('/api', landingRoutes)
app.use('/api', parkingRoutes)
app.use('/api', signupRoutes)
app.use('/api', loginRoutes)
app.use('/api', tabRoutes)


// running the server on a specific port(3000)
// this is always the last line in the server file
app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

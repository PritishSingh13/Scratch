const express = require("express");
const router = express.Router();
const {registerUser , loginUser } =  require("../controllers/authController")

router.get("/" , function(req,res){
    res.send("hey its working");
});


router.post("/register", registerUser);  //register user is in authcontroller

router.post("/login" , loginUser);
  
module.exports = router;


const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedIn");
const productmodel = require("../models/productmodel")
router.get("/",function(req,res){
    let error = req.flash("error");
    res.render("index", {error});
});

router.get("/shop", isLoggedin, async function(req, res) {
   res.render("shop");
});
module.exports = router;



//this is the ('/') slash page
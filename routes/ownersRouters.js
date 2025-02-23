const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownermodel");

if (process.env.NODE_ENV === "development") {
    router.post("/create", async function(req, res) {


        // Extract form data from req.body
        let { fullname, email, password } = req.body;


        // Create a new owner
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        });

        // Send the created owner as JSON
        res.status(201).send(createdOwner);
    });
}




 router.get("/", function(req, res) {
     res.send("hey its working");
 });

module.exports = router;

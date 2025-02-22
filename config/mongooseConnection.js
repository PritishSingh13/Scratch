const mongoose = require("mongoose");
const config = require("config");
const debuggr = require("debug")("development:mongoose");

mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    debuggr("connected");
})
.catch(function(err){
    debuggr(err);
})

mongoose.exports = mongoose.connection;
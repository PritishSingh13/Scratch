const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
    fullname : String,
    email : String ,
    password : String , 
    cart :{
        type:Array,     //use this method to write 
        default:[]               //for array part if your type is array
        
    },
  
    orders: {
        type: Array,
        default:[]
    },
    contact : Number, 
    picture : String,

});

module.exports = mongoose.model("user", userSchema);
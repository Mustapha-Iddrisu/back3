const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
   name: {
    require:true,
    type:String
    },

   email:{
    require: true,
    type: String
   },

   city:{
    require: true,
    type: String
   }
})

const User_Db = mongoose.model("user",userSchema);
module.exports = User_Db
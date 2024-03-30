const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    
    emailAddress : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
},{timestamps : true,versionKey : false});

const Contact = mongoose.model("UserSignUp",contactSchema);

module.exports = User;
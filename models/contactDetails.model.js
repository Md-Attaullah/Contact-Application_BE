const mongoose = require("mongoose")


const contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    phoneNumber : {
        type : Number,
        unique : true,
        required : true,
        minLenght: 9,
        maxLenght: 10,
    },
    emailAddress : {
        type : String,
        required : true,
    },
    organization : {
        type : String,
        required : true,
    },
},{timestamps : true,versionKey : false});

const Contact = mongoose.model("Contact_LIst",contactSchema);

module.exports = Contact;
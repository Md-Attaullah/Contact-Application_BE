contact_controller = require("../controllers/contact.controller")
const express = require("express");
const { getAllContact, postCreateContact, putUpdateContact, deleteContact ,getContactById } = require("../controllers/contact.controller");
const router = express.Router();


module.exports = (app)=>{

    app.get("/contact/api/v1/contactList",getAllContact)

    app.get("/contact/api/v1/contactList/:id",getContactById)

    app.post("/contact/api/v1/contactList",postCreateContact)

    app.put("/contact/api/v1/contactList/:id",putUpdateContact)

    app.delete("/contact/api/v1/contactList/:id",deleteContact)

}
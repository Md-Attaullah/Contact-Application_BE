const express = require("express")
const mongoose = require("mongoose");
const app = express()
const server_config = require("./configs/server.config");
const db_config = require("../ContactApp/configs/db.config")
const Contact_Model = require("./models/contactDetails.model")



app.use(express.json())

mongoose.connect(db_config.DB_URl)



const db = mongoose.connection

db.on("err",()=>{
    console.log("Error while connecting to the MongoDB");
})

db.once("open",()=>{
    console.log("connected to the MongoDB");
})

require("./routes/contact.route")(app)

app.listen(server_config.PORT,()=>{
    console.log("Server Start : ",server_config.PORT);
})
const express = require('express');
const app = express();
const mongo = require('mongoose');
const morgan = require('morgan');
const router = require('./routes')



const port = 27017
const url = "mongodb://localhost:" + port + "/mytasks"


app.use(morgan("default"));


mongo.connect(url,  { useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
    app.use("/", router)
    app.use(express.json())
    console.log("BBDD URL: " + url +" Conextion success")
}) 


app.listen(port, ()=> console.log("Servidor escuchando en puerto " + port));

const db = mongo.connection;


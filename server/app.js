const express = require('express');
const mongoose = require('mongoose');
const resume = require('./routes/resume');

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost/my_db_name", { useNewUrlParser:true })  // this returns promise
    .then(()=> console.log("Connected to Mongodb"))
     .catch(()=> console.log("Could not connect to Mongodb"));

app.use('/resume',resume);

app.listen(9000,()=>console.log("Listenig on  port 9000"));
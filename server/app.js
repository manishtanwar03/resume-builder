const express = require('express');
const mongoose = require('mongoose');
const resume = require('./routes/resume');
const user = require('./routes/user');


const port = 9000;
const app = express();
app.use(express.json()); 

app.get('/', (req, res) => {
      res.send('Hello From Server');
    });

app.use(express.json());

mongoose.connect("mongodb://localhost/my_db_name", { useNewUrlParser:true })  // this returns promise
    .then(()=> console.log("Connected to Mongodb"))
     .catch(()=> console.log("Could not connect to Mongodb"));
app.use('/user',user);
app.use('/resume',resume);

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
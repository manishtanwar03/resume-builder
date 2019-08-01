const express = require('express'); //1.starting  setting up express server
const mongoose = require('mongoose');
const resume = require('./routes/resume');
const user = require('./routes/user'); //2   telling server to use user route 
// const cors = require('cors');

const port = process.env.PORT // port server will listen on

const app = express(); //1.instance of express
app.use(express.json());
// app.use(cors());

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true }) // this returns promise
    .then(() => console.log("Connected to Mongodb"))
    .catch(() => console.log("Could not connect to Mongodb"));

app.use('/user', user); //2
app.use('/resume', resume);

app.listen(port, function() { //1.
    console.log("Server running on localhost:" + port);
});
const express = require('express'); //1.starting  setting up express server
const mongoose = require('mongoose');
const resume = require('./routes/resume');
const user = require('./routes/user'); //2   telling server to use user route 
const cors = require('cors');


const port = 9000;
const app = express(); //1.instance of expree
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://tanwar:tiger@1@eventsdb-45omb.mongodb.net/rizoom?retryWrites=true&w=majority", { useNewUrlParser: true }) // this returns promise
    .then(() => console.log("Connected to Mongodb"))
    .catch(() => console.log("Could not connect to Mongodb"));

app.use('/user', user); //2
app.use('/resume', resume);

app.listen(port, function() { //1.
    console.log("Server running on localhost:" + port);
});
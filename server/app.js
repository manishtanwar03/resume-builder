const express = require('express'); //1.starting  setting up express server
const mongoose = require('mongoose');
const resume = require('./routes/resume');
const user = require('./routes/user'); //2   telling server to use user route 
const cors = require('cors');
const content = require('./routes/content');
const share_resume = require('./routes/share-resume');

const port = process.env.PORT // port server will listen on

const app = express(); //1.instance of express
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost/resume_builder", { useNewUrlParser:true })  // this returns promise
    .then(()=> console.log("Connected to Mongodb"))
     .catch(()=> console.log("Could not connect to Mongodb"));

// mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true })
//     .then(() => console.log("Connected to Mongodb"))
//     .catch(() => console.log("Could not connect to Mongodb"));

app.use('/user', user); //2
app.use('/resume', resume);
app.use('/shared',share_resume);
// app.user('/content', content);

app.listen(port, function() { //1.
    console.log("Server running on Port: " + port);
});
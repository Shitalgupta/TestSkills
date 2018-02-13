const mongoose= require('mongoose');
const express= require('express');
const bodyParser= require('body-parser');
const router = require ('./routes/router');


var app = express();

// connect to db
mongoose.connect("mongodb://localhost/SkillSearch");
var db=mongoose.connection;

//checking for any error while connc=ecting database
db.on ('error', () => {
  console.log(err);
})

db.on ('open', () => {
  console.log('Db is connected successfully..');
})

//load body-Parser middleware
app.use(bodyParser.json());

//load router middleware
app.use('/api',router);

app.get('/api', function(req,res){
  res.send("Welcome to Skill search website");
});

//start server at 3000 port
app.listen(3000, function(){
  console.log("connected to server");
});

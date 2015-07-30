var config = require('./config/config');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var db = mongoose.connect(config.databasestring,function(err){
        if(err)
                    throw err;
}); //bookAPI is the name of the database

//Include body parser for posting data
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


 //Object of the model
 var Books = require('./models/bookModel');

 var port = process.env.PORT || 6000;


 //Books are passes as the parameter so that bookRouter read the Books object
 var bookRouter = require('./Routes/bookRoutes')(Books);


 //all requests for the Books are rediredtes to the bookRouter
 app.use('/api/Books',bookRouter);
 app.get('/',function(req,res){
         res.send("SomeOne is trying to access the application which is running inside the container");
 });

 app.listen(port,function(){
        console.log('Grunt is running on port: ' + port);
});

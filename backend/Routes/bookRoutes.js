var express = require('express');
var routes = function(Books){
    
  var bookRouter = express.Router();

   // var Books = require('../models/bookModel');
        
    bookRouter.route('/')   // /Books are removed and put into the app.js file
        .get(function(req,res){

        var query = req.query;
          Books.find(query,function(err,books){
              if(err)
                  res.status(500).send(err);
              else
                  res.json(books);
                });
    });

    //Search book by ID
    // /Books are reoved and put into the app.js file
    bookRouter.route('/:bookId')
        .get(function(req,res){
        Books.findById(req.paramsbookId,function(err,data){
            if(err)
                res.status(500).send(err);
            else{
		console.log("inside get by id router");
                res.json(data);
     }
        });
    });

    //posting Book 
    // /Books are reoved and put into the app.js file
    bookRouter.route('/')
        .post(function(req,res){
        //saving book in to book and new Boos is the model which save data
          var book = new Books(req.body);
        book.save();
        res.status(201).send('Book Saved');
        });
    
    //Updating Data
     bookRouter.route('/:bookId')
     .put(function(req,res){
        Books.findById(req.params.bookId,function(err,data){
            if(err)
                res.status(500).send(err);
            else
                data.title = req.body.title;
                data.author = req.body.author;
                data.genre = req.body.genre;
                data.read = req.body.read;
                data.save();
                res.json(data);
        });
    });
    
    //Deleting Data
    bookRouter.route('/:bookId')
    .delete(function(req,res){
        Books.findById(req.params.bookId,function(err,data){
            if(err)
                res.status(500).send(err);
            else
                data.remove();
            res.status(201).send("Removed");
        });
     });
    
    
        return bookRouter;
    };
    module.exports= routes;

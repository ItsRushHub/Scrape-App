// Set up my dependencies
var express = require("express");
var expressHandlebars = require("express-handlebars");
// var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var bodyParser = require("body-parser");

// Require all models
// var db = require("./models");

// Port to find the app
var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Router Express setup
var router = express.Router();

// Router Config setup
require("./config/routes") (router);



// Use the public folder for static info
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars ({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Parse request body as JSON
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect the mongoose to the database
mongoose.connect(db, function(error) {
    if (error) {
        console.log(error);
    }
    
    else {
        console.log("connection successful");
    }
});








// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
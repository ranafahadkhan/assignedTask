// creating node server

// adding required module - express
var express = require('express');
var app = express();

// directory
app.use(express.static(__dirname + "/public"));

// writing a function and putting some data in JSON format
app.get('/task', function (req, res) {
	console.log("I received a GET request.")

    assignmentDetails = {
        whatWasTheTask: "This was the task",
        whoAssignedTheTask: "assigned by Async Technologies."
    };

    var textToDisplay = [assignmentDetails];
    res.json(textToDisplay);

});

// setting port to 3000
app.listen(3000);
console.log("Server running on PORT : 3000");
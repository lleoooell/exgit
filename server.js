console.log("hello server");
console.log("hello nodemon");

var http = require('http');
var _ = require('lodash');

var fs = require('fs');

var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/", function(req, res){
	res.sendFile("./index.html", { root: __dirname });
});
app.get("/api/people", (req, res, next) => {
    res.json([{
        "name": "John",
        "age": 30,
        "cars": ["Ford", "BMW", "Fiat"]
    }, {
        "name": "Tom",
        "age": 24,
        "cars": ["Ford", "Toyota", "BMW"]
    }, {
        "name": "Emma",
        "age": 34,
        "cars": ["Ford", "BMW", "Fiat"]
    }, {
        "name": "Jack",
        "age": 29,
        "cars": ["Jeep", "Mustang", "mehari"]
    }, {
        "name": "Sophie",
        "age": 25,
        "cars": ["Mini", "Fiat", "Mercedes"]
    }]);
});
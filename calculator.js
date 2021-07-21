//jshint esversion:6


const express=require("express");
const bodyParser=require("body-parser");


const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.post("/", function(req, res){
var number1 = Number(req.body.num1);
var number2 = Number(req.body.num2);
var result=number1 + number2;
res.send("The result is " + result);
});

app.listen(3000);
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.get("/azur" , function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/azur" ,function(req, res){
  var weight=Number(req.body.weight);
  var height=Number(req.body.height);
  var result=weight / (height* height);
  res.send("Your BMI is: " + result);
});

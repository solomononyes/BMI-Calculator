const express = require("express");
// const bodyParser = require("body-parser");


const app = express();
app.use(express.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/", function(req,res){

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
});
app.post("/bmiCalculator", function(req,res){

  var weight = Number(req.body.wt);
  var height = Number(req.body.ht);

  var resultBMI = weight/(height^2);
  res.send("The result of the calculation is " + resultBMI);
});
app.listen(3000, function(){
  console.log("server has started at 3000");
});
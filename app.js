const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();



app.set('view engine','ejs');
app.use(express.static("public"));



app.get("/",function(req,res){
  res.render("home");
});

// to set headings
let headContent=["PlayList 1","PlayList 2"];



// to get imgages
let URlimg=["th (2).jpg","th (3).jpg"]



// handling requests at different routes
app.get("/playlist",function(req,res){
  res.render("playlist",{head:headContent[0],URL:URlimg[0]});
});
app.get("/PlayList2",function(req,res){
  res.render("PlayList2",{head:headContent[1],URL:URlimg[1]});
});


app.listen(3000,function(req,res){
  console.log("server started at port 3000");
});

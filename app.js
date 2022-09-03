const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();
const jsdom=require("jsdom")
const dom=new jsdom.JSDOM("")
const jquery=require('jquery')(dom.window)
const date=new Date();
var hours=date.getHours();
var wish="";

if(hours>12&&hours<18){
  wish="Good Afternoon";
}
else if(hours>18&&hours<24){
  wish="Good Evening";
}
else if(hours>0&&hours<12)
{
  wish="Good Morning";
}
else hours="Good night";

app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home",{wish:wish});
});

// to set headings
let headContent=["PlayList 1","PlayList 2"];

// to get imgages
let URlimg=["th (2).jpg","th (3).jpg"]

// handling requests at different routes
app.get("/playlist",function(req,res){
  res.render("playlist",{head:headContent[0],URL:URlimg[0]});
  // $('li').on("click",function(event){
  //   $(event.target.className).addClass("this");
  // })
});

// jquery("item").on("click",function(){
//   this.addClass("this");
// });


app.get("/PlayList2",function(req,res){
  res.render("PlayList2",{head:headContent[1],URL:URlimg[1]});
});

app.listen(3000,function(req,res){
  console.log("server started at port 3000");
  console.log(hours);
});

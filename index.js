var express = require('express');
var app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');  
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/info",(req,res)=>{
    res.render("info");
})
app.get("/guid",(req,res)=>{
    res.render("guid");
})
app.listen(5768,()=>{
    console.log("Server Running In 5768");
})
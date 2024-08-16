const  express = require("express");
const app = express();

app.get("/hi1",(req,res)=>{
   res.send("hello  lazhar time 1  ");
})
app.get("/hi2",(req,res)=>{
    res.send("hello lazhar  time 2 ");
 })
 app.get("/hi3",(req,res)=>{
    res.send("hello lazhar time 3 ");
 })
 app.get("/hi4",(req,res)=>{
    res.send("hello lazhar time 4 ");
 })

app.listen(3000,()=>{
    console.log("we listen to port 3000");
})

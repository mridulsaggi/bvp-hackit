const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const port=3000;
// console.log(path.join(__dirname))
app.use(express.static(path.join(__dirname)));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});
app.get("/bvp-hackit/quiz",(req,res)=>{
    res.sendFile(path.join(__dirname,'quiz.html'));
});
app.get("/bvp-hackit/videolink",(req,res)=>{
    res.sendFile(path.join(__dirname,'index3.html'));
});
app.get("/bvp-hackit/workshops",(req,res)=>{
    res.sendFile(path.join(__dirname,'index5.html'));
});
app.listen(port,()=>{
    console.log("app running successfully on port %d",port);
});

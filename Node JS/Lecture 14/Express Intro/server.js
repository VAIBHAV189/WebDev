const express=require('express');
const server=express();

server.get('/',function(req,res)
{
    res.send("hello there");
});

server.get('/greet',(req,res)=>
{
    res.send(`Good-${req.query.name}! ${req.query.day}`);
});

server.get('/greet/:name',function(req,res){
    let name=req.params.name;
    res.send("How are you "+name+" ?");
});

server.get('/greet/:name/:day',function(req,res){
    let name=req.params.name;
    let day=req.params.day;
    res.send("Good "+day+" "+name);
});

// console.log(__dirname+"/index.html");
server.get('/file',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

server.get('/server.js',(req,res)=>{
    res.send(`console.log("Hello World")`);
})
//We cant use port from 0 to 1024 as they are already in use.
server.use('/staticfile',express.static(__dirname+'/static'));
//If we update index.html then we dont need to restart the server as changes are made in html content
//But if we change the name of html file then we need to restart
server.listen(5300,function(req,res)
{
    console.log("Server working properly");
});
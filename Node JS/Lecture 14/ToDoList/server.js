const express=require('express');
const app=express();

app.use('/',express.static(__dirname+'/public'));
let todos=[];
app.get('/todos',(req,res)=>{
    res.send(todos);
});
//Updation 


//Deletion



app.get('/addtodo',(req,res)=>{
    todos.push(req.query.newtodo);
    // res.redirect('/todos');  
    res.send('success');
})

app.get('/deletetodo',(req,res)=>
{
    let index=-1;
    for(let i=0;i<todos.length;i++)
    {
        if(todos[i]==req.query.del)
        {
            index=i;
        }
    }
    let message="";
    if(index!==-1)
    {
        todos.splice(index,1);
        message="removed successfully";
    }
    else
        message="removal failed";

    res.send(message);
})

app.get('/updatetodo',(req,res)=>{
    let purana=req.query.purana;
    let naya = req.query.naya;
    let response="";
    for(let i=0;i<todos.length;i++)
    {
        if(todos[i]==purana)
        {
            todos[i]=naya;
            response="Updated";
            break;
        }
    }
    if(response==="Updated")
    {
        res.send("updated");
    }
})

app.listen(5300);
const express=require('express');
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(__dirname+'/public'));


//AJAX (content is changed without refreshing)

let todolist=[];    // {name:abcd  priority:xyz}
 
app.get('/todos',(req,res)=>
{
    
    res.send(todolist);
})

app.post('/todos',(req,res)=>
{
    console.log(req.body.name);
    todolist.push(
        {
            name: req.body.name,
            priority:+(req.body.priority ||1)
        }
    )
    res.send(
        {
            todoid:todolist.length,
            success:"true"
        })
})

app.listen(5300,()=>
{
    console.log("server started successfully");
})
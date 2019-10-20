const express=require('express');
const app=express();

app.set('view engine','hbs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.all('/task',(req,res)=>{
//     res.send();

// })

let tasklist=[]; //{name: ,priority:}
app.get('/tasks',(req,res)=>{
    res.render('todos',{
        title:'Learn Hbs',
        tasklist
    });
})

app.post('/tasks',(req,res)=>{
    tasklist.push(
        {
            name: req.body.name,
            priority: +(req.body.priority)
        });

        res.redirect('/tasks');
})
app.listen(5300,()=>{
    console.log("Server started succesfully");
})
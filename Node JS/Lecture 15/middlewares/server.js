//JAVA-SCRIPT-OBJECT-NOTATION (JSON)

const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));//extended ki jagah light bh kar sakta hu ... ascii use karta hai light(emojis support nhi karega aur dusri lang bh nhi)

function m1(req,res,next)
{
    console.log('Running m1');
    //We cannot respond to a request more than 1 time so we need to make sure response is ony sent once
    //Agar hum m=1 pe call karein to neeche get bh chal jayega aur wo bh response send kar dega jo ki error dega
    if(req.query.m==1)
    {
        res.send("welcome here"); 
    }
    else
    {
        next();
    }

    // Another way
    // if(req.query.m==1)
    // {
    //     return res.send("welcome here"); 
    // }
    //     next();
}

function m2(req,res,next)
{
    console.log('Running m2');
    next();
}

function m3(req,res,next)
{
    console.log('Running m3');
    next();
}


//ALL MIDDLEWARES RUN BY DEFAULT WITH SLASH 

//BY default m1 and m2 will run and on calling /bye three of them will run

//  /bye wala will work for /bye/xyz/...... etc
// / wala i.e default wala har jagah chalega
app.use(m1);
app.use(m2);
app.use('/bye',m3); //Works only when we call /bye

app.get('/',(req,res)=>
{
    res.send('Hello');
})

app.get('/bye',(req,res)=>{
    res.send("goodBye");
})

app.post('/bye',(req,res)=>{
    console.log(req.body);
    res.send('This is a post request');
})


app.listen(5300,()=>{
    console.log('server started');
})
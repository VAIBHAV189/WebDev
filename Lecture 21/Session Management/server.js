const express=require('express')
const session=require('express-session')
const app=express()

app.use((req,res,next)=>{
    console.log(req.session)
    next()
})
app.use(session({
    secret:"Some secret string",
    resave:false,
    saveUninitialised:true
}))

app.use((req,res,next)=>{
    console.log(req.session)
    next()
})

app.get('/hi',(req,res)=>{
    if(!req.session.hiCounter){
        req.session.hiCounter=0
    }
    
    if(req.session.hiCounter>0)
    {
        return res.send("Welcome Back")
    }
    if(req.session.byeCounter && req.session.byeCounter>0)
    {
        return res.send('Welcome back')
    }
    req.session.hiCounter++
    res.send('Hello World')
})

app.get('/bye',(req,res)=>{
    if(!req.session.byeCounter){
        req.session.byeCounter=0
    }
    req.session.byeCounter++
    if(!req.session.hiCounter)
    {
        return res.redirect('/hi')
    }
    res.send("See you again")
})
app.listen(4321,()=>{
    console.log("Server started ")
})
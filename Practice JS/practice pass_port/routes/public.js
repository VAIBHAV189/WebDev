const route=require('express').Router()

route.get('/',(req,res)=>{
    res.send("Visibile to all users")
})

module.exports=route

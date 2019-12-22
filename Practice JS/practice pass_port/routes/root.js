const route=require("express").Router()
const passport=require('../pass.js')
let Users=require('../db.js').Users
route.get('/login',(req,res)=>{
    res.render('login')
})

route.get('/signup',(req,res)=>{
    res.render('signup')
})
 
route.post('/signup',(req,res)=>{
    Users.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstName,
        lastname:req.body.lastName
    }).then((createdUser)=>{
        res.redirect('/login')
    })
})

route.post('/login',passport.authenticate('local',{
    failureRedirect:'/login',
    successRedirect:'/private'
}))

module.exports=route
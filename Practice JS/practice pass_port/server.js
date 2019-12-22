const express= require('express')
const session=require('express-session')
const passport=require('./pass.js')
const public=require('./routes/public.js')
const private=require('./routes/private.js')
const root=require('./routes/root.js')

const app=express()

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:'somesecretstring'
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/public',public)
app.use('/private',private)
app.use('/',root)
app.listen(5400,()=>console.log("Server running successfully at http://localhost:5400"))
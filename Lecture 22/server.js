//To remove some folder git rm -rf --cached node_modules

const express=require('express')
const {db}=require('./db')
const session=require('express-session')
const passport=require('./passport')

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:'dsfsdfdsfdsffsfsdaaw',
    resave:false,          //Baar baar cookie save karne ki jarurat nhi padegi
    saveUninitialized:true //requirement ho na ho cookie create kar dega
}))

//these two have to be used after creating secret string etc
app.use(passport.initialize()) //Jab bh post request ayegi to passport.authenticate k through ayegi
app.use(passport.session()) //jo bh session create karoge usmei encryption secret key k through hogi jo humne provide kari hai
app.set('view engine','hbs')

app.use('/signup',(require('./routes/signup').route))
app.use('/login',(require('./routes/login').route))
app.use('/profile',(require('./routes/profile').route))

app.get('/',(req,res)=>{
    res.redirect('login')
})
db.sync({alter:true}).then(()=>{
    app.listen(4321,()=>{
        console.log("http:///localhost:4321")
    })
})
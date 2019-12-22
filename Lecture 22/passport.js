//Login with some platform (OAUTH)  

const passport=require('passport')
const localStrategy=require('passport-local').Strategy
const FacebookStrategy=require('passport-facebook').Strategy

const {Users}=require('./db')

passport.use(new FacebookStrategy({
    clientID:'997743530578849',
    clientSecret:'25d69cacd9d87573787d4103845d6c98',
    callbackURL:'http://localhost:4321/login/facebook/callback' //Jab call back pe request ayegi authenticate hoke to function chalta hai
},async function(token,rt,profile,done){
    let user= await Users.findOne({
        where:{username:profile.displayName}
    })
    if(user)
    {
        done(null,user)
    }
    
    user=await Users.create({
        username:profile.displayName,
        fbId:profile.id,
        fbToken:token

    })
    done(null,user)
}))

//middlewares
passport.use(new localStrategy(
    function(username,password,done){
        Users.findOne({
            where:{username:username}
        }).then((user)=>{  //Agar query run karti hai to then chalega agar query ei error aata hai to catch chalega 
            if(!user) //agar user  null dala hai to
            {
                return done(null,false) //user nahi mila to uske liye false aur hum error nhi bhejte uski jagah null bhejte hain
            }
            if(user.password!=password)
            {
                return done(null,false)
            }
            done(null,user) //Agar sahi dala hai sab kuch to user pass kar do done 
        }).catch(done) // A way to pass err in done as an argument if error is caught 
    }
))

//Function of serialize k through agar user login karta hai to usko ek unique id di jati hai
//agar client 2 ne login kiya to client 2 add ho jayega apni id ke sath
//User-> Serialize() ->UserId We dont want to store everything on server rather we would use data saved in database

//deserialize karne se aap UserId doge to poori info mil jayegi user ka DB se
//it runs on every req (to get details of user)

//serialize will run in begining only
passport.serializeUser(
    function(user,done){
        done(null,user.id)
    }
)

passport.deserializeUser(
    function(userId,done){
        Users.findByPk(userId).then((user)=>{ //To search using userId which is unique for every user we use findByPk
            done(null,user)
        }).catch(done)
    }
)
module.exports=passport //passport mei ek strategy hai jo humei use karni hai
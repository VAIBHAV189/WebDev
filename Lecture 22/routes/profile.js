const route= require('express').Router()

//Agar passport k through authenticate kiya hai kisi user ko to req.user se uske details mil jate hai ya fir hum usko fetch kar sakte hain
route.get('/',(req,res)=>{
    //Agar user ne login nhi kiya to directly profile wale page pe nhi ja sakta hai
    if(!req.user){
        return res.redirect('login')
    }

    res.render('profile',{
        user:req.user
    })
})
module.exports={
    route
}
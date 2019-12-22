const Sequelize= require('sequelize')

const db=new Sequelize({
    dialect:'sqlite',
    storage:__dirname+'/users.db'

})

const Users=db.define('user',{
    username:{
        type:Sequelize.STRING(30),
        unique:true,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING(48),
        // allowNull:false
    },
    email:{
        type:Sequelize.STRING(50)
    },
    fbId:{
        type:Sequelize.STRING(30)
    },
    fbToken:{
        type:Sequelize.TEXT
    }   
})

module.exports={
    db,Users
}
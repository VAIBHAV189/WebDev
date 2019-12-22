const {MongoClient}=require('mongodb')
const DB_URL='mongodb://localhost:27017'

MongoClient.connect(DB_URL,(err,client)=>{
    if(err) throw err

    const testdb=client.db('testdb')

    const people=testdb.collection('people')

    people.insertOne({
        name:"WithoutCity", age:7,
    },(err,result)=>{
        if(err) throw err
        console.log(result)
    })    
    // people.insertMany([
    //     {name:'BACD',age:10,city:'Delhi'},
    //     {name:'CD',age:11,city:'Del'},
    //     {name:'BA',age:21,city:'hi'},
    //     {name:'BC',age:123,city:'Dei'},
    //     {name:'BD',age:132,city:'Di'}
    // ],(err,result)=>{
    //     if(err) throw err

    //     console.log(result)
    // })

    people.find({}).toArray((err,result)=>{
        if(err) throw err

        console.log(result)
    })

    // people.find({
    //     $or:[
    //         {age: { $gt:10}},
    //         {age:{$lt:9}}
    //     ]
    // })

    // people.remove(
    //     {age:{$lt:10}}
    // )
})


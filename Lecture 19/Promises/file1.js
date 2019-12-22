const fs=require('fs')
const path=require('path')

let file1=path.join(__dirname+'/in1.txt')
let file2=path.join(__dirname+'/in2.txt')
let file3=path.join(__dirname+'/sorted.txt')

function read(filename){
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,(err,data)=>{
            if(err) return reject(err)
            resolve(data)
        })
    })
}

function write(filename,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filename,data,(err)=>{
            if(err) return reject(err)
            else 
            resolve(data)
        })
    })
}

// read(file1)
//     .then((data)=>
//     {
//         let nums=data.toString().split('\n')
//         read(file2)
//             .then((data)=>
//             {
//                 nums=nums.concat(data.toString().split('\n'))
//                 nums.sort((a,b)=>(a-b))
//                 write(file3,nums.join('\n'))
//                     .then(()=>
//                     {
//                         console.log("Sorted Data")
//                     })
//             }
//     })


let nums = [] 
read(file1)
    .then((data)=>{
        nums = nums.concat(data.toString().split('\n'))
        return read(file2)
    })
    .then((data)=>{
        nums = nums.concat(data.toString().split('\n')) 
        nums.sort((a,b)=>(a-b)) 
        return write(file3,nums.join('\n'))        
    })
    .then(()=>{
        console.log('Done') 
    })
    .catch((err)=>{
        if(err) console.error(err) 
    })

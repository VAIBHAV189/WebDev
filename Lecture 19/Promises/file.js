const fs=require('fs')
const path=require('path')

let file1=path.join(__dirname+'/in1.txt')
let file2=path.join(__dirname+'/in2.txt')
let file3=path.join(__dirname+'/sorted.txt')
fs.readFile(
    file1,
    (err,data)=>
    {
        let nums=data.toString().split('\n');

        fs.readFile(
            file2,
            (err,data)=>{
                nums=nums.concat(data.toString().split('\n'));
                nums.sort((a,b)=>(a-b)) 
                fs.writeFile(file3,nums.join('\n'),(err)=>{
                    if(err) throw err;
                    console.log('Done');
                })
            }
        )
    }
)


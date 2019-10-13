const fs=require('fs');
const path=require('path');


console.log(__dirname);
let file=path.join(__dirname,'/Hello.txt');
fs.readFile(
    file,
    (err,data)=>{
        if(err) throw new Error("Could Not read this file");
        console.log(data.toString());
    }
)
// fs.writeFile(
//     file,
//     'Hello World!\n',
//     {
//         encoding:'utf8',
//         flag:'a'
//     },
//     (err)=>{
//         if(err)
//             throw err;
//         console.log('File Runs succesfully');
//     }
// )

console.log("Code is getting executed");
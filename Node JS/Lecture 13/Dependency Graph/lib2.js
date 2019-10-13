// const lib1=require('./lib1.js'); 
// console.log("Running lib2");

// b=20;
// module.exports=
// {
//     b,
//     lib1
// }

//Circular Dependency elimination

const lib1=require('./lib1.js');
console.log("Running lib2");
b=20;

module.exports.b=b;
module.exports.lib1=lib1;
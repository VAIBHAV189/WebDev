// const lib2=require('./lib2.js');
// console.log("Running lib1");

// a=20;
// module.exports=
// {
//     a,
//     lib2
// }

//Circular Dependency elimination

const lib2=require('./lib2.js');
console.log("Running lib1");

a=20;
const lib2=require('./lib2.js');
module.exports.a=a;
module.exports.lib2=lib2;
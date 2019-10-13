/* const lib1=require('./lib1.js');
const liba=require('./lib1.js');
const lib2=require('./lib2.js');

console.log(lib1);
console.log(liba==lib1);
console.log(lib2);

//To prevent calling of file more than once there is a map which is maintained such that on each require call it is checked whether there exists a
//A file with same name or not
// If a file with same name exists then only its export call is executed
*/

const lib1=require('./lib1.js');
const lib2=require('./lib2.js');

// console.log(lib1);
// console.log(lib2);
// console.log(lib1.lib2.lib1==lib1);

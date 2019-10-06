//x=10+2;   x=10+2 is an expression and 10+2 is statement

// x=10; x=(10); x=((10));  tokenisation

// (function sayHello(name)
// {
//     console.log(`Hello ${name}`);
// })('Harry');

//sayHello('Ron'); //This wont work as this function is not defined in this scope

// function math()
// {
//     console.log("3^4 = "+Math.pow(3,4));
//     console.log("root(4) = "+Math.sqrt(4));
//     console.log("sin(30) = "+Math.sin(30));
// }
// // math();

// (function (l,p,r,s)
// {
//     l("3^4 = "+p(3,4));
//     l("root(4) = "+r(4));
//     l("sin(30) = "+s(30))
// })(console.log,Math.pow,Math.sqrt,Math.sin);
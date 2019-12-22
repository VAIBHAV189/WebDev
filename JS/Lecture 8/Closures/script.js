// let x=0;
// function outerFun()
// {
//     let x=0;
//     function innerFun()
//     {
//         x++;
//         return x;
//     }
//     return innerFun;
// }

// let fun=outerFun();
// let fun1=outerFun();

// console.log(fun());
// console.log(fun());
// console.log(fun());

// console.log(fun1());
// console.log(fun1());
// console.log(fun1());
// console.log(fun1());
// console.log(fun1());

// //Anonymous object is created for each new funcn which has copy of each variable (these are called closures)
// console.log(fun());
// console.log(fun());

// //x is 0 for fun1 as fun1 and fun have diff closures
// console.log(fun1());
// console.log(fun1());
// console.log(fun1());

//Output
// 1
// 2
// 1
// 2
// 3


// function outerFun()
// {
//     let x=0;
//     function innerFun()
//     {
//         x++;
//         function innerMostFun()
//         {
//             x++;
//             return x;
//         }
//         return innerMostFun;
//     }
//     return innerFun;
// }
// let fun=outerFun();
// let funx=outerFun();

// let fun1=fun();
// let fun2=fun();
// let funx1=funx();

// //New closure is created for both fun1 and funx which are independent of each other
// console.log(fun1());
// console.log(fun1());
// console.log(fun1());

// console.log(fun2());
// console.log(fun2());

// console.log(funx1());
// console.log(funx1());

// // name=prompt('Enter your name');
// // // alert("Hello "+name);
// // console.log(name);  
// // name=10;

// //  -------------------------------------------------------- //

// // console.log(name);
// // const a=10;
// // // a=100;  //Cant assign new value to const variables
// // console.log(a);

// //  -------------------------------------------------------- //

// var a=10;
// a=100;
// console.log(a);

// let b=10;
// b=100;
// console.log(b);

// // Var - functional scope 
// //Let - block scope

// // ---------------------------------------------------------//
// let x=10;
// if(true)
// {
//     console.log(x);
//     x=20;
// }
// console.log(x);
// //  -------------------------------------------------------- //

// if(true)
// {
//     let u=10;
//     console.log(u);
//     u=20;
// }
// //  console.log(u); Agar ye karenge to undefined ayega 

// //  -------------------------------------------------------- //

// if(true)
// {
//     var v=30;
//     console.log(v);
//     v=20;
// }
// console.log(v);

// //  -------------------------------------------------------- //

// let p=10;
// function func()
// {
//     console.log(p);
//     p=20;
// }
// func();
// console.log(p);

// //  -------------------------------------------------------- //

// function func()
// {
//     let q=10;
//     console.log(q);
//     q=20;
// }
// func();
// // console.log(q); not defined ayega

// //  -------------------------------------------------------- //

// function func()
// {
//     var s=10;
//     console.log(s);
//     s=20;
// }
// func();
// // console.log(s); Idhar bh undefined ayega kyuki scope of 's' is defined within the function 

// //  -------------------------------------------------------- //

// function func(){
//     let c=10;
//     if(true){
//         let c=30; //ye wala chal jayega aur 30 de dega
//         console.log(c);
//         // Ye error dega kyuki let b naya wala bnne se pehle use ho raha
//         // let b=30;
//         c=20;
//     }
// }
// func();

// //  -------------------------------------------------------- //

// function func(){
//     var t=10;
//     if(true)
//     {
//         console.log(t);
//         // var t=20;
//         t=30;
//     }
// }
// func();
// //  -------------------------------------------------------- //

// function func(){
//     if(true)
//     {
//         console.log(r);
//         var r=20;
//         r=30;
//     }
// }
// func();

// //  -------------------------------------------------------- //

// //Make a string
// //Escape characters

// // 'use strict' ye use karke koi bh variable bina var aur let k use nhi kar paoge
// let str="Hello \"World\"";
// console.log(str);
// str='Hello "World!"';
// console.log(str);

// console.log(typeof(str));

// str='h';
// console.log(typeof(str));

// //  -------------------------------------------------------- //

// let obj={
//     y:10,
//     z:"Hello World",
//     d:14.5
// }
// obj.e=true;
// console.log(obj);

// let obj1={
//     y:10,
//     z:"Hello World",
//     d:10.11,
//     '':'empty',
//     ' ':true
// }
// console.log(obj1);
// console.log(obj1[' ']);
// console.log(obj1['']);

// //Use objects as hashmaps

// //  -------------------------------------------------------- //

// // Arrays

// let arr=["hello",0,1,'h',4];
// console.log(arr);
// console.log(arr[0]);
// arr.push(false);
// arr.pop();
// console.log(arr);

// arr.push("true");

// arr.unshift('Dummy'); //Adds Element at begining

// arr.shift(); //Removes element from begining
// console.log(arr);

// for(var i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// //  -------------------------------------------------------- //

// //REPL-Read Evaluate Print Loop (order)
// let l=10;
// //Ye console mei undefined ayega
// l=20; 
// // Ye 20 dega

// //  -------------------------------------------------------- //

// let ab=10;
// let bc=10.11;
// let cd='hello';
// let de='h';
// let ef=true;
// let obj2={f:10,g:20};
// console.log(typeof(ab));
// console.log(typeof(bc));
// console.log(typeof(cd));
// console.log(typeof(de));
// console.log(typeof(ef));
// console.log(typeof(obj2));

// //  -------------------------------------------------------- //

// // String + Number= String
// let a1='10'+1;
// console.log(a1);

// //Subtraction Numbers mei hoga idhar string ki tarah kaam nhi chalega
// let b1='10'-1;
// console.log(b1);

// //Ye NaN de dega    
// let b2='Hello'-1;
// console.log(b2);

// //Left to right hota hai agar subtraction ho raha ho sath mei string ho to

// let b3='10'+1-1;
// console.log(b3);

// let b4='10'+1+1;
// console.log(b4);

// //Equality Operators
// console.log(1==1);
// console.log(1=='1');

// console.log(1==='1'); //False

// //Empty array spaces all are equal to 0
// console.log(0==[]);
// console.log(0=='\t');
// console.log(0=='\n');

// //Comparing two strings will give false
// console.log('\t'=='\n');

// console.log([]=='\t'); //[] Ye empty string deta hai conversion se
//Conversion Table
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// let ar1=[10,20,30];
// console.log(ar1);
// console.log(ar1==[10,20,30]); //memory ka ref same nhi hai isliye false de raha hai wo
// let ptr=ar1;
// console.log(ptr==ar1); //Ye true dega kyuki same jagah pointer hain

//----------------------------------------------------------------------------------//

// Call By value and ref

// let c1=10,d1=20;
// console.log(c1,d1);
// function swap(c1,d1){
//     let temp=c1;
//     c1=d1;
//     d1=temp;
// }
// swap(c1,d1);
// console.log(c1,d1);

// let ar2=[10,20];
// console.log(ar2[0],ar2[1]);
// function swap1(ar2){
//     let temp=ar2[0];
//     ar2[0]=ar2[1];
//     ar2[1]=temp;
// }
// swap1(ar2);
// console.log(ar2[0],ar2[1]);

//---------------------------------------------------//

// console.log([]+{});     //[object Object]
// console.log({}+[]);     // 0


// console.log(+'1');
// console.log(+'34');
// console.log(+"Hello"); //NaN

// console.log([].toString()); //Empty String
// console.log([10,20].toString());
// console.log(([[],[]]).toString()); //Empty String, Empty String    
// console.log(+[[],[]]) ;  //NaN
// console.log((Number('H'))); //NaN

//--------------------------------------------------//

//Parseint (space tak int number le lega)

// let a4=parseInt('11 11.11');
// console.log(a4);

// //space tak float number
// a4=parseFloat('11.11 11.2');
// console.log(a4);

// console.log(0/0); //NaN

// console.log(Infinity-Infinity); //Ye NaN dega but normal Infinity Infinity h dega 

// console.log(Infinity);

//------------------------------------------------//

// function add(x1,y1,z1)
// {
//     return x1+y1+z1;
// }

// console.log(add(10)); //undefined hote hain variables agar value na di ho to
// console.log(add(10,20)); //undefined
// console.log(add(10,20,30));

function add1(x1=0,y1=0,z1=0)
{
    return x1+y1+z1;
}


console.log(add1(10));
console.log(add1(10,20));
console.log(add1(10,20,30));

//----------------------------------------------//
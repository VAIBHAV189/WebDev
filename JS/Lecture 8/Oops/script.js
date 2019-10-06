// let a=
// {
//     k:1,
//     l:'Hello',
//     m:true
// }

// let b=Object.create(a);
// console.log(b.k);
// let c=Object.create(b);
// console.log(c.k);
// console.log(b.__proto__);
// console.log(c.__proto__);
// console.log(c.__proto__.__proto__); //Two levels above c

// b.k++;
// console.log(a);
// console.log(b); // k=2

// console.log(c.__proto__); //Object b with k=2
// console.log(c.__proto__.__proto__); // object a with k=1

// console.log(c.k); //2

let a={
    k:1,
    l:'Hello',
    m:true,
    n:[1,2,3]
}

let b=Object.create(a);
let c=Object.create(b);
// b.n[2]=30; //Updation no additions in b
b.n=a.n.join(','); //JOin se string bnta hai aur split se wapas array
console.log(a);
console.log(b);

console.log(a.__proto__);

console.log(a.__proto__.__proto__); //null se inherit hota hai

console.log(c.__proto__==b);
console.log(c.__proto__.__proto__==a);
console.log(a.__proto__==Object.prototype);

//----------------------------------------------------------//
let d= true;
console.log(d.__proto__);
console.log(d.__proto__.__proto__);

let e=10;

console.log(e.__proto__);
console.log(e.__proto__.__proto__);

let f="Hello";
console.log(f.__proto__);
console.log(f.__proto__.__proto__);


//-----------------------------------------------------------//

if(b.hasOwnProperty('k'))
{
    console.log("B has K");
}
else
{
    console.log("False");
}

function func()
{
    console.log("Hello");
}
func();
console.log(func.__proto__==Function.prototype);

//--------------------------------------------------//

// Everything in JS is an object
console.log(typeof Number);
console.log(typeof String);
//--------------------------------------------------//

func.toString();
//------------------------------------------------//

let x=10;
console.log(x.__proto__==Number.prototype);
x=true;
console.log(x.__proto__);
console.log(x.__proto__==Boolean.prototype);

// Object.prototype.toString=10; //Isse toString har object k 10 return karenge

let n=Number('10');
// let n=Number(10.11);
// let n=Number("Hello"); //NaN
console.log(n);

n= Boolean(0);
console.log(n);
console.log(typeof Object);

func.k=100;
console.log(func.k);
func();

console.log(func.__proto__==Function.prototype);
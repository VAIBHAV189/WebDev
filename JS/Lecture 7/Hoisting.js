//var get hoisted at top of the function

// function fun()
// {
//     var x;
//     console.log(x);
//     x=10;
//     console.log(x);
//     x=x-10;
//     console.log(x);
// }

// First aur second  func same hai
// function fun()
// {
//     console.log(x);
//     var x=10;
//     console.log(x);
//     x=x-10;
//     console.log(x);
// }
// fun();
//-------------------------------------------------//

//Function and var get hoisted at top

// fun1();
// fun2();
// function fun1()
// {
//     console.log("fun1");
// }
// function fun2()
// {
//     console.log("fun2");
// }

//------------------------------------------------//

//Another way to declare functions

// fun1();
// fun2();
// //yahan fun1 aur fun2 functions hai ki nhi ye nhi pata hai bina execute kare isliye ye error dega
// var fun2=function()
// {
//     console.log("fun2");
// }
// var fun1=function()
// {
//     console.log("fun1");
// }

//-----------------------------------------------//

//Function overshadowing

var fun2=function funx()
{
    console.log("fun2");
}
var fun1=function funy()
{
    console.log("fun1");
}

fun1();
fun2();

//You cant call funx or funy here as it has been overshadowed by fun1 and fun2
//---------------------------------------------------//


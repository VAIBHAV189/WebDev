//----------------First way------------------//
// if(typeof(window)=='undefined')
// {
//     const lib=require('./lib');
//     console.log(lib.add(1,2));
// }
// else
// {
//     console.log(add(1,2));
// }


//----------------Second way----------------//
let lib;
if(typeof window=='undefined')
{
    lib=require('./lib');
}

else
{
    lib=window;
}

console.log(lib.add(10,20));
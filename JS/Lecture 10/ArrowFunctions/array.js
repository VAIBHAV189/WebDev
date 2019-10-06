// let ar=[5,4,3,2,1,4,6,11,112,23,32,113,121];

// console.log(ar);
// ar.sort(function(a,b){
//     console.log(a+' '+b);
//     return a-b;
// });
// // ar.sort(); //Ye bs normally strings ke hisab se karta sort
// console.log(ar);


let arr=[1,2,3,4,5,6];
///map contains 3 arguments
let arr2=arr.map(function(value,index,arr){
    // console.log(value+' '+index);
    return value;
})

console.log(arr2);

let arr3=arr.map((value)=>value*2);
let arr4=arr.map((value)=>
{
    if(value%2==0)
        return true;
    else
        return false;
});

console.log(arr3);
console.log(arr4);

//Filter passes only true values to new array
let arr5= arr.filter(function(value){
    if(value%2!=0)
        return true;
    else 
        return false;
});

console.log(arr5);

// Jo bh return karoge wo store hoga accum mei 

arr3=arr.reduce(function(accum,value,index,arr){
    return accum+value;
});

console.log(arr3);
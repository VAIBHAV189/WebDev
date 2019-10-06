function normalFun(){
    console.log(x);
}

var x=30;

let arrowFun=()=>
{
    console.log("Inside arrow ");
    return this.x;
};  
    //This will by default return x
    //ArrowFun is pointing to window ka x

let obj1=
{
    x:10,
    y:arrowFun
}
let obj2=
{
    x:20,
    y:arrowFun
}

console.log(obj1.y());
console.log(obj2.y());
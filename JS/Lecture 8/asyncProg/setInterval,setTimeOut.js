// function func1()
// {
//     console.log("Running");
// }
// setTimeout(function()
// {
//     func1();
// },2000);

// setInterval(function(){
//     console.log("Running");
// },1000);

let id= setInterval(function(){
    console.log("I am running");
},1000);

setTimeout(function(){
    clearInterval(id);
},5000);
// console.log(id);
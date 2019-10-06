//Default binding ->window



// function original ()
// {
//     console.log(this);
//     function notOriginal()
//     {
//         console.log(this);
//     }
//     notOriginal();
// }
// original();
// // window.location: 'http://google.com';

// let obj={
//     k:1,
//     getProp: function()
//     {
//         return this;
//     },
//     p:'Hello'

// }

// // console.log(obj.getProp());

// function f(x,y)
// {
//     console.log(this);
//     console.log(x+y);
// }

// f.call(obj,10,20);

// let s=f.bind(obj);
// console.log(s());

// var s=f.bind(obj,10,20);
function Person(name ,age)
{
    this.name=name;  //window.name 
    this.age=age;
    console.log(this); 
}
let per=new Person("Harry",21); //new creates a new instance where we can add values and members
// function f()
// {
//     return 1;
// }

// f.k=1;
// console.log(f.k);
// console.log(f().__proto__==f.prototype); 
// console.log((new f()).__proto__==f.prototype); //Inherits instance from prototype 

// // Constructors are not meant to return things

// function person()
// {
//     return {a:1,b:2};  // this gives same output for both p1 and p
//     //return 1; // p1,p give diff output in case of other datatypes than object 
// }

// let p=person();
// let p1=new person();
// console.log(p);
// console.log(p1); 

//--------------------------------------------This Pointer----------------------------------------//

//this points to window by default
//Browser is made using c++
//In c++ all things are not objects
//We want to use some things using JS on browser
//Location finding 
//Window - Browser Object Model(fake objects can be used to convert everything into objects so that we can implement some funtionalities in browser)
//if we type window in console then it will tell the URL of current window
//console.log(this); will give URL too
// if console.log(this)==window this will give true result

//Implicit Binding 

// O={
//     k=1,
//     j:function() {
//         return this;
//     }
// }
//console.log(O.j());
//Here we are using . operator  this is implicit use of 'this'

// function person()
// {
//     console.log(this);
// }
// let x=person.bind(O); //Binding + storing
// x();
// person.call(O); //Explicit Binding

// function person(name, age)
// {
//     this.age=age;
//     this.name =name;
//     // console.log(this);
// }

// person("Harry Potter",10);
// console.log(this);

//window.name; use it in browsers console
//window.age; ^^

//We can do circular referencing in window

// o={
//     k:1,
// }

// console.log(o.o=o);
// console.log(o==o);
//window.window==window; //use this in console it will give true



// function f()
// {
    // console.log(this);
// }
// let a=new f();
// a.name='hello';
// console.log(a);

// function person(name,age)
// {
//     this.name=name;
//     // this.age=age;
//     this.getFirstname= function()
//     {
//         return this.name.split(' ')[0]; //First name nikalne k liye split kiya .. wo array dega harry , potter fir humne uss array ki 0th index pe jo string rakhi hai wo use karni hai
//     }

//     this.isAdult=function()
//     {
//         return age>=18;
//     }
//     this.UpdateFirstName=function(firstName)
//     {
//         let a=this.name.split(' ');
//         a[0]='Vaibhav';
//         this.name=a.join(' ');
//     }

// }

// person.staticFun=person.prototype.staticFun=function()
// {
//     console.log('This is static');
// }
// let p=new person('Harry Potter',21);
// let p1=new person('Ron Weasley',17);
// console.log(p);
// console.log(p1);

// console.log(p.name);
// console.log(p1.name);
// // console.log(window.name); //Jo pehle declare hua hoga uska aa jayega name
// console.log(p.getFirstname());
// console.log(p1.isAdult());
// console.log(p.isAdult());

// console.log(p.__proto__==person.prototype);
// p.UpdateFirstName('Hello P1');
// console.log(p);

// p.staticFun();
// person.staticFun();
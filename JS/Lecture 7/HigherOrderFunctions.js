//-----------------------------------------//
// function outerFun(anotherFun){
//     console.log('this is outer fun '+anotherFun);
// }

// function innerFun(){
//     console.log('This is inner fun ');
// }

// outerFun(); // this is outer fun undefined

// //Function is also data type and it can be also passed as an argument

// outerFun(innerFun); //Poora funcn as it is jayega 
// outerFun(innerFun()); //pehle innerFun execute hoga. Ye innerFun undefined return kar raha hai isliye this is outer fun undefined ayega


//----------------------------------------------//

// function outerFun(anotherFun){
//     console.log('this is outer fun '+anotherFun());
// }

// function innerFun(){
//     console.log('This is inner fun ');
// }

// outerFun(innerFun);

//Pehle execute hoga anotherFun() to usse inner fun wala print hoga fir console.log outer wale ka chalega usmei this is outer print hoga fir undefined return kara hoga isliye undefined sath mei print hoga

//----------------------------------------------//


// function outerFun()
// {
//     console.log('this is outerFun');
//     function newFun()
//     {
//         console.log('This is a new fun');
//     }
//     return newFun;
// }
// let fun=outerFun();
// fun();

//----------------------------------------------//
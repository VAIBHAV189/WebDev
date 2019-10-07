//In Node JS window and document is not defined

// console.log(global);

let x=Number(10);
console.log(x);

console.log(global.Number==Number); //Wahan window.Number = Number hota tha

console.log(global.global.global==global);//circular dependency exists

console.log(this==global);

// console.log(process);
console.log(global.process==process);

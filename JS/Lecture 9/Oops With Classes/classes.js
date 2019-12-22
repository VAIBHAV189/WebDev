//You cannot define private members in classes by this method so this is a disadvantage

class Person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
        
        this.getFirstName=function()
        {
            return this.name.split(' ')[0];
        }
    }

    // getFirstName(){
    //     return this.name.split(' ')[0];
    // }

    // getLastName()
    // {
    //     return this.name.split(' ')[1];
    // }

    get lastName() //Getter
    {
        return this.name.split(' ')[1];
    }

    set lastName(value)
    {
        let a=this.name.split(' ');
        a.pop();
        a.push(value);
        this.name=a.join(' ');
    }

    static ageDiff(a,b)
    {
        return a.age-b.age;
    }

}

let p=new Person('Harry Potter',18);
let p1=new Person('Ron Weasley',19);

console.log(p1);
console.log(p);
console.log(p1.getFirstName());
// console.log(p.getLastName());
console.log(p.lastName);  //You dont need to call getters i.e dont use paranthesis as they are computed automatically
p.lastName='Williams'; //Setter allows only one argumentwhich is to  be assigned           
console.log(p);

console.log(Person.ageDiff(p1,p));

class Student extends Person{
    constructor(name,age,marks)
    {
        super(name,age);
        this.marks=marks; //Till Person is not made we cannot call this.marks... else this will give an error
    }
}

let s=new Student('Vaibhav ',19,50);
console.log(s.getFirstName());
//Student ka prototype inherit hota hai Person k prototype se
console.log(Student.prototype.__proto__==Person.prototype); //true (inherit kahan se hui)
console.log(Student.__proto__==Person.prototype); //false
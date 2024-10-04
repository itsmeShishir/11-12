let a = [1,2,3,4]
let b = [4,5,6]

let c = [...a,...b ]
console.log(c);

let m = new Map();
m.set(1,2);
m.set(3,4);
m.set(5,6);
console.log(m);
console.log(m.get(5));
m.delete(1)
console.log(m);
m.clear();
console.log(m);

m.forEach((value,key) => {
  console.log(`${key} : ${value}`);
})

class Myclass{
   age //private fields
  constructor(name, age){
    this.name = name
    this.age = age
    console.log("hello");
  }

  static greet(){
    console.log(`${this.name} says hello and age is ${this.age}`);
  }
}
class MySubCalass extends Myclass{
  constructor(name, age, gender){
    super(name, age)
    this.gender = gender
  }
  all(){
    console.log(this.name, this.age, this.gender);
  }
}
let e = new MySubCalass("shishri", 28, "male")
console.log(e.name);
console.log(e.age);
Myclass.greet()
e.all();


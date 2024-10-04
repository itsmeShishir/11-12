// function
// -> a block of reusable code
// -> function is a group of code
// -> function is a block of code that perform a task

//function myFunction(){ //function body }
// myFunction(parameter )-> multiple parameter
function myName(){
  console.log("shishir");
}
 myName();

function myname(){
  return "shishir bhandari";
}
console.log(myname());

function hello(a,b){
  return a+b;
}
console.log(hello(10,10));

function Hello(a, b) {
	console.log(a + b) 
}
Hello(10, 40);

// type
function okFunction(c = 10){
  console.log(c);
}
okFunction(30);

// no recursive -> 
// Anno function -> old or new approach
let a = function (){
  console.log("ok variable");
}
a();
// arrow function
let c = () => {
  console.log("Hello");
}
c();
// string concat
let d = "hello"
console.log(d + " shishir");
// `` -> backtricks 
console.log(`${d} my name is shishir`);

// Rest Parameter
let g = (one,two,b,c,d,...shishir) => {
	console.log(`${one} ${two} and ${shishir}`)
}
g(1,2,3,4,5,6,7)

// object
let obj1 = {
  "key": "value",
  "1":"hi"
}
console.log(obj1["1"]);
obj1.key = "shishir"
console.log(obj1);

// array -> 
let ab = [1, 3, 4, 5, 2]
console.log(ab.length);
ab.push(6)
console.log(ab);
ab.pop()
console.log(ab);
ab.shift()
console.log(ab);
ab.unshift(0,1)
console.log(ab);

// for each
ab.forEach(function items(items){
  console.log(items);
})
ab.forEach(items => {
   console.log(items)
});
ab.map((items) => {
	console.log(items >= 2)
})
ab.filter((items) => {
	console.log(items >= 2)
})
console.log(ab.sort());

// array destructuring 
let abc = [1,2,3]
let [ac,aa, ad] = abc;
console.log(ac)
console.log(aa)
console.log(ad)

// object destructuring
let obj2  = {
  "name":"shishir",
  "age": "28"
}
let {name, age} = obj2;
console.log(name);
console.log(age);

export const mynames = "shishir";

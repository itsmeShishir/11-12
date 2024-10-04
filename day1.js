// this is a single line comment

/* this a multi
 line comment */

console.log("Hello");

// variable
// var, let, const
var a = 10;
let b = 20;
const c = 30;

a = "10";
console.log(a);
b = "40";
console.log(b);
// c = 40;
console.log(c);
// Data type -> string, Number, bool, array, null, object, undefine
//number
a = 30
console.log(typeof(a));
a = "shishir";
console.log(typeof(a));
a =  true
console.log(typeof a)
a = [1,2,3,4,5]
console.log(typeof(a))
a = {
  1 : "shsihir"
}
console.log(typeof(a));
let e;
console.log(e);
a = null;
console.log(typeof a);

// operators
// -> operators and operands
// arthmetic -> +, -, *, / %, **
console.log(5+5);
console.log(5-5);
console.log(5*5);
console.log(5/5);
console.log(5**5);

// comparision
// -> >, < , >=, <=, != , ==, ===
let h = 10
let i = "10"
console.log(6>5);
console.log(5 < 6)
console.log(h === i)
console.log(5 == '5')
console.log(5<=5);
console.log(5>=5);
console.log(5!=6);

// Logical Operator
// &&, ||, !
console.log(true && false)
console.log(true && true)

// ||
console.log(true || true)
console.log(true || false)
console.log(false || false)

// !
console.log(!true)
console.log(!false)

// Assignment operator
let k = 4
console.log(k)
console.log(k++)
console.log(k--);
console.log(k);

// math
console.log(Math.ceil(Math.random() * 100));
console.log(Math.pow(2,10));

// data 
let date = new Date();
console.log(date.getMonth());

//js condition
//if else switch
// ternary 
if(false){
  console.log("hello");

}else if (true){
  console.log("Helo");
}
else{
  console.log("bye");
}
//switch
k = 30;
switch(k){
  case 2: 
    console.log("its even 2");
    break;
  case 4:
    console.log("its even 4");
    break;
  default:
    console.log("its none of the above");

}

//loop -> for, while, dowhile
// for(initialization, condition, inc/dec){
//   //for body
// }
for(let i = 0; i <= 10; i++ ){
  if (i ==2){
    continue;
  }
  console.log(i)

}

// while(condition){
//   //body
//   //inc.dec
// }

let j = 0
while(j<=10){
  console.log(j);
  j++
}
console.log(j);

do{
  console.log(j);
  j++
}while(j<=10);











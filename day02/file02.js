/*
typeof function tells data type 
//////////////////////////////
let see how can we know the data type of any data
Data type in javaScript
string
number 
boolean
null
undefiend
bigint
symbol 
object


*/

/*===================================
* typeof is function that tells its data type
===========================================*/
//number data type
let workers =25;
console.log(typeof workers);
let a,b,c;
a =12,b=13.45,c=12;
console.log(typeof a,b,c)

// strng data type
let car ="Lemborgini";
console.log(typeof car);

//boolean data type
let constant =Boolean(12>11);
console.log(constant);

//bigint data type
let x = BigInt("123456789987654321123456789");
console.log(x);

//integer 
let y = 12345678912346455828; // biger then this became bigint
console.log(y);


//undefined data type
let z = undefined;
console.log(z);
 // value is undefined and type is undefined
let acar;
console.log(acar);


//null data type
let abc = null;
console.log(typeof abc);

//symbol
//creating a symbol
const mySymbol= Symbol('description');
console.log(mySymbol);
//using symbol as object property key
const obj ={};
obj[mySymbol]='this is symbol of property';
console.log(typeof obj[mySymbol]);

//objsect data type
let student = {firtname:"alex",lastname:"Murmu",age:12, class:"B.tech"};
console.log(student);

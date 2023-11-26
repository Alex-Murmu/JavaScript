/*=========================*\
|about undefined variable   |
| and null variable         |
|                           |
\*=========================*/

//for undefined let create varibale without asigning any value
let firststring;
console.log(firststring,typeof firststring);

//for null let create variable
let mystring = null;
console.log(mystring, typeof mystring);
console.log(typeof null);
//let see about bigint

let number = 214;
console.log(number, typeof number);
console.log(Number.MAX_SAFE_INTEGER);
//java script has limittation to print any number
//you can only print this much number 9007199254740991 if you have large number then this you have to use BigInt function

//let see]
let myNumber =BigInt(123131323131323133312121);
console.log(myNumber,typeof myNumber);

let numm=BigInt(123456);
let numm2=1234n;
let sum =numm+numm2;
console.log(sum);


 
/*===============================*\
  string concatination
\*===============================*/
let  string1 ="Alex";
let string2 ="Murmu";
// method one
console.log(string1,string2);
//method two
let full_name =string1+" "+ string2;
console.log(full_name);

//on number
let num1 = "32";
let num2="42";
let sum =num1+num2;
console.log(sum,typeof sum);
//========
sum =+num1+ +num2;
console.log(sum, typeof sum);
/*
Syntax = var.slice(start,end);
*/

/*
Description
The slice() method extracts a part of a string.

The slice() method returns the extracted part in a new string.

The slice() method does not change the original string.

The start and end parameters specifies the part of the string to extract.

The first position is 0, the second is 1, ...

A negative number selects from the end of the string.
*/

let approch = "get admit asap";
let result = approch.slice(4,9);
console.log(result);

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//without creating extra variable
console.log(alphabet.slice(10,14));
console.log(alphabet.slice(3)); // here is only startin point
console.log(alphabet.slice(3,8));
console.log(alphabet.slice(0,1)); // for only A

// with extra variable
let res1 =alphabet.slice(6,10);
console.log(res1);
let res2 =alphabet.slice(0,10);
console.log(res2);

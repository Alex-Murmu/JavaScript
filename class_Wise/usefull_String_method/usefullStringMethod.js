//============================>
/*
   Javascript String Method 
     these are method which we will see one by one
   they are :                      
   
                                      String trim()
   String length                      String trimStart()
   String slice()                     String trimEnd()
   String substring()                 String padStart()
   Stringsubstr()                     String padEnd()
   String replace()                   String chaAt()
   String replaceALL()                String charCodeAt()
   String toUpperrCase()              String split()
   String toLowerCase()
   String concat()
*/

//  1. length property return the length of a string
let text ="ABCDEFGHIKLMNOPQRSTUVWXYZ";
//method 1
let length = text.length;
console.log(length);
//method 2
console.log(text.length);
// concatinate and check length
let myString ="Hello , Guys";
let yourString ="How are you";
var totalstring = myString + yourString;
console.log("The length of "+totalstring.length);

// let check length of array

let myArray =[4, 2, 3, 4, 5];
console.log(myArray.length);


// 2. Extracting Srng parts
/* there are 3 method for extracting a part of string
. slice(start,end)
. substring(start,end)
. substr(start, length)
*/

// let look slice function first
let bucket_of_fruit ="Apple, Banana, kiwi";
console.log(bucket_of_fruit.slice(7,13));

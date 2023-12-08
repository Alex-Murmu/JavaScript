/*
 Syntax = var.indexOf("word/letter");
        = var[position];   like [12]
        
//  <====SEARCHNG INDEX OR STRING INDEXING ====>


/*In JavaScript, strings are zero-indexed, meaning 
the first character is at index 0, the second
 character is at index 1, and so on. You can
  access individual characters in a string using
   square brackets [] and the index of the character
    you want to retrieve. Here's an example:
    */
// let's check  it out
let mystring = "Hello, world";
console.log(mystring[0]);// in this 

// method 02 checking what will be in position of 21
let quate = "tum mujhe khoon do main tumhe azzadi dunga";
let index= quate[21];
console.log(index);


/*
String indexing is basically used for searching something
you can use string indexing for look the where the word 
letter are align of the index of letter and word
Basically searching


*/

// for example i wanna search for late for some statement
let statement   ="Student those who are late will be punished";
console.log(statement.indexOf("will"));

let text = "Hello world, Welcome to the universe.";
let result =text[1];
console.log(result);
//let check by string
let result2 = text.indexOf("to");
console.log(result2);
// finding the occurance of "e" starting position 5
let result3 = text.indexOf("e",5);// this finding function will start after index 5
console.log(result3);

console.log(text[10]);// here i am cheking what will be in positio  of 10 index




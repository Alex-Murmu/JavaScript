/*===================================*\
    truthy and falsy value             |
\*===================================*/

//what is falsy values and truthy values is

























//let see if else
let sam,bam,dham;
sam =18;bam=13;dham=14;
if(sam<=bam){
    console.log("you can drink");
}
else{
    console.log("not allowed");
}

// again
let age = 21;
if(age>=20){
    console.log("yes you are GRAde");
}
else{
    console.log("no you are not Grade");
}

//write a program that check whether a number is possitive ,nagetive or zero
let number =-12;
if(number>0){
    console.log(number +" "+"possitive integer");
}
else if(number==0){
    console.log(number+" "+"Integer");
}
else{
 console.log(number+ " "+"nagetive Integer");
}

//Create a program that determines if a given year is a leap year.
let year=2015;
if(year%4==0){
    console.log(year+" is"+" leap year");
}
else{
    console.log(year+" is not a leap year")
}

//write a scrript for find largest among three
function findGreatestNumber(a,b,c){
    if(a>=b && a>=c){
        return a;
    }
    else if(b>=a && b>=c){
        return b;
    }
    else{
        return c;
    }
}

// Example 
var num1 =30;
var num2 =40;
var num3 =50;
var greatestNumber = findGreatestNumber(num1,num2,num3);
console.log(greatestNumber);

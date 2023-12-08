// in this practice we will learn about 
// how to take inpu as number insted of string

/*
===========> NOTE
        when ever we or any conder take input from user 
        it will be always in the form of string not as it 
        what it data type is actually
*/

//let see
let  number =prompt("Enter any things");
      // let see what is output
console.log(number+" "+typeof number);

// let ho w we can conver tit into number any thing
// for that we can create new variable or directy conver it

let number1 = Number(number);
console.log(number+" "+typeof number1);

   ///  =====> let how we con cover it to string
   let num =String(number1);
   console.log(num+" "+typeof num);

   /// =====>  now let's convert it to float

   let fl =+num;
   console.log(fl+" "+typeof fl);
   let fll =parseFloat(fl);
   console.log(fll+" "+typeof fll); 
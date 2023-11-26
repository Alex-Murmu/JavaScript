/*
| in this we will see some important uestion on if else 
| @ Question1 = What is defference between == and ===
|                           (double equal too) (thrice equal too)
*/

let x = 5;
let y = 5;
let result;

if (x == y) {
    result = "Equal with ==";
} else if (x === y) {
    result = "Equal with ===";
} else {
    result = "Not Equal";
}

console.log(result);


let userEnteredValue = (prompt("Enter a number or a string:"));
console.log(userEnteredValue, typeof userEnteredValue);
console.log("coverting to int42");
let toint= parseInt(userEnteredValue);
let secretNumber = 42;

if (toint === secretNumber) {
    console.log("Congratulations! You guessed the secret number!");
} else {
    console.log("Oops! Better luck next time. The secret number is " + secretNumber + ".");
}


//closed

let inputbyuser = prompt("enter the number");
console.log(typeof inputbyuser);
let checked = parseInt(inputbyuser);
if(checked===1){
    console.log("Yes");
}
else{
  console.log("NO");
}
pasre
// in this program we will see if someone enter his her age the the 
// output will like adult not adult and so on 

let age =prompt("enter your age")
let output=(age<18)?"minor": (age>=18 && age>21)?"Adult":"big one";
console.log(output);

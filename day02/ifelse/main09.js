/// here we will check three number greater then or not

let num1,num2,num3;
num1 = prompt("enter number1 value");
num2 = prompt("Enter number2 value");
num3 = prompt("Enter number3 value");

if(num1>num2 && num1>num3){
    console.log(num1," is greater the num2 and num");
}
else if(num2>num1 && num2>num3){
    console.log(num2," is greater then num1 and num3");
}
else{
    console.log(num3," is greater then num1 and num,2")
}
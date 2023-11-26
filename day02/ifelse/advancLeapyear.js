// let's create a variable for taking input and use it for further

let userinput = prompt("Enter any Year");
// to check whether the value is entered by user or not 

if(userinput ==null){
    console.log("You havn't enter the data");

}
else if(userinput==""){
    if(userinput/4==0){
        console.log("Yes leap year");
    }
    else{
        console.log("Not a Leap Year");
    }
}
else{
    console.log("invalid value");
}
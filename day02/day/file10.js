function findOddandEven(a,b){
    if(a%2==0){
        return "Even";
    }
    else{
        return "odd";
    }
}

var num=13;
var ans = findOddandEven(num);
console.log(ans);

//Write a JavaScript program to check if a number is positive, negative, or zero.

function checkPOsitveNagetiveAndZero(a){
    if(a<0){
        return "Negative Number";
    }
    else if(a>0){
        return "Positive numberr";
    }
    else{
        return "0";
    }
}

// checking hte function
let positive =12;
let zero = 0;
var negative =-15;
var res = checkPOsitveNagetiveAndZero(zero);
console.log(res);

//Write a JavaScript program to find the largest of three numbers entered by the user.

function findLargestNumber(a,b,c){
    if(a>b && a>c){
        return a+" is largest";
    }
    else if(b>a && b>c){
        return b +" is greatest";
    }
    else{
        return c +" is largest";
    }
}
//checking ffunction
let num1,num2,num3;
num1 =12;
num2 =14;
num3 =1;
let resforlargest = findLargestNumber(num1, num2, num3);
console.log(resforlargest);

//Write a JavaScript program to check whether a letter entered by the user is a vowel or consonant.

function findVowel_consonent(a){
  let ch =a.toLowerCase();
  if(ch =='a' || ch =='e' || ch=='i' || ch=='o' || ch=='u'){
    return ch + " "+"is vowel";
  }
  else{
    return ch +" "+"is consonent";
  }
}


let ret = findVowel_consonent('1');
console.log(ret);




//================================================>
// Function to calculate and return the grade based on the score
function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } else if (score >= 70 && score < 80) {
        return 'C';
    } else if (score >= 60 && score < 70) {
        return 'D';
    } else if (score >= 0 && score < 60) {
        return 'F';
    } else {
        return 'Invalid Score'; // Handle scores outside the valid range
    }
}

// Example usage of the function
var score = prompt('Enter the student\'s score:'); // You can also use readline-sync in Node.js environment
score = parseInt(score); // Parse the input as an integer

var grade = calculateGrade(score); // Call the function to calculate the grade

// Output the grade
console.log('Grade: ' + grade);

/*=========================*\
String template
\*=========================*/
// let learn about string template
/* what is tring template
and why it is used==>
===> for example you have two variable and you have to
print something that will inharite from those two variable
for example*/
let myname ="Alex Murmu"
let age= 21;
// and you want to print hello my name is Alex murmu and myu age is 21
// fot that you can do is create new variable and all extra string
let aboutme ="Hello my name is"+" "+ myname + " "+"And my age is"+" "+age;
console.log(aboutme);

// and you don't want to write double quote again and agian like this "fdfjd"+" "+"sdjsjdk"+varibale+" "
// to avoid this here string template came

//++++++++============
// you can simpally write like this using backtrack and ${} sign 

aboutme =`hello my name is ${myname} and my age is ${age} `;
console.log(aboutme);

// once again
let father_name ="Albinus murmu";
let father_age=56;
let my_father=`My father name is ${father_name} and his age is ${age}`;
console.log(my_father);
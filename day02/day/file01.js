//========>  lets create variable
let father_name = "Alex murmu";

//========> let check length of variable values
console.log("length of",father_name ,"is",father_name.length,"inclueing space also");


// lets create variable named fruit
//=======> Add some space before ___apple
let fruit ="  Apple  ";

// lets print without elimenae functon
console.log(fruit);
//===> let's check length
console.log(fruit.length);



//=====> lets eliminate space
console.log(fruit.trim());
console.log(fruit.length);
//this will not give you eliminate length
// Because it is taking for fruit variable
// For that you can create a new varible 
// or you can directly use trm function while length function

//===> creating new varibale
let newstring = fruit.trim();
console.log(newstring);
console.log(newstring.length);

// or you can directlly 
console.log(fruit.trim().length);

// or you can drcetlly change the fruit to short length fruit
fruit = fruit.trim();
console.log(fruit,fruit.length);

// now our fruit variable are totally changed to string without space

// now let see about ====> .toUpperCase() <=======

console.log(fruit.toUpperCase());
// thi will not create new variable thats why it reman small
// let print t see
console.log(fruit);
// see t will give you in small letter
// to avoid it let create new variable

fruit = fruit.toUpperCase();
// And lets see
console.log(fruit);
// now this fruit variable tottally become a capital letter

//=======> now let learn about .toLowwerCase() functon
console.log(fruit.toLowerCase());
// it is still in capitall 
console.log(fruit);
// for that you have to create new variable 
// you all ready know that variable are changeable exacept const
fruit = fruit.toLowerCase();
//now ts totally change int lowercase
console.log(fruit);


/*==================
*Let's learn about  *
*  slice function   *
*                   *
*===================*/

// how slice function  work
/*
let say you wanna print some some letter to 0 to range 10
for example 
it will index th string from 0
  
 srting      i n d o n e s i e a
 index       0 1 2 3 4 5 6 7 8 9
 count       1 2 3 4 5 6 7 8 9 10
   console.log(variable.slice())
let country ="indonesiea";

  and i wanna only nesiea to print 
//let see how it work*/
let country ="indonesiea";
console.log(country.slice(4,10));
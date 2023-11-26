let hour = new Date().getHours();
let minute = new Date().getMinutes();
let sec = new Date().getSeconds();
console.log(hour+" : "+minute+":"+sec);

if(hour>=5 && hour<=12){
    console.log("Good Morining");
}
else{
    console.log("Evening");
}
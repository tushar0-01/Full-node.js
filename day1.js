 var prompt = require('prompt-sync')();
// var age=prompt("enter your age");
// if(age<18){
//     console.log("20% discount");
// }
// else if(18<=age<=65){
//     console.log("no discount");
// }
// else{
//     console.log("30% discount");
// }

// var len=prompt("enter the length");
// var wid=prompt("enter width");
// var area=len*wid;
// console.log(area);

// var product1 = {
//     name: "godrej",
//     stock:12
// };
// console.log(product1);
// product1.name="happy";
// console.log(product1);
// const p2={
//     name : "hello"
// };
// product1=p2;
// console.log(product1);

const guestlist=["ram","hari","tushar","shivam","rupesh"];
do{
    var name=prompt("enter guest name");
    if(guestlist.includes(name)){
        console.log("welcome to the party");
    }
    else{
        console.log("sorry! your name is not in the guest list");
    }
    var i=prompt("enter 1 if you want to enter further guest name else anything");
}while(i==1);

var add=function(a,b,callback){
    console.log("result is "+(a+b));
    callback();
}

add(2,3,callbac);
function callbac(){
    console.log("hey");
}
function callback(){
    console.log("welcome to callback function");
}


// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user);
// fs.writeFile('gree.txt','hello tushar',()=>{console.log('file is created');});

// var day2=require('./day2export.js');
// var age=day2.age;
// console.log(age);
// var sum=day2.add(12,age);
// console.log(sum);
// var _=require('lodash');
// const arr=["num","num",1,2,2];
// var uniqarr=_.uniq(arr);
// console.log(uniqarr);
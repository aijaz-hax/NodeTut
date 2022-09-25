// console.log("My Name is Aijax"); My First line for node.
//    console.error("Ijax");

////////////////////////////////////
// var x=10;
// var y=20;
// var z= x+y;
// console.log("The addition is ",z); My Second line for node.
 
////////////////////////////////////

// import {x} from "./index1" Not workin o o 
// console.log(x);

// const app=require("./index1");
// console.log(app.z());

/////////////////////////////////////

// const arr=[9,9,8,6,5,4]     FILTER METHOD Interview Question
// const myNewArray=arr.filter((val)=>{
//     return val > 5;
// })
// console.log("My New Array is ",myNewArray);

////////////////////////////////////
// Make basic server
// const color=require("colors");
// console.log("I like Green".bgGreen);
// const http=require("http");
// http.createServer((req,resp)=>{
//     resp.write("I am Aijax");
//     resp.end();
// }).listen(4500);
/////////////////////////////////
 
// console.log("My Git first");

/////////////////////////////////
// Basic API
// const data=require("./index1");
// const http=require("http");
// http.createServer((req,res)=>{
//    res.writeHead(200,{"Content-type":"application\json"});
//    res.write(JSON.stringify({
//     data
//     // name:"Aijax",
//     // address:"Hawal"
//    }))
//    res.end();
// }).listen(5000)

/////////////////////////////////
// Get data from command line

// console.log(process.argv[2]);
const fs=require("fs");
const color=require("colors")
const input=process.argv
if(input[2]==="add"){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]==="remove"){
    fs.unlinkSync(input[3]);
}
else{
    console.log("Invalid Data".red);
}

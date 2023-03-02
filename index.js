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
// const fs=require("fs");
// const color=require("colors")
// const input=process.argv
// if(input[2]==="add"){
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]==="remove"){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log("Invalid Data".red);
// }

///////////////////////////////////PATH MODULES & FILE CREATE

// const fs=require("fs");
// const path=require("path");
// const dirPath=path.join(__dirname,"files");
// // console.log(dirName);
// // for(i=0;i<5;i++){
// //     fs.writeFileSync(`${dirPath}/ajaz${i}.txt`,`I am file number ${i}`);
// // }
// fs.readdir(dirPath,(err,files)=>{
//    console.warn(files);
// })

///////////////////////////////////CRUD with File System

// const fs=require("fs");
// const path=require("path");
// const dirPath=path.join(__dirname,"crud");
// const myPath=`${dirPath}/ajaz.txt`
// fs.writeFileSync(myPath,`This is a simple plain text`);
// fs.readFile(myPath,"utf-8",(err,item)=>{
//    console.log(item);
// })
// fs.appendFile(myPath,"I've to work hard",(error)=>{
//    if(!error){
//     console.log("File append successfully");
//    }
// })
// fs.rename(myPath,`${dirPath}/aijax.txt`,(err)=>{
//      if(!err){
//         console.log("Rename successful");
//      }
// })
//////////////////////
// const http =require("http");
// const url= require("url")
// const server=http.createServer((req,res)=>{
//     const pathName=req.url;
//     if(pathName==="/aijax"){
//         res.end("Hello from aijax bhai");    
//     }
//     else{
//     // res.writeHead("404");
//     res.writeHead(404,{
//         'Content-type':'text/html'
//     })
//     res.end("<h2>Hello from server</h2>");
//     }
// })
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("Listening..........");
// })
//////////////////////////////// Parsing variable in URL

// const http =require("http");
// const url= require("url");
 
// const server=http.createServer((req,res)=>{
//     const path=req.url;
//     const newData=url.parse(path,true);
//     console.log(newData);
//     res.end("Data");
// })
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("Listening....")
// })

//////////////////////////////// Slugify

// const slugify=require("slugify");
// console.log(slugify("Aijax Bhat",{lower:true}))

////////////////////////////// 
// EXPRESSSSS BASIC


const express= require("express");
const app=express();

app.get("",(ijazat,jawaab)=>{
   jawaab.send("Aijax Express Test")
})
app.get("/htm",(ijazat,jawaab)=>{
   jawaab.send("<h2>Aijax Express Test<h2>")
})
app.get("/jayson",(ijazat,jawaab)=>{
   jawaab.send([{
    name:ijazat.query.name,
    email:"aijaz.ahamed@reachiq.io"
   },
   {
    name:"Muncha",
    email:"muncha@reachiq.io"
   }
])
})
app.get("/aijax",(ijazat,jawaab)=>{
   console.log(`Yei laya maine browser se `,ijazat.query.name);
   jawaab.send("Aijax Page " + ijazat.query.name)
})

app.listen(5000);
const fs =require('fs');

const data ="I am New Data";
fs.writeFile("./data.txt",data,(err)=>{
    if(err) throw err;
    console.log("File Created successfully");
})
const fs= require("fs/promises");
const read=async()=>{
    const data=await fs.readFile("./dataa.txt","utf8");
    console.log(data);
}
read();
console.log("i am after reading data")
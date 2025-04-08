const http = require('http');


const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    res.end(`<h1 style='background-color:black;color:red;'>helllo world </h1>`);
   

})

server.listen(9000,(err)=>{
    if(err)
        console.error(err);
    else
    console.log("server is running on 9000")
});
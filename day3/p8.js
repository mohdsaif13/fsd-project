const http =require('http');

const server = http.createServer(async(req,res)=>{
   
    res.writeHead(200,{'content-Type':'text/html'});
    const data=await fetch("https://fakestoreapi.com/products");
    const products=await data.json();

const myhtml=`<html>
<head>
<title>Products</title>
<style> 
.container{
    background-color : aqua;
        }
    h2{
    background-color : black;
    color:white
    }
    p{
     color:red
    }
     img{
     background-color :black
     }
</style>
</head>
<body>
<h1>Products<h1>
${
    products.map((product)=>{
        return `<div class="container">
        <h2>Title:${product.title}</h2>
        <p>Description:${product.description}</p>
        <p>Price:${product.price}</p>
        <img src="${product.image}" width="200" height="250" alt="${product.title}">
        </div>`
    })
}
</body>
</html>`
        res.end(myhtml);
});

server.listen(9000,(err)=>{
    if(err)
        console.error(err);
    else             
      console.log("server is running at http://localhost:9000/");                                                                  
});
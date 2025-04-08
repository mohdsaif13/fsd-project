// const fs =require('');

// fs.rmdir("mydir",(e)=>{
//     if (e){
//         console.error("error deleting directory :",e);
//         return ;
//     }
//     console.log("Directory deleted successfully!");
// });




const fs = require('fs');

fs.rm("mydir", { recursive: true, force: true }, (err) => {
    if (err) {
        console.error("Error deleting directory:", err);
        return;
    }
    console.log("Directory deleted successfully!");
});


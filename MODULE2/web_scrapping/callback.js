const fs=require('fs');
console.log("Before");
let content=fs.readFileSync('file.txt');
console.log(content);
console.log("After");
console.log("***********************");
// to avoid wasting of time while reading the big file we use callback function as given bellowconst fs=require('fs');
console.log("Before");
fs.readFile("file.txt",cb);
function cb(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data+" ");
    }
}
console.log("After");
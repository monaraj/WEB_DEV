let cp=require('child_process');
//console.log(cp);

//command to open calc
//cp.execSync("calc");

//now showing content of other file here
let content=cp.execSync("node test.js");
console.log("The output of the file test.js is "+ content);
console.log(content);
console.log("" + content);


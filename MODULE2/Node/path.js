// //"C:\Users\Mikku\Desktop\WEB_DEV\MODULE2\Node\path.js"

let path=require("path");
// console.log(path); //to see the all function into path module

// let fileExtensionName=path.extname("C:\Users\Mikku\Desktop\WEB_DEV\MODULE1_HTML_CSS_\index1.html");
// console.log(fileExtensionName);

let baseName = path.basename("C:\Users\Mikku\Desktop\WEB_DEV\MODULE1_HTML_CSS_\q1.html");
console.log(baseName);  //to get base name of the file

console.log(__dirname); 
console.log(__filename);
let dirPath=__dirname;
console.log(dirPath);

// to add filename into directory
let newF=path.join(dirPath,"test.js");
console.log(newF);



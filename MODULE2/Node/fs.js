let fs=require('fs');
//console.log(fs);

let path=require("path");
let filePath= path.join(__dirname,"file.txt");
// // console.log(filePath);
// // //C----Creating a file
// // fs.writeFileSync(filePath,"A new File is created");

// // //over writing an existing file
// // fs.writeFileSync(filePath,"Over writing an exisiting file");

// // //R--to read the content of the file
// // let content=fs.readFileSync(filePath,'utf-8');
// //  console.log(content);

//  //U--to append an exisitng file 
//   fs.appendFileSync(filePath,"\n Newly added file---learningCRUD");
//   console.log("\nAfter updating");
//  console.log(fs.readFileSync(filePath,'utf-8'));

let p=require("path");
let fPath= p.join(__dirname,"hello.js");
//fs.unlinkSync('C:\Users\Mikku\Desktop\WEB_DEV\MODULE2\Node\hello.js');
fs.unlinkSync(fPath);

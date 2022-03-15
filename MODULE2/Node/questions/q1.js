//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

//creating a folder 'newFolder' under directory 'questions'
let fs=require('fs');
let path=require('path');
fs.mkdirSync("newFolder");

//to create a file 'myfile' under 'newFolder'
let filepath=path.join(__dirname,"newFolder","myfile");
console.log(filepath);
fs.writeFileSync(filepath,"new file has been made");

//STRING IN JS
let str="I am Monika Rajoria";
console.log(str);

//METHOS OF STRING 
//1.LENGTH
let len=str.length;
console.log(len);

//2.SLICED METHOD
let slicedArr=str.slice(2,8);
console.log("the extracted string is---->" +" "+  slicedArr);

//REPLACE METHOD
let repstr=str.replace("I am","Myself");
console.log(repstr);
//toLowerCase 
console.log(str.toLowerCase());
//toUpperCase 
console.log(str.toUpperCase());

//concatenate two string  
let str1="Hemanika";
let str2="Kashyap";
console.log(str1.concat(str2));

//split---> return arr
let splitted=str.split(" ",3);
console.log(splitted);

//TRIM()
let text="    This is my first JS class    ";
let trimedext=text.trim();
console.log(trimedext);

//EMPTY ARRAY
let arr=[];  //array declaration
console.log(arr);  //printing empty array

//array with element 
let eleArr=[1,2,3,"monika",'R',4.5];
console.log(eleArr);
console.log("Element at 5th index:" + eleArr[5]);
eleArr[2]="Hemant";
console.log(eleArr);
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
//ARRAY METHODS
//1.PUSH
console.log("Array before PUSH:" + eleArr);
eleArr.push("Hemanika");
console.log("Array after PUSH:" +  eleArr);
eleArr.push("123");
//2.POP
console.log("Array before POP:" + eleArr);
eleArr.pop();
console.log("Array after POP:" +  eleArr);
//3.SHIFT
console.log("Array before SHIFT:" + eleArr);
eleArr.shift();
console.log("Array after SHIFT:" +  eleArr);

//4.UNSHIFT
console.log("Array before UNSHIFT:" + eleArr);
eleArr.unshift('one');
console.log("Array after UNSHIFT:" +  eleArr);
//5.LENGTH of array
 console.log("the length of the array is :" +  eleArr.length);
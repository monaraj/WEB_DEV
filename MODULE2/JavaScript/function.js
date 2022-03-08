//function without parameter and without return type
function sayHello()              // function declaration
{ console.log("Hello from Function")      // function defenation
}
sayHello(); //function call

//function with parameter 
function sum(n1,n2)
{
     let add=n1+n2;
     console.log(" sum of two number are" + add);
}

sum(10,4);

//function with return type
function multiply(p,q)
{
    return p*q;
}
 let ans=multiply(20,6);
 console.log("multiplication is "+ ans);

 //IIFE -function
 (function(){
     console.log("hello from IIFE");
 }());

 //IIFE WITH PARAMETER
 (function(x,y){
    console.log("hello from IIFE with parameter");
    console.log(x/y);
}(10,5));

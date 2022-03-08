console.log("hello guys welcome");

// program for prime number

let n=17;
let flag=1;
for(let i=2;i<=n/2;i++)
{
    if(n%i==0)
    {
        flag=0;
        break;
    }
}
if(flag==1)
{
    console.log("It is prime number");
}
else{
    console.log("It is non prime number");
}

let name='Monika Rajoria';
let age=30;
let profession='Teacher';

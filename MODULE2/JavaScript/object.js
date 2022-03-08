//EMPTY OBJECT
let obj={};
console.log(obj);

let objMon={
    "Name":"Monika",
    'Age':"30",
    PhoneNo:'8979897812',
    'Last_Name':'Rajoria'
}
console.log(objMon);

//different forms of object
let capAmerica={
    Name:'Steve',
    Age:1000,
    Friends:['Natasha','Thor','Tony','Bucky','bruce'],
    Address:{
        city:'Queens',
        State:'Haryana'
    },
    sayHi:function(){
        console.log("Captain America says Hiiiii!");
    }
}
    console.log(capAmerica);

    //use particular key
    console.log(capAmerica.Name);
    console.log(capAmerica.Age);
    //use array key
    console.log(capAmerica.Friends);
    console.log(capAmerica.Friends[1]);
    //object key
    console.log(capAmerica.Address);
    console.log(capAmerica.Address.city);
    // function key
    console.log(capAmerica.sayHi); //display the function name only
    console.log(capAmerica.sayHi()); //to call the function    
   capAmerica.sayHi();

   // to add the key to the exiating object
   console.log("the capAmerica object before" ,capAmerica);
   capAmerica.Movies=['Avenger','Civil War'];
   console.log("the capAmerica object After" ,capAmerica);
   capAmerica.Address.city='Hissar';
   console.log("the capAmerica object now" ,capAmerica);
   delete capAmerica.Age;
   console.log("the capAmerica object After deletion " ,capAmerica);
   console.log(capAmerica.Name);
   console.log(capAmerica['Name']);
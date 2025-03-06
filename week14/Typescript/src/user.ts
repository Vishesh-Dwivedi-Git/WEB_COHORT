interface UserType{
    firstName:string,
    lastName:string,
    age:number
}

function greet(user:UserType){
    console.log("Hello"+user.firstName+user.lastName);
}

type stringOrNumber=string|number; //union only in the type not the interface
type manager={
    name:string ,
    startDate:Date
}
type employee={
    name :string,
    department:string
}
type lead=manager & employee;  //intersection only in the type not the interface
function printN(id:stringOrNumber):void{
    console.log("your id is "+ id);
};

printN("vishesh");
printN(2);


//interface 
interface Address{
        city:string;      //to make a field optional we can use '?' infront
        country?:string;
        pincode:number;
}
interface User{
    name:string;  //here i can also put the specific name like vishesh|harkirat only take these names
    age:number;
    address?:Address
}


interface Office{
    name:string;
    address:Address    //interface in the interface
}
let user:User={
    name:"harkirat",
    age:12,
    address:{
        city:"ayodhya",
        pincode:224001,
    }
}



function Eligible(user:User):boolean{
    if(user.age>=18){
        return true;
    }
    else{
        return false;
    }
}

//interface 

interface People{
    name:string;
    age:number;
    greet: ()=>string;
}

let person: People={
    name:"harkirat",
    age:21,
    greet:()=>{
        return "Hi Vishesh Dwivedi@Google"
    },
}  //person is Random object created directly from the interface not from the classes 

let greeting=person.greet();
console.log(greeting);
console.log(person.name);



interface People1{
    name:string;
    age:number;
}


class Manager implements People1{

    constructor(public name:string , public age:number){
        this.name=name;
        this.age=age;
    }
}

let user1=new Manager("john",30);   // A class object created from class that implements a interface
console.log(user1);


//We Also inhert the class using extends 

//we can also have abstract class
//interface vs abstract class - abstract can have default implementation too , interface are 100% abstract
//interface vs type - diff is how u define , no = in interface , otherwise exactly same , also we cannot implement type in other classes
// also type lets u do unions and intersection 

//ex -

type employee1={
    name :string;
    startDate:number;
}

type Manager3= {
    name: string;
    Department:string;

}

type teamLead=employee1 & Manager3 //here we can a type by doing intersecti of the types  , cannot be done with the interface

type Gooduser={
    name:string;
    gift:string;
}

type BadUser={
    name:string;

}

interface Admin {
    name:string;
    permission:boolean 
}


//Array 
interface User6{
    firstName: string ;
    lastName: string;
    age: number;
}


// create a function take a user array and check if the valid user is there or not ?

function checkuser(user:User6[]){
    return  user.filter((user)=>user.age>18);
}

const userfilter=checkuser([
    {
    firstName:"vishesh",
    lastName:"Dwivedi",
    age:21,
},{
    firstName:"apoorv",
    lastName:"Dwivedi",
    age:22,
},
]);

console.log(userfilter);
type Employee = {
    name: string;
    startDate: Date;
   
    
  };
  
  type Manager1 = {
    Lastname: string;
    department: string;
    age:number;

  };
  
  type TeamLead = Employee | Manager1;  //atleat 1 ki whole propertese propertese must rest 2nd ki dependends on you !
  //type TeamLead = Employee & Manager1;  Dono ki propetese  must 
  
  const teamLead: TeamLead = {
    Lastname: "harkirat",
    startDate: new Date(),
    department: "Software developer",
    age:21,
  };
  
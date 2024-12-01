interface UserType{
    firstName:string,
    lastName:string,
    age:number
}

function greet(user:UserType){
    console.log("Hello"+user.firstName+user.lastName);
}

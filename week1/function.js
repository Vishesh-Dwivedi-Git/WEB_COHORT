function users(arr){
    const result=arr.filter((user)=> (user.age>18 && user.gender==="male"));
    return result;
}
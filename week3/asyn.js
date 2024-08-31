function setPromisifiedTime(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    });
}


async function solve() {
    await setPromisifiedTime(1000);
    console.log("hi");         //Instead of .then .catch we can use await for asynchronous -make a view of synchronous
    await setPromisifiedTime(2000); //promises have 2 arguments resolve and reject , .then for resolve and .catch for reject that is error!
    console.log("hi hello");
    await setPromisifiedTime(3000);
    console.log("hello i am in .. please contact");
    
}
solve()
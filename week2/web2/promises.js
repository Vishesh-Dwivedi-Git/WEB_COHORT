//setTimeout
function random(resolve){
    setTimeout(resolve,3000); //resolve fn called after 3000s-->signally promise completed after this fn in .then is executed
}

let p=new Promise(random);//p is instance of a promise class, it is supposed u something(promise) eventusally

function callback(){
    console.log("promise successfully!!");
}
p.then(callback);//callback called after promise is returned
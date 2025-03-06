let x:number|string=1;
x="vishesh"
console.log(x);


function greet1(firstName:string):void{
    console.log("hello"+firstName);
}

greet1("vishesh");

function sum(n1:string, n2:number){
    return n1+n2;
}

let ans=sum("vishesh",54);
console.log(ans);


//problem no 3 takes a fucntion as input and gives a output as 

function wait(func:()=>void):void{
    setTimeout(func,1000);
}


function func(): void{
    console.log("Hello");
};

wait(func);

function exF(mul:(a:number,b:number)=>void, a:number, b:number){
    setTimeout(()=>mul(a,b),1000);
}

function mul(a:number,b:number){
    console.log(a*b);
}

exF(mul,31,56);

   //In the setimeout and setInterval the fucntion need to be the callback not  drectly the function 

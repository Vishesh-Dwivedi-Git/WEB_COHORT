
/*Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2
 */
//calback hell--> multiple callbacks

/*setTimeout(function(){
    console.log("hi");
    setTimeout(() => {
        console.log("hello");
        setTimeout(() => {
            console.log("hello there");
        }, 5000);
    },3000);
},1000);

*/

//calback hell promisified version 

function setTimeoutPromisified(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

setTimeoutPromisified(1000).then(function (){
    console.log("hi");
    setTimeoutPromisified(3000).then(function (){
        console.log("hello");
        setTimeoutPromisified(5000).then(function(){
            console.log("hello there");
        })
    })
}) //or we can directly call setTimePromisified 
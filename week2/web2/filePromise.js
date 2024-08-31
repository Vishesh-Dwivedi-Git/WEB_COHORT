//promisified version of readFile
const fs=require('fs');

function readTheFile(sendTheFinalData){
    console.log(sendTheFinalData);
    fs.readFile("a.txt","utf-8",function(err,data){
        sendTheFinalData(data); //kinda callback type
    })
}

function readFile(fileName){
    return new Promise(readTheFile)
}

function callback(data){
    console.log(data);
}
const p=readFile('a.txt');
p.then(callback);

class Promise2 {
    constructor(fn) {
        this.resolve = null;
        // `this` should be bound correctly in the `afterDone` function
        function afterDone(value) {
            if (this.resolve) {
                this.resolve(value);
            }
        }
        // Use arrow function to preserve `this` context
        fn(afterDone.bind(this));
    }

    then(callback) {
        this.resolve = callback;
    }
}

// Example usage:
const promise = new Promise2((resolve) => {
    setTimeout(() => {
        resolve('Hello, world!');
    }, 1000);
});

promise.then((value) => {
    console.log(value); // Should print "Hello, world!" after 1 second
});
//rather using .then , we can use await 
//can have multiple callback that is .then(callback)
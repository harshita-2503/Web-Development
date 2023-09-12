//write an arrow function that returns the square of a number "n"
// const square=(n)=>(n*n);

// console.log(square(5));


//write a function that returns "hello world" 5 times at intervals of 2s each

let id=setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ran");
},10000);
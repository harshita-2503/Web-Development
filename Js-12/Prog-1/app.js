//in case of no error
async function greet(){
    throw "weak connection";
    return "hello";
}
//in case of error
async function greet2(){
   abc.abc();
    return "hello";
}

async function greet3(){
    throw "some random error";
     return "hello";
 }

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was",result);

})
.catch((err)=>{
    console.log("promose was rejected with error:",err)

})

let demo=async ()=>{
    return 5;
}
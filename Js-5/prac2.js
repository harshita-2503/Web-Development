//Ques-1
//Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

const arrayAverage=(arr)=>{
    let total=0;
    for(let num of arr)
    {
        total+=num;
    }
    return total/arr.length;
};

let a=[1,2,3,4,5,6];
console.log(arrayAverage(a));

//ques-2
//Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

const isEven=(n)=>{
    if(n%2==0)
    return true;
    else
    return false;
};

console.log(isEven(4));
console.log(isEven(7));


//Ques-3

const object={
    message: "Hello World!",
    logMessage(){
        console.log(this.message);
    }
}

setTimeout(object.logMessage,1000);

//Ques-4

let length=4;
function callBack(){
    console.log(this);
    console.log(this.length);
};

const object2={
    length:5,
    method(callBack){
        callBack();
    },

};

object2.method(callBack);

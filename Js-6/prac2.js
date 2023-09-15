//Qs1. Square and sum the array elements using the arrow function and then find the average of the array

let nums=[1,2,3,4,5];
const square=nums.map((num)=>num*num);

console.log(square);

let sum=nums.reduce((acc,cur)=>acc+cur,0);

let avg=sum/nums.length;
console.log(avg);

//Qs2. Create a new array using the map function whose each element is equal to the original element plus 5

const newArr=nums.map((el)=>el+5);
console.log(newArr);

//Qs3. Create a new array whose elements are in uppercase of words present in the original arry

let names=["bob","jolly","ahsas","peter","tony"];

console.log(names.map((string)=>string.toUpperCase()));

//Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
//variable number of arguments. The function should return a new array with the original
//array values and all of the additional arguments doubled

const doubleAndReturnArgs=(arr,...args)=>[
...arr,
...args.map((v)=>v*2),
];

doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2],10,4);

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object


const mergeObjects=(ob1,ob2)=>({...ob1,...ob2});
console.log(mergeObjects({a:1,b:2},{c:3,d:4}));

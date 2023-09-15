let nums=[1,2,3,4,5,7,9,22,45];
let even=nums.filter((el)=>{
    return el%2==0;  //even=>true
});
console.log(even);

let odd=nums.filter((el)=>{
    return el%2!=0;  //odd=>true
});
console.log(odd);

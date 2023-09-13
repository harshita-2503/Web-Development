//find the sum of the elements of array

let fVal=[1,2,3,4].reduce((res,el)=>{
    console.log(res);
    return res+el
});
console.log(fVal);

//find the maximum in an array

// let arr=[1,2,5,6,22,90,77];
// let max1=-1;
// for(let i=0;i<arr.length;i++)
// {
//     if(max1<arr[i])
//     max1=arr[i];
// }
// console.log("Max=",max1);

let nums=[1,2,5,6,22,90,77];

let max=nums.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log("Max=",max);

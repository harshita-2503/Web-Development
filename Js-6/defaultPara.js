function sum(a,b=2)
{
    return a+b;
}

console.log(sum(2,4));
console.log(sum(9));

function sum2(a,b)
{
    return a+b;
}
console.log(sum2(2,4));  //6
console.log(sum2(9));    //a=9 b=undefined ans=NaN

function sum3(a=2,b)
{
    return a+b;
}
console.log(sum3(2,4));  //6
console.log(sum3(9));    //a=9 b=undefined ans=NaN
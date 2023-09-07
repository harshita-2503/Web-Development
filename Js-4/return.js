function sum(a,b)
{
    return a+b;
}
// let s=sum(2,3);
// console.log(s);

console.log(sum(3,4));

let res=sum(sum(1,2),3);
console.log(res);

function isAdult(age)
{
    if(age>=18)
    {
        return "adult";
    }
    else{
        return "not adult";
    }
}

console.log(isAdult(13));
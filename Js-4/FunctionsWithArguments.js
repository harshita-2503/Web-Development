function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}

printInfo("Harshita",20);
printInfo("Nancy",32);
printInfo("Siya");


function sum(a,b)
{
    console.log(a+b);
}

sum(1,2);
sum(4,5);

//practice ques

//to Calculate Average

function calcAvg(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}

calcAvg(3,5,4);



//practice ques
//print table
function printTable(n)
{
    for(let i=n;i<n*10;i+=n)
    {
        console.log(i);
    }
}

console.log("Table:");
printTable(5);


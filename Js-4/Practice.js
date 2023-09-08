function getSum(n)
{
    let sum=0;
    for(let i=1;i<=n;i++)
    {
        sum+=i;
    }
    return sum;

}

let n=prompt("Enter the number");
sum=getSum(n);
console.log(sum);

for(let i=1;i<=3;i++)
{
    console.log(`Outer Loop ${i}`);
    for(let j=1;j<=3;j++)
    {
        console.log(j);
    }
}

//while loop

console.log("Output of while loop");

let i=1;
while(i<=5)
{
    console.log(i);
    i++;
}

i=5
console.log("Backward");

while(i>=1)
{
    console.log(i);
    i--;
}

//displaying even numbers
console.log("Even numbers");
i=0;
while(i<=10)
{
    console.log(i);
    i=i+2;
}
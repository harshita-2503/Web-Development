function hello(){
    console.log("hello");
}

hello();

function printName(){
    console.log("harshita mahajan");
}

printName();

function print1to5(){
    for(let i=1;i<=5;i++)
    {
        console.log(i);
    }
}

print1to5();

function isAdult(){
    let age=18;
    if(age>=18)
    {
        console.log("adult");
    }
    else{
        console.log("not adult");
    }
}

isAdult();


//Create a function to roll a dice and always display the value of the dice(1 to 6)

function rollDice(){
    let random=Math.floor(Math.random()*6)+1;
    console.log(random);
}

rollDice();
rollDice();
rollDice();

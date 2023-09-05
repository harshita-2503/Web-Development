let fruits=["mango","apple","banana","orange","litchi"];

for(fruit of fruits)
{
    console.log(fruit);
}

//Example 2

for(element of "harshita")
{
    console.log(element);
}


//Nested for of loop

let heroes=[["superman","batman","wonderwoman"],["spiderman","ironman","thor"]];

for(list of heroes)
{
    for(hero of list){
        console.log(hero);
    }
}
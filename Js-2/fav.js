const fav="Avatar";
let guess=prompt("Guess my favorite movie");
while((guess!=fav)&&(guess!='quit'))
{
    guess=prompt("Wrong Guess please try again");

}
if(guess==fav){
    console.log("Congrats you guessed right!");
}
else{
    console.log("you quit");
}


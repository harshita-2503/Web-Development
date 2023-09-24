//a <p> with red text that says "hey I am red!!"

let p1=document.createElement('p');
p1.innerText="Hey I am red!";
document.querySelector('body').append(p1);

p1.classList.add('red');

//a <h3> with blue text that says "I'm a blue h3"

let h3=document.createElement('h3');
h3.innerText="I'm a blue h3!";
document.querySelector('body').append(h3);

h3.classList.add('blue');

//a <div> with a black border and pink background color with the following elements inside of it:
//->another <h1> that says "I'm in a div"
//->a <p> that says "Me Too!"

let div=document.createElement("div");
let h1=document.createElement('h1');
let para2=document.createElement('p');

h1.innerText="I'm in a div";
para2.innerText="Me too!!";

div.append(h1);
div.append(para2);

div.classList.add("box");
document.querySelector('body').append(div);



//Assignment

//Ans1
let button=document.createElement("button");
let input=document.createElement("input");

button.innerText="Click Me!";
document.querySelector('body').append(button);
document.querySelector('body').append(input);


//Ans2
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");


//Ans3
let btn=document.querySelector('#btn');
btn.classList.add('btnStyle');

//Ans4
let head1=document.createElement("h1");
head1.innerHTML="<u>DOM Practice</u>";
head1.classList.add("h1Style");
document.querySelector('body').append(head1);

let p3=document.createElement("p");
p3.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector('body').append(p3);



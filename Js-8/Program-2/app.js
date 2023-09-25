// let btn=document.querySelector("button");
// console.dir(btn);

let btns=document.querySelectorAll("button");
  for(btn of btns){
    btn.onclick=sayHello;
    btn.onmouseenter=function(){
        console.log("you entered a button");
    }
  }

// btn.onclick=function(){
//    // console.log("button was clicked");
//    alert("button was clicked");
// };


function sayHello(){
    alert("Hello!");
}

btn.onclick=sayHello;
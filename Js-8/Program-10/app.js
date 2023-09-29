
let test=document.querySelector("#test");

test.addEventListener("mouseleave",(event)=>{
    //highlight the mouseleave target
    event.target.style.color="pink";
    //reset the color after a short delay
    setTimeout(()=>{
        event .target.style.color="";
    },5000);
},false,
);

test.addEventListener("mouseout",(event)=>{
    //highlight the mouseout target
    event.target.style.color="orange";

    //reset the color after a short delay

    setTimeout(()=>{
        event.target.style.color="";
    },2000);
},false);
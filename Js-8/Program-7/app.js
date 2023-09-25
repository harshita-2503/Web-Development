// let button=document.querySelector("button");


// // button.addEventListener("click",function(event){
// //     console.log(event);
// //     console.log("button clicked");
// // });

// button.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// });


let inp=document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     // console.log(event);
//     console.log("key=",event.key);
//     console.log("code=",event.code);
//     console.log("key was pressed");
// })

// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// })

inp.addEventListener("keydown",function(event){
    // console.log("code=",event.code); //ArrowUp, ArrowDown,ArrowLeft, ArrowRight
    // if(event.code=="ArrowUp"){
    //     console.log("character moves forward");
    // }else if(event.code=="ArrowDown"){
    //     console.log("character moves backward");
    // }else if(event.code=="ArrowLeft"){
    //     console.log("character moves left");
    // }else if(event.code=="ArrowRight"){
    //     console.log("character moves right");
    // }

    console.log("code=",event.code); //ArrowUp(U), ArrowDown(D),ArrowLeft(L), ArrowRight(R)
    if(event.code=="KeyU"){
        console.log("character moves up");
    }else if(event.code=="KeyD"){
        console.log("character moves down");
    }else if(event.code=="KeyL"){
        console.log("character moves left");
    }else if(event.code=="KeyR"){
        console.log("character moves right");
    }

});
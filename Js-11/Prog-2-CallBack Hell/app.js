h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color='red';
// },1000);

// setTimeout(()=>{
//     h1.style.color='orange';
// },2000)

// setTimeout(()=>{
//     h1.style.color='green';
// },3000)

// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay);
// }  
// changeColor("red",1000);
// changeColor("orange",2000);
// changeColor("green",3000);

// function changeColor(color,delay,nextColorChange){
//         setTimeout(()=>{
//             h1.style.color=color;
//             if(nextColorChange)nextColorChange();
//         },delay);
//     }
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("blue",1000);
//         });
//     });
// });   //callback nesting=>callbackHell

//above code using promise chaining

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay);
    })
    
}

changeColor("red",1000)
.then(()=>{
    console.log("color changed to red");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("color changed to orange");
    return changeColor("green",1000)
})
.then(()=>{
    console.log("color changed to green");
    return changeColor("blue",1000)
})
.then(()=>{
    console.log("color changed to blue");

})
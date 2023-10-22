function getNum(){
   return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    let num=Math.floor(Math.random()*10)+1;
    console.log(num)
    resolve();
   },1000);
   });
}

async function demo(){
    await getNum();
    await getNum();
     getNum();
}

let h1=document.querySelector("h1");
// function colorChange(color,delay)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             console.log(`color changed to ${color}`);
//             resolve("color changed");

//         },delay);
//     })
// }

// async function demo(){
//     await colorChange("red",1000);
//     await colorChange("orange",1000);
//     await colorChange("green",1000);
//     colorChange("blue",1000);

// }
function colorChange(color,delay)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected");
            }
            
            h1.style.color=color;
            console.log(`color changed to ${color}`);
            resolve("color changed");

        },delay);
    })
}

async function demo(){
    try{
        await colorChange("red",1000);
        await colorChange("orange",1000);
        await colorChange("green",1000);
        await colorChange("blue",1000);
    }catch(err){
        console.log("error caught:",err);
    }
    

    let a=5;
    console.log(a);
    console.log("new number=",a+3);


}
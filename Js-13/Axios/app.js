let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";


// async function getFacts(){
//     try{
//         let res=await fetch(url);
//         let data=await res.json();
//         console.log(data.fact);
//         let res2=await fetch(url);
//         let data2=await res2.json();
//         console.log(data2.fact);
//     }catch(e)
//     {
//         console.log("error-",e);
//     }
//     console.log("bye");
    

// }


let btn=document.querySelector("#btn1");
btn.addEventListener("click",async()=>{
    let fact=await getCatFacts();
    //console.log(fact);
    let p=document.querySelector("#res");
    p.innerText =fact;

})



async function getCatFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(e)
    {
        console.log("error-",e);
        return "No fact Found";
    }
    

}

let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",async()=>{
    let link=await getDogImage();
    console.log(link);
    let img=document.querySelector("#res2")
    img.setAttribute("src",link);
    

})

async function getDogImage(){
    try{
        let res=await axios.get(url2);
        return res.data.message;
    }catch(e)
    {
        console.log("error-",e);
        return "/";
    }
    

}

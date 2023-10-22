let url="https://catfact.ninja/fact";

//our first api Request
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     //console.log(response.json());
//     response.json().then((data)=>{console.log((data))});
// })
// .catch((err)=>{
//     console.log("Error-",err);
// })
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log("data1:",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2:",data2.fact);
// })
// .catch((err)=>{
//     console.log("Error-",err);
// })

//Using fetch with async and await

async function getFacts(){
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.fact);
        let res2=await fetch(url);
        let data2=await res2.json();
        console.log(data2.fact);
    }catch(e)
    {
        console.log("error-",e);
    }
    console.log("bye");
    

}
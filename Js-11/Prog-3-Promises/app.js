// function saveToDb(data,success,failure)
// {
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//    if(internetSpeed>4){
//     success();
//    }
//    else 
//    {
//     failure();
//    }
    
// }
// saveToDb("Peace",
// ()=>{
//     console.log("success-you data was saved");
//     saveToDb("Hello",
//      ()=>{
//     console.log("success2-you data was saved");
//        saveToDb("Hsrshita",
//         ()=>{
//         console.log("success3-you data was saved");
   
//          },
//         ()=>{
//             console.log("failure3-weak connection, data not saved");
//         })

//      },
//      ()=>{
//         console.log("failure2-weak connection, data not saved");
//     })
// },
// ()=>{
//     console.log("failure-weak connection, data not saved");
// }
// )


//Promises

function saveToDb(data)
{
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
         resolve("success: data was saved to db");
        }
        else 
        {
         reject("failure: weak connection");
        } 
    });
}

// saveToDb("Harshita Mahajan");

//then() and catch() methods

// let request=saveToDb("Harshita");

// request.then(()=>{
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);

// })

// saveToDb("Harshita")
//     .then(()=>{
//        console.log("promise was resolved");   
//      })
//     .catch(()=>{
//        console.log("promise was rejected");
//     })  


// saveToDb("apna college")
// .then(()=>{
//     console.log("dat1 saved.");
//     saveToDb("helloworld").then(()=>{
//         console.log("data2 saved");
//     })
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })

//Above code in improved way-promise chaining 

// saveToDb("apna college")
// .then(()=>{
//     console.log("data1 saved.");
//     return saveToDb("helloworld")
// })
// .then(()=>{
//         console.log("data2 saved");
//         return saveToDb("Harshita");
// })
// .then(()=>{
//     console.log("data3 saved");
// })

// .catch(()=>{
//     console.log("promise was rejected");
// })

//result and error in promises

saveToDb("apna college")
.then((result)=>{
    console.log("data1 saved.");
    console.log("result:",result);
    return saveToDb("helloworld")
})
.then((result)=>{
       console.log("data2 saved.");
        console.log("result:",result);
        return saveToDb("Harshita");
})
.then((result)=>{
    console.log("data3 saved.");
    console.log("result:",result);
})

.catch((error)=>{
    console.log("promise was rejected");
    console.log("error:",error);
})

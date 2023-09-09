
//Higher order functions-Taking function as argument
function multipleGreet(func,count){
    for(let i=1;i<=count;i++)
    {
        func();
    }
}

let greet=function(){
    console.log("hello");
}

multipleGreet(greet,10);
multipleGreet(function(){console.log("namaste")},100);

//Higher Order Functions-Returns a function




let even=function(n){
    console.log(n%2==0);
}

function oddOrEvenFactory(request){
    if(request=="odd")
    {
        // let odd=function(n)
        // {
        //     console.log(!(n%2==0));
        // }
        // return odd;
        return function(n)
         {
             console.log(!(n%2==0));
         }

    }
    else if(request=="even")
    {
        let even=function(n){
            console.log(n%2==0);
        }
        return even;
        
    }
    else
    {
       console.log("Wrong Request"); 
    }
}

let request="odd";
let func=oddOrEvenFactory(request);
console.log(func);

request="even";
func=oddOrEvenFactory(request);
console.log(func);
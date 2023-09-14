function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us ",args[i]);
    }
}

function min1(){
    console.log(arguments)
    console.log(arguments.length);
    
}

function sum(...args){
    // arguments.reduce((sum,el)=>sum+el);  error coz argument is not an array its a collection so reduce method cannot be used
    return args.reduce((sum,el)=>sum+el);
}

function min(...args){
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    })

}
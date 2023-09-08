let str=["he","hello","bye","!"];

function concat(str)
{
   let result="";
   for(let i=0;i<str.length;i++)
   {
    result+=str[i];
   } 
   return result;

}

let res=concat(str);
console.log(res);
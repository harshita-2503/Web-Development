let arr=[1,2,3,4,5];

let print=function(el){
    console.log(el);
}

arr.forEach(print);

//or

arr.forEach(function(el){
    console.log(el);
});

arr.forEach((el)=>{
    console.log(el);
});



let arr2=[
{
    name:"Harshita",
    marks : 95
},
{
    name:"Gargi",
    marks : 87
},
{
    name:"ishita",
    marks : 56
}];
console.log(arr2);
arr2.forEach((student)=>
console.log(student.marks));
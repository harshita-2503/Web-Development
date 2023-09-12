 let num=[1,2,3,4,5];
 let double=num.map((el)=>{
    return el*2;
 })
 console.log(double);

 let f=num.map((el)=>{});
 console.log(f);


 let student=[
    {
    name:"Harshita",
    marks : 95
    },
    {
    name:"Gargi",
    marks : 94.4
    },
    {
     name:"ishita",
     marks : 56
    }];

let gpa=student.map((el)=>{
    return el.marks/10;
})
console.log(gpa);
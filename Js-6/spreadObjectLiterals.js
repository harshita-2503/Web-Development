const data={
    email:"harshitamahajan2020@gmail.com",
    password:"abcd",
};

const datacopy={...data,id:123,country:"India"};
console.log(datacopy);


let arr=[1,2,3,4,5];
let obj1={...arr};
console.log(obj1);

let obj2={..."hello"};
console.log(obj2);
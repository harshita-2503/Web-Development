let a=10;
let b=5;

//Arithmetic Operators

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Unary Operators

console.log(a++);  //10
console.log(++a);  //12

//Assignment Opeartors

b=a;
console.log(b);  //12

//Comparison Operators
console.log(a<18);
console.log(a<=12);
console.log(a>12);
console.log(a>=12);
console.log(a==12)
console.log(a!=12);

let n=5;
let str='5';
console.log(n==str);  //true(values are compared not the type)
console.log(0==' ');  //true
console.log(null==undefined);  //true

console.log(n===str);  //false(compares type as well as value)
console.log(0===' ');  //false
console.log(null===undefined); //false

//Comparison for non-numbers
console.log("Comparison for non-numbers:\n");
console.log('a'<'A');  //false
console.log('P'<'p'); //true













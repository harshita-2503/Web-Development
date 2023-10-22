let jsonRes='{"name":"Harshita","age":20}';
let validRes=JSON.parse(jsonRes);
console.log(validRes);

let student={
    name:"Harshita",
    marks:96,
}
console.log(JSON.stringify(student));
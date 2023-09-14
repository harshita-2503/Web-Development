const student={
    name:"karan",
    class:9,
    age: 14,
    subjects:["hindi","english","maths","science"],
    username :"karan@1234",
    password : "abcd",
    city : "Pune"
}


// let username=student.username;
// let password=student.password;

// let {username,password}=student;
// // let {username:user,password}=student;
// let {username : user , password : secret}=student;
let {username : user , password : secret,city: loc="Mumbai"}=student;


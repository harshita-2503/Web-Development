const post={
    username : "@harshita",
    content : "This is my #first post",
    likes: 150,
    reposts: 5,
    tags: ["@Infomatics","@Mahajan"]

};

//to access the values

console.log(post["content"]);
console.log(post.content);  //better way

let prop="reposts";
console.log(post[prop]);



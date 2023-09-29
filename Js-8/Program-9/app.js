let form=document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let inp=document.querySelector("input")
//     console.dir(inp);
//     // console.log(inp.innerText); //does not work
//     console.log(inp.value);
// });

form.addEventListener("submit",function(event){
    event.preventDefault();
    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#pass");

    let user=this.elements[0]; //form.element[0]
    let pass=this.elements[1];

    console.log(user.value);
    console.log(pass.value);



    alert(`Hi ${user.value},your password is set to ${pass.value}`);

});
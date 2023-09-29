let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    // console.log("form submitted");
    event.preventDefault();
    alert("form submitted")
});
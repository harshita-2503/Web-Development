const student={
    name:"harshita",
    marks:95,
    prop:this,             //global scope
    getName : function(){
        console.log(this);   //parent->calling object->student
        return this.name;
    
    },
    getMarks : ()=>{
        console.log(this);
        return this.marks;  //parent's scope->window
    }

};

console.log(student.getName());
console.log(student.getMarks());

const a=5;   //global scope



//Example -2
const student2={
    name:"harshita",
    marks:95,
    prop:this,             //global scope
    getName : function(){
        console.log(this);   //parent->calling object->student
        return this.name;
    
    },
    getMarks : ()=>{
        console.log(this);
        return this.marks;  //parent's scope->window
    },
    getInfo1 : function(){
        setTimeout(()=>{
           console.log("get info1");  //student
           console.log(this);

        },2000);
    },
    getInfo2 : function(){
        setTimeout(function(){
           console.log("get info 2");
            console.log(this);    //window
        },2000);
    }
};


const student={
    name : "harshita",
    age:20,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        console.log(this);
      let avg=(this.eng+this.math+this.phy)/3;
      console.log(`${this.name} got average marks of ${avg}`);  
    }
}

console.log(student.getAvg());

function getAvg(){
    console.log(this);
  }

  console.log(getAvg());
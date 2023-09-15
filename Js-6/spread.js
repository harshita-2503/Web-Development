let arr=[1,2,3,4,3,6,2,40,0,75,4,2,5,0];

console.log(Math.min(arr));
console.log(Math.min(arr[0],arr[1]));
console.log(Math.min(...arr));

arr.push(-1);
//(15) [1, 2, 3, 4, 3, 6, 2, 40, 0, 75, 4, 2, 5, 0, -1]
console.log(Math.min(...arr));  //-1
console.log(Math.max(...arr));
console.log(...arr);
console.log("Harshita");
console.log(..."Harshita");
// write a Code of find a Largest number 
let arr = [2,,67,87,65,45,4,18]
const output = arr.reduce((res,curr)=>{
    return res > curr ? res : curr
});
console.log(output);
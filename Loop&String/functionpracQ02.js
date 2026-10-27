/* Take a input From user create an array create an array
of numbers from 1 to n 
use the reduce method to calculate sum of all 
numbers in the array
use the Reduce method to calculate product of
all numbers in the array  */
let n = Number(prompt("Enter a Number:"))
let arr = [];
for (let i = 1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);
let sum = arr.reduce((pre,res)=>{
    return pre + res;
})
console.log("sum = ",sum)
let fact = arr.reduce((pre,res)=>{
    return pre * res;
})
console.log("fact = ",fact)
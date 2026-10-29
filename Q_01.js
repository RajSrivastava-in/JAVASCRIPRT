/*for a given array with marks of 
students  [85,87,44,37,76,60]
find the average Marks of the entire
Class */ 
let marks = [85,97,44,37,76,60]
let sum = 0;
for (let val of marks){
    sum += val;
}
  let avg = sum / marks.length;
console.log(`the Average of the class ${avg}`); N
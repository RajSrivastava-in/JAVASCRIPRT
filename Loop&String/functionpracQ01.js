/* We are given Array of Marks of student 
filterout of the marks of student that score
 90 +. */
let marks = [ 20,4,55,90,67,97,98,65,98,95]
 let newArr=marks.filter((val)=>{
    return val > 90;
 });
 console.log(newArr)
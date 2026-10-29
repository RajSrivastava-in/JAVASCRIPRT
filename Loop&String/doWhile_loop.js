let i = 1;
do{
    console.log("Raj Srivastav");
    i++;
} while (i <= 20);
//For-of loop
let str = "Shobhit university";
let size = 0;
for(let i of str) {
    console.log("i =", i);
    size ++;
}
console.log("string size =",size);
// For in loop 
let student ={
    Name: "Raj" ,
    Age: 18,
    cgpa : 8.00 
};
for (let key in student){
    console.log("key = ",key," value = ",value );
}
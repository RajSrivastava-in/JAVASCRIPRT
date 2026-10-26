/* Write a Code which can gives Grades 
To Student according to their Student
 */
let marks = Number(prompt("enter a Marks :"));
if( marks >= 80 && 100){
  console.log("Grade is A ");
}
else if(marks >= 70 && marks <=  89){
    console.log("Grade is B ");
} 
else if (marks >= 60 && marks <=69){
    console.log("grade is C ");
}
else if (marks >= 50 && marks<= 59){
    console.log("grade is D");
}
else if (marks >= 0 &&  marks <= 49){
    console.log("Grade is F " );
 } else {
    console.log("Invalid Marks");
}
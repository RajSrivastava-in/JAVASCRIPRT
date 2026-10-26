/*get user to input number using prompt 
("enter a number") check if the number
 is multiple of 5 or not */
let num = prompt("Enter a Number :")

if(num % 5 === 0){
    console.log(num,"is multiple of 5 ")
} else{
    console.log(num,"is not a  multiple of 5")
}
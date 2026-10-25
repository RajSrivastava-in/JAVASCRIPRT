/* Create a game ask a number from user 
and match the number */
let gamenum = 18;
let userNum = Number(prompt("Guess the Number  :"));

while (userNum != gamenum ){
   userNum = Number (prompt("enter a new number your number is incorrect:"));
}
console.log("Congratulation!, you entered A right Number");

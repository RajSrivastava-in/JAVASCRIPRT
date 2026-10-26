/*Create a Function using the "Function" keyword that
 takes a String as An Argument & return the number of
 vowel in string*/
 function countVowels(str){
    let count = 0;
    for (const char of str){
        if ( char === "a"|| char ==="e" || char ==="i" || char === "o" || char ==="u"){

        count++;
        }
    }
    console.log(count);
 }
 // it is also Create an Arrow to perform the some task
 
const counVowels = (str) => {
    let count = 0;

    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }

    return count;
};

console.log(counVowels("hello world"));

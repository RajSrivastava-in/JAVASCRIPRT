let  food_items =["Appple","Banana","Orange","Papaya"]
// add New Items using push Method  
food_items.push("Litchi","Burger","Sandwitch","Noodles")
console.log(food_items);
//delete the item at the last pos using pop method
food_items.pop()
console.log(food_items)
// Change the items into string
let Marks = ["12","34","94","98","78","67"]
Marks.toString()
console.log(Marks)
//concat Means Add to array in one array 
let concat = food_items.concat(Marks);
console.log(concat)
// Add New Items on First Pos using unshit 
let unshift = Marks.unshift();
console.log(unshift)
// Shift mrtjhod using remove first item 
let arr = [10, 20, 30, 40];

let result = arr.shift();

console.log(result); // 10
console.log(arr);    // [20, 30, 40]
//slice method using Return the piece of array
Marks.slice(1,4) 
// Splice Method Using change original Array (add,remove,Replace)
let splice = arr.splice(2,3,101,102);
console.log(splice)
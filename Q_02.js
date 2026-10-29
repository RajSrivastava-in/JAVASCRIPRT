let comp = [ "Bloomberg","Microsoft","Uber","Google","Ibm","Netflix"]
comp.shift();
comp.splice(1,1,"ola");
comp.push("Amazon");
console.log(comp);
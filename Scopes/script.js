var a=10;
let b=10;
const c=30;

console.log("Outside",a);
console.log("Outside",b);
console.log("Outside",c);

function f1(){
    console.log("Inside Function",a);
    console.log("Inside Function",b);
    console.log("Inside Function",c);
    
}
f1()

if(true){
    console.log("Inside Block",a);
    console.log("Inside Block",a);
    console.log("Inside Block",a);
    
}
console.log("Inside Block",a);
console.log("Inside Block",b);
console.log("Inside Block",c);

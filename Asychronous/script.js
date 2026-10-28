// Synchronus code
console.log("Start");
for(let i=1;i<=100;i++){
    console.log(i);
    
}
console.log("End");



// Asychronous code 

console.log("Start");   //synchronous code
setTimeout(()=>{
    console.log("Hello Everyone!!");
    
},5000)

console.log("End"); //Synchronous


// //Working Procedure:
// first it executes line no 22 then it enters inside setTimeout 
// here it schedules the callback function for 5sec that means after 5 sec it will execute the callback function
// 5 sec it will execute the callback function.
// during this 5 sec 


console.log("Welcome to AbhiBus"); //synchronous code 

setTimeout(()=>{
    console.log("Thank You for booking");
    console.log("Use ABHIRETURN Coupon to Get 50% Discount");
    
    
},7000)
console.log("Your boooking is in process..."); //synchronous code 


console.log("Loading...");
setTimeout(()=>{
    console.log("Data Loaded Succesfully");
    
},3000)



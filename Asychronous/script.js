// // Synchronus code
// console.log("Start");
// for(let i=1;i<=100;i++){
//     console.log(i);
    
// }
// console.log("End");



// // Asychronous code 

// console.log("Start");   //synchronous code
// setTimeout(()=>{
//     console.log("Hello Everyone!!");
    
// },5000)

// console.log("End"); //Synchronous


// // //Working Procedure:
// // first it executes line no 22 then it enters inside setTimeout 
// // here it schedules the callback function for 5sec that means after 5 sec it will execute the callback function
// // 5 sec it will execute the callback function.
// // during this 5 sec 


// console.log("Welcome to AbhiBus"); //synchronous code 

// setTimeout(()=>{
//     console.log("Thank You for booking");
//     console.log("Use ABHIRETURN Coupon to Get 50% Discount");
    
    
// },7000)
// console.log("Your boooking is in process..."); //synchronous code 


// console.log("Loading...");
// setTimeout(()=>{
//     console.log("Data Loaded Succesfully");
    
// },3000)




//setInterval()
console.log("Start");
setInterval(() => {
    console.log("This is asynchronus code");
    console.log("It will keep on execute after a delay time");
    
    
},3000);
console.log("End");


//counter
console.log("Timer Standard");
let count=0;
setInterval(()=>{
    count++;
    console.log("Count Down:",count);
    
},1000)

//Clock
console.log("This Is digital Clock");
console.log(new Data());  //complete date and time everything

setInterval(()=>{
    console.log(new Date().toLocaleString()); //only date and time
    console.log(new Date().toLocaleDateString()); //Only Time
    console.log(new Date().toLocaleDateString());
    
    
    
},1000)



// // // Synchronus code
// // console.log("Start");
// // for(let i=1;i<=100;i++){
// //     console.log(i);
    
// // }
// // console.log("End");



// // // Asychronous code 

// // console.log("Start");   //synchronous code
// // setTimeout(()=>{
// //     console.log("Hello Everyone!!");
    
// // },5000)

// // console.log("End"); //Synchronous


// // // //Working Procedure:
// // // first it executes line no 22 then it enters inside setTimeout 
// // // here it schedules the callback function for 5sec that means after 5 sec it will execute the callback function
// // // 5 sec it will execute the callback function.
// // // during this 5 sec 


// // console.log("Welcome to AbhiBus"); //synchronous code 

// // setTimeout(()=>{
// //     console.log("Thank You for booking");
// //     console.log("Use ABHIRETURN Coupon to Get 50% Discount");
    
    
// // },7000)
// // console.log("Your boooking is in process..."); //synchronous code 


// // console.log("Loading...");
// // setTimeout(()=>{
// //     console.log("Data Loaded Succesfully");
    
// // },3000)




// //setInterval()
// console.log("Start");
// setInterval(() => {
//     console.log("This is asynchronus code");
//     console.log("It will keep on execute after a delay time");
    
    
// },3000);
// console.log("End");


// //counter
// console.log("Timer Standard");
// let count=0;
// setInterval(()=>{
//     count++;
//     console.log("Count Down:",count);
    
// },1000)

// //Clock
// console.log("This Is digital Clock");
// console.log(new Data());  //complete date and time everything

// setInterval(()=>{
//     console.log(new Date().toLocaleString()); //only date and time
//     console.log(new Date().toLocaleDateString()); //Only Time
//     console.log(new Date().toLocaleDateString());
    
    
    
// },1000)




// Timeout for above

// clear interval

// console.log("Start");
// let id=setTimeout(()=>{
//     console.log("This is setTimeout");
    
// },2000)
// clearTimeout(id)
// console.log("Timer Removed");



// counter
let count=0;
let id=setInterval(()=>{
    count++; //count=count+1;
    console.log("Count down:",count); //1 //2 //3 //4 //5
    if(count==5){
        clearInterval(id)
    }
    
},1000)



//What is a promise
//How to create a promise
 let payment=new Promise((resolve ,reject)=>{
    console.log("Payment Processing...");
    setTimeout(()=>{
        let paymentStatus=false;
        if(paymentStatus){
            resolve("Payment successfuly confirmed")
        }
    else{
        reject("Payment failed! please try again")
    }
 },3000)
    

 })


//  How to handle a promise

payment.then((message)=>{
    console.log(message);
    
})
        .catch((reason)=>{
            console.log(reason);
            
        })






let foodOrder=new Promise((resolve,reject)=>{
    console.log("Placing your food order...");
    setTimeout(()=>{
        let orderAcepted=false;
        if(orderAcepted){
            resolve("Your food order has been accepted")
        }
        else{
            reject("Sorry! your food order has been rejected")
        }
    },3000)
    
})
foodOrder.then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("Promise completed");
    
})



//

let bus=new Promise((resolve,reject)=>{
    console.log("waiting for the bus...");
    setTimeout(()=>{
        let busHasArrived=true;
        if(busHasArrived){
            resolve({
                travellies:"Morning Star",
                busNo:"KL29P3009",
                status:"Arrived"

            })
        }
        else{
            reject("Bus delayed....")
        }

    },4000) 

    
})

bus.then((message)=>{
    console.log(message.travellies);
    console.log(message.status);

    
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("Thankyou for using morning start travells");
    
})


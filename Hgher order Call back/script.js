function travelling(a){
    console.log("Going Home...");
    // console.log(a);
    a()  
}

function notification(){
    console.log("Reached Home...");
    
}travelling(notification)





function makePayment(x){
    console.log("Payment is processing");
    console.log("Payment Successful");
    // console.log(x);
    x()
      
}
function readyMessage(){
    console.log("YOur Food order Placed ");
    
}makePayment(readyMessage)





function ticketBooking(a){
    console.log("Booking Ticket");
    a("Kalki",6)
}
function sendConfirmation(movie,time){
    console.log("Ticket Booked For",movie,"Is Successful and the show time is",time);

    
}ticketBooking(sendConfirmation)






function f1(){
    return "Hiii"
}
let a=f1()
console.log(a);






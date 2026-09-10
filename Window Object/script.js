// console.log(window);
// console.log("window.alert(welcome to testyantra jail");

// let salary=prompt("Enter Your expected salary")
// console.log("Arjun expected salary");
// console.log(typeof salary);
// let result=confirm("Are You Sure You want To Join this Jail")


// let userName="Arjun";
// let password="Secret";
// if(userName==="Arjun" && password==="Secret"){
//     alert("Arjun Login Succesful")
// }
// else{
//     alert("Sir please enter valid Username And Password")
// }


// let result=confirm("Are You sure You want to logout?")
// if(result===true){
//     console.log("Logged Out Successful");
    
// }


// let name=prompt("Enter Your name")
// console.log("UserName is:", name);


// let age = Number(prompt("Enter Your Age"));

// if (age>=18){
//     alert("You Are Eligible");

// }else{
//     alert("You Are not Eligible");
// }




// let marks = Number(prompt("Enter Your Marks"));

// if (marks>=35){
//     alert("Congratulations");

// }else{
//     alert("You Are failed");
// }


// let age = Number(prompt("Enter Your Age"));

// if (age>=18){
//     alert("You Are Eligible to watch");

// }else{
//     alert("You Are not Eligible to watch");
// }



// let balance = 5000;
// let amount = Number(prompt("Enter Withdrawal amount"));


// if(amount<=balance){
//     balance= balance - amount;
//     alert("Withdrawal successful");
//     alert("Remaining Balance: "+balance);
// }else{
//     alert("Insufficient Balance");
// }


//Discount system

// let amount = Number(prompt("Enter Your purchase amount"));

// if(amount>=5000){
//     alert("congratulations! You got 20% off");

// }else if(amount>=2000){
//     alert("congratulations! You got 10% off");
// }else {
//     alert("No Discount Available.");
// }


//Delete confirmation

// let result = confirm("Are you sure you want to delete your account?")

// if(result){
//     alert("Account Deletion Successful");
// }else{
//     alert("Account Deletion Cancelled");
// }


// let product = prompt("Enter the product name");

// let result = confirm("Do you want to buy " + product + "?");

// if(result){
//     alert(product+" Ordered Successfully!");
// }else{
//     alert("Order cancelled!");
// }



let food = prompt("Enter Food Name");
let quantity = Number(prompt("Enter Quantity"));


if(quantity > 0) {
    let result = confirm(
        "Do You want to order " + quantity + " " + food + "?");

if(result){
    alert("Your order for " + quantity + " " + food + " is confirmed! ");
}else{
    alert("Order Cancelled!");
}
}else {
    alert("Please enter a valid quantity!");
}

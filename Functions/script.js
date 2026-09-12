// function greeting(){
//     console.log("Good Morning");
//     console.log("Attend the jail fast");
    
// }
// greeting()

// function coffeeMachine(customer,coffeetype,price){
//     console.log("Type of coffee",coffeetype);
//     console.log(HotelTaj);
//     console.log("Boi Water");
//     console.log("Add milk");
//     console.log("Add Coffee Powder");
//     console.log("Add Sugar");
//     console.log("Pour coffee in cup");
//     console.log("Total Price Is:",price);
//     console.log("Prepared Coffee For:",customer);

    
// } coffeeMachine("Rose","Cold Coffee",65)





function Message(Company){
    for(let i=1;i<=50;i++){
        console.log("count",i);
        console.log("Join The Great",Company);
        console.log("Feel The Actual Heaven(Hell)");
        
        
    }
   
} Message("Testyantra")




//1.Employee Salary Calculation

function calculateSalary(basicSalary,bonus){
    let totalSalary = basicSalary+bonus;
    console.log("Total salary:",totalSalary);
    
}calculateSalary(25000,5000);


//2.Electricity Bill Calculation

function calculateElectricityBill(units,rate){
    let bill = units * rate;
    console.log("Electricity Bill:",bill);
    

}
calculateElectricityBill(150,7);


//3.Bank balance

function checkBalance(balance,deposit){
    let newBalance = balance + deposit;
    console.log("New Balance:",newBalance);
    
}checkBalance(20000,5000);


//4.Shopping Bill

function calculateShoppingBill(price,quantity){
    let total = price * quantity;
    console.log("Shopping Bill:",total);
    
}
calculateShoppingBill(500,3)

//5.Student Marks

function calculateTotalMarks(eng,maths,chemistry){
let total = eng + maths + chemistry;
console.log("Total MARKS:",total);

}
calculateTotalMarks(80,75,90)


//6.Mobile Recharge

function mobileRecharge(balance,rechargeAmount,simCard){
    let newBalance = balance + rechargeAmount;
    console.log("Your"+" "+simCard+" "+"Recharge Successful");
    console.log("New Balance:",newBalance);
    
    
}mobileRecharge(100,299,"Airtel")

//7.Hotel Bill

function calculateHotelBill(hotelName,roomPrice,days,noOfPersons){
    let totalBill = roomPrice* days;
    console.log("Welcome to:",hotelName,"Hotel....");

    console.log("Hotell Bill:",totalBill);
    console.log("No Of Days",days);
    console.log("No of Persons:",noOfPersons);

    

}calculateHotelBill("Taj",2000,3,4);


//8.Petrol cost

function calculatePetrolCost(litres,pricePerLitre){
    let totalCost = litres *pricePerLitre;
    console.log("Petrol cost:",totalCost);
    
}calculatePetrolCost(10,105);


//9.Employee Bonus

function calculateBonus(salary,bonusPercentage){
    let bonus =  salary * bonusPercentage / 100;
    console.log("Employee Bonus:",bonus);
    
}calculateBonus(30000,10)

//10.Simple Loan Interest

function calculateInterest(principal,rate,years){
    let interest = principal *rate *years /100;
    console.log("Interests:",interest);
    
}calculateInterest(50000,8,2);
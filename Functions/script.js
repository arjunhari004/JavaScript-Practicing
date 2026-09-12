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


//Electricity Bill Calculation

function calculateElectricityBill(units,rate){
    let bill = units * rate;
    console.log("Electricity Bill:",bill);
    

}
calculateElectricityBill(150,7);


//Bank balance

function checkBalance(balance,deposit){
    let newBalance = balance + deposit;
    console.log("New Balance:",newBalance);
    
}checkBalance(20000,5000);


//Shopping Bill

function calculateShoppingBill(price,quantity){
    let total = price * quantity;
    console.log("Shopping Bill:",total);
    
}
calculateShoppingBill(500,3)

//Student Marks

function calculateTotalMarks(eng,maths,chemistry){
let total = eng + maths + chemistry;
console.log("Total MARKS:",total);

}
calculateTotalMarks(80,75,90)
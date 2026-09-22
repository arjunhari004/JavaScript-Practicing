// var a=10;
// let b=10;
// const c=30;

// console.log("Outside",a);
// console.log("Outside",b);
// console.log("Outside",c);

// function f1(){
//     console.log("Inside Function",a);
//     console.log("Inside Function",b);
//     console.log("Inside Function",c);
    
// }
// f1()

// if(true){
//     console.log("Inside Block",a);
//     console.log("Inside Block",a);
//     console.log("Inside Block",a);
    
// }
// console.log("Inside Block",a);
// console.log("Inside Block",b);
// console.log("Inside Block",c);



// //FUNCTION SCOPE


// function mahaGuru(){
//     var user1 = "rose";
//     let user2 = "Arjun";
//     const user3 = "Abhii";

//     console.log("Victim1",user1);
//     console.log("Victim2",user2);
//     console.log("Victim3",user3);
    
// }
// mahaGuru();
// console.log("Victim1",user1);
// console.log("Victim2",user2);
// console.log("Victim3",user3);
    


// //Block Scope


// if("Qspiders"){
//     var isBatteriesAvailable=false;
//     let studentsCount=700;
//     const branch="Kochi";

//     console.log("Is Batteries are available:",isBatteriesAvailable);
//     console.log("Total no of victims:",studentsCount);
//     console.log("Branch Name:",branch);
    
    
    
// }
// console.log("is batteries are available:",isBatteriesAvailable);
// console.log("Branch Name:",branch);
// console.log("Total no of victims",studentsCount);




//18/09/2026



// let companyName = "TestYantra";
// function employeeDetails(){
//     console.log("Employee works at"+ companyName);
    
// }
// function companyDetails(){
//     console.log("Company: "+ companyName);
    
// }
// employeeDetails();
// companyDetails();



// let currency="₹";
// function showProductPrice(){
//     let price = 25000;

//     console.log("Price:",currency+price);
    
// }
// showProductPrice()

// function showCartTotal(){
//     let total =45000;
//     console.log("Cart total:",currency+total);
    
// }




// let deliveryCharge = 40;
// function calculateFoodBill(){
//     let foodPrice =500;
//     console.log("Food bill:",foodPrice+deliveryCharge);
    
// }calculateFoodBill();

// function calculateOrderBill(){
//     let orderPrice=800;
//     console.log("Order Bill:",orderPrice+deliveryCharge);
    
// }calculateOrderBill();





//function scope 


// function calculateSalary(){
//     let salary = 30000;
//     let bonus = 5000;
//     let totalSalary = salary + bonus;
//     console.log(employee);
//     console.log("Total Salary:",totalSalary);
    
    
// }calculateSalary();
// console.log(salary);



// function checkBalance() {

//     let balance = 25000;
//     let accountNumber = "12345";

//     console.log("Balance:", balance);
//     console.log("Account:", accountNumber);
// }

// checkBalance();

// console.log(balance); 





// function calculateElectricityBill() {

//     let units = 180;
//     let rate = 6;

//     let bill = units * rate;

//     console.log("Electricity Bill:", bill);
// }

// calculateElectricityBill();

// console.log(units); 







// let product = "Laptop";

// if (product === "Laptop") {

//     let discount = 10;
//     const message = "10% discount available";

//     console.log(product);
//     console.log(discount);
//     console.log(message);
// }

// console.log(product);  
// console.log(discount); 






// let employeePresent = true;

// if (employeePresent) {

//     let attendanceMessage = "Employee is Present";

//     console.log(attendanceMessage);
// }

// console.log(employeePresent);     
// console.log(attendanceMessage); 



// let products = ["Laptop", "Mobile", "Watch"];

// for (let i = 0; i < products.length; i++) {

//     console.log(products[i]);
// }

// console.log(products); 
// console.log(i);   



// //Mixed Example
let company = "Amazon"; // Global Scope

function employeeDetails() {

    let employeeName = "Ravi"; // Function Scope

    if (employeeName === "Ravi") {

        let salary = 40000; // Block Scope

        console.log(company);      
        console.log(employeeName); 
        console.log(salary);       
    }

    console.log(company);      
    console.log(employeeName); 
    // console.log(salary);    
}

employeeDetails();

console.log(company);      
// console.log(employeeName); 
// console.log(salary);       
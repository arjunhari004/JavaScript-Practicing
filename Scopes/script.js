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



let companyName = "TestYantra";
function employeeDetails(){
    console.log("Employee works at"+ companyName);
    
}
function companyDetails(){
    console.log("Company: "+ companyName);
    
}
employeeDetails();
companyDetails();






// function cart(item1,...x){
//     console.log(item1);
//     console.log(x);
    
    
// }
// cart("Laptop","Headphones","Watch")

// // Note:Rest


// // Spread Operator(...)
// // by using this we can copy an array/object


// let mahaGuru=["Arjun","Abin","Abhinand","Arunima"]
// console.log("Original Array:",mahaGuru);

// let copiedArray=["Bazim",...mahaGuru,"Akhu"]
// console.log("Copied Array:",copiedArray);


// let kochiBranch={
//     areaName:"Palarivettom",
//     noOfStudents:450,
//     BranchHead:undefined
// }
// console.log("Original Object:",kochiBranch);


// let copiedObject={...kochiBranch}
// console.log("Copied Object:",copiedObject);





// // this keyword

// let student={
//     user:"Liya",
//     age:23,
//     display:function liya(){
//         console.log(this);
//         console.log(this.user);
        
        
//     }
// }
// student.display()



// // Non-strict mode

// function f1(){
//     console.log(this); //this points to windowwindow
    
// }f1()

// "Use strict"
// function f1(){
//     console.log(this);  //this keyword value will be undefined
    
// }
// f1()


// //arrow functions do not have their own this keyword
// //it takes this from outer scope
// //(Inside outer scope we have window object)
// //so it points to window object only...

// let a=()=>{
//     console.log(this);
    
// }
// a()


// let student1={
//     user:"liya",
//     age:22,
//     display:()=>{
//         console.log(this);
        
//     }
// }
// student1.display()




let account ={
    holder:"Kalam",
    balance:5000,
    withdraw:function (amount){
        if(amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log("withdraw:" +amount);
            console.log("remaining balance:", +this.balance);
            
            
        }
        else {
            console.log("insufficient balance");
            
        }
    },
    showBalance:function() {
        console.log("Balance:" +this.balance);
        
    }
    
};

account.withdraw(1000);




// let trainers=["Dhanish","Sathya","Sreemathi"];
// console.log(trainers);
// console.log(trainers[1]);
// trainers[1]="Kalam";
// console.log(trainers);





// let students=["Basil","Adwaith","Vasudev"];
// console.log(students);
// students.push("Smile");
// console.log(students);
// students.push("Sree lak...");
// console.log(students);
// students.pop()
// console.log(students);
// students.pop()
// console.log(students);




// //Add cart Item

// let cart=["Mouse"];
// cart.push("Keyboard","WebCam");
// console.log(cart);



// let notifications=[];
// notifications.push("New Message");
// console.log(notifications);


// //pop()

// let cart1=["Phone","Case","Charger"];
// let removed=cart1.pop();
// console.log(removed);



// let notifications1=["Login","Payment","Logout"];
// console.log(notifications1.pop());



// let actions = ["Type","Save","Delete"];
// let lastAction = actions.pop()
// console.log(actions.pop());




// //unshift(-to add element at the starting of an array)
// let items=["Watch","Shoes","Mobile"]
// console.log(items);
// items.unshift(3500)
// console.log(items);
// //shift to remove from starting of an array

// items.shift()
// console.log(items);




// let student1="Liya";
// let prices=[10,30,40,70,100]
// let res=prices.slice(1,4)
// console.log(res);


// //Remove

// let fruits=["Apple","Mango","Orange","Grape"];
// console.log(fruits);
// fruits.splice(1,2)
// console.log(fruits);


// //add

// let fruits1=["Apple","Mango","Orange","Grape"];
// fruits1.splice(2,0,"Ilana","Aleena")
// console.log(fruits);



// //replace

// let fruits=["Apple","Mango","Orange","Grape"];
// fruits.splice(3,4,"Banana")
// console.log(fruits);


//Reverse

// let mahaguru=["Arjun","Abhi","Abin ms","Akash"];
// console.log("Before Reverse:",mahaguru);
// mahaguru.reverse()
// console.log("After Reverse:",mahaguru);


// let prices=[2000,999,3500,500,700];
// prices.forEach((ele,ind,arr)=>{
//       console.log("Element:",ele+20);
//       console.log("Index:",ind); 
//       console.log(arr); 
// }) 



// let names=["Rose","Anugraha","Aswathi"];
// let result=names.forEach((ele)=>{
//       console.log(ele);
//       return "Hii";//For each method we cannot return anything 
      
// })
// console.log(result);



//Important


//Map() METHOD

// let names=["Rose","Anugraha","Aswathi"];
// let res=names.map((ele)=>{
//       return ele;
// })
// console.log(res);


// let prices=[100,200,300,400,500];
// let result=prices.map((element)=>{
//       return element+50;

// })
// console.log("Returned Array",result);
// console.log("Original Array",prices);



let users=["Basil","Vasudev","Anugraha","Aswathi"];
let res=users.map((ele)=>{
      return ele.toUpperCase()
})
console.log("Actual Array",users);
console.log("Returned Array",res);


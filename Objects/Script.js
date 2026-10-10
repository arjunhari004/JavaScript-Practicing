// // let student={
// //     user:"Arjun",
// //     city:"Kayamkulam",
// //     haschildren:5,
// //     "@gmail":"arjun@gmail.com",
// //     "phone-number':9034050921,
// //     101:30000


// // }
// // console.log( );



// let student2={
//     name:"Arjun",
//     id:103,
//     skills:["Html","Css","Js",["Rose","Anu"],"Python","Sql"],
//     address:{
//         city:"Ernakulam",
//         pincode:67899,
//         contact:108
//     }
// }

// console.log(student2.skills[3]);
// console.log(student2.skills[3][1]);
// console.log(student2.address);
// console.log(student2.skills[2]);



// //Product details

// let Product ={
//     productName:"Iphone 17 pro max",
//     price:100000,
//     brand:"Apple",
//     inStock:true,
//     colors:["Black","Blue","Silver"],
//     specifications:{
//         ram:"128Gb",
//         storage:"256gb",
//         display:"6.5 inch"
//     },
//     discount:10,
//     rating:4.5,
//     warranty:null,
//     deliveryDate:undefined,
//     category:"Mobile Phone"

// };

// console.log(Product);
// console.log(Product.productName);
// console.log(product.price);
// console.log(product.colors);
// console.log(product.specifications.ram);

// //employee


// let employee={
//     employeeId:"TY1234",
//     name:"Arjun",
//     age:25,
//     salary:32000,
//     isActive:true,
//     skills:["HTML","CSS","JavaScript","React"],
//     experience:{
//         years:undefined,
//         company:"ABC Technologies",
//         address:{
//             branch:"Kochi",
//             pincode:65434
//         },
//         role:"Frontend developer"
//     },
//     married:false,
//     manager:null,
//     joiningDate:undefined,
//     location:"Hydrabad"

// }

// console.log(employee);
// console.log(employee.name);
// console.log(employee.salary);
// console.log(employee.skills);
// console.log(employee.experience.company);
// console.log(employee.experience.address.branch);



// //Order details

// let order={
//     orderId:"ORDD123",
//     customerId:"Kiran",
//     amount:2599,
//     paymentSuccesful:true,
//     products:[
//         "T-shirts",
//         "Jeans",
//         "shoes"
//     ],
//     deliveryAddress:{
//         houseNo:"12-45",
//         street:"Main Road",
//         city:"Vijayawada",
//         pincode:65479

//     },
//     couponApplied:false,
//     discountAmount:200,
//     deliveryCharge:50,
//     "tracking-Id":null,
//     expectedDelivery:undefined,
//     "payment-Method":"UPI"
// };



// console.log(order["payment_Method"]);
// console.log(order);
// console.log(order.orderId);
// console.log(order.amount);
// console.log(order.products);
// console.log(order.deliveryAddress.city);



// let mahaguruVictim={
//     victim:"Rose",
//     vId:101
// }
// console.log("Details Of victim",mahaguruVictim);
// console.log(mahaguruVictim.vId);
// console.log(mahaguruVictim["vId"]);

// // mahaguruVictim.college="Mahaguru";  //Adding property
// // console.log(mahaguruVictim);

// // mahaguruVictim.vId=301;  //Updating Property
// // console.log(mahaguruVictim);

// // delete mahaguruVictim.college;
// // console.log(mahaguruVictim); //deleting Property

// // delete mahaguruVictim;
// // console.log(mahaguruVictim);

// // mahaguruVictim=null;
// // console.log(mahaguruVictim);

// //

// let product={
//     item:"Mobile",
//     price:75000
// }
// console.log("Before Seal",product);

// Object.seal(product)
// product.brand="Samsung Galaxy";  //Adding Not possible
// console.log(product);


// product.price=55000;//Update Possible
// console.log(product);

// delete product.price;
// console.log(product);//We cannot delete

// //

// let product={
//     item:"Mobile",
//     price:75000,
// }

// console.log("Before Freeze",product);
// Object.freeze(product)


// product.brand="Samsung"; //Addind is not possible

// console.log(product);

// product.price=4000;//updating property is not possible



// let product={
//     item:"Mobile",
//     price:75000,
//     color:"Black",
//     brand:"Samsung",
//     battery:"6000mAh"
// }

// console.log(product.keys);
// console.log(Object.keys(product));
// console.log(Object.values(product));
// console.log(Object.entries(product));



// //Map Example

// let users=["Parvathy","Meenakshi","Liya","Rose"]
// let result=users.map((ele,ind)=>{
//     console.log("element",ele);
//     console.log("Index",ind);
//     return ele
    
    
// })
// console.log("Result:",result);



//For of()example-this is an array method to fetch each values from the array


// let names=["Abin","melbin","Albert","Abhinand"]
// for(let m of names){
//     console.log("Students names:",m);
    
// }



// let prices=[35,34,544,566,3500]
// for(let x of prices){
//     console.log("Prices",x);
    
// }


// for(let x in prices){
//     console.log(x);
    
// }

// let noise={
//     name:"FirstRowFirstBoy",
//     id:101,
//     course:"Javascript"
// }
// for(let n in noise){
//     console.log(n);
//     console.log(noise[n]);
//     console.log("Properties",":",noise[n]);
    
// }






// let prices=[20,30,40,50]
// let res=prices.map((ele,ind,arr)=>{
//     console.log(ele);
    
// // })
// // console.log(res);


// let ab=[{
//     name:"aa",
//     id:101

// },
// {
//     name:"bb",
//     id:201
// },
// {
//     name:"cc",
//     id:301
// },
// {
//     name:"dd",
//     id:401
// }]

// let res=ab.map((ele)=>{
//     return ele.name;
// })
// let res2 = ab.map((ele)=>{
//     return ele.id;
// })
// console.log(res);
// // console.log(res2);




// // Create array of 3 objects


// let data=[{
//     item:"Mobile",
//     price:50000,
//     details:{
//         brand:"Oppo",
//         color:"White"
//     }
// },
// {
//     item:"Laptop",
//     price:90000,
//     details:{
//         brand:"Hp",
//         color:"Grey"
//     }
// },
// {
//     item:"Keyboard",
//     price:70000,
//     details:{
//         brand:"hp",
//         color:"black"
//     }
// }]

// data.map((ele)=>{
//     console.log(ele);
//     console.log(ele.details.color);
//     console.log(ele.details.brand);
//     console.log(ele.price);
    
    
// })


// let users=[{name:"Aparna",hobbies:["Coming","Struggling","Going","Thinking"]
// },{Name:"Arjun",hobbies:["Going","Coming","Studying","Chilling"]},
// {Name:"Abin",hobbies:["Going","chilling","Hai"]}]

// users.map(()=>{
//     console.log(ele.hobbies[3]);
    
// })


// // to return above value

// let result=users.map((ele)=>{
//     return ele.hobbies[3]
// })
// console.log(result);



// let products=[{
//     id:1,
//     name:"Laptop",
//     price:50000,
//     category:{
//         name:"Electronics",
//         department:"Computers"
//     },
//     reviews:[
//         {user:"Ravi",rating:5},
//         {user:"Priya",rating:4}
//     ]
// },

// ]



// let restaurants=[
//     {
//     name:"Spicy Kitchen",
//     location:{
//         city:"Kochi",
//         area:"Palarivettom"
//     },
//     menu:[
//         {
//             item:"Chicken Biriyani",
//             price:250,
//             ingredients:["Rice","Chicken","Biri"]
//             chef:{
//                 name:"Arun",
//                 experience:8
//             }

//     },
//     {
//         item:"Veg Biriyani",

//     }]

// }]
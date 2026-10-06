// let student={
//     user:"Arjun",
//     city:"Kayamkulam",
//     haschildren:5,
//     "@gmail":"arjun@gmail.com",
//     "phone-number':9034050921,
//     101:30000


// }
// console.log( );



let student2={
    name:"Arjun",
    id:103,
    skills:["Html","Css","Js",["Rose","Anu"],"Python","Sql"],
    address:{
        city:"Ernakulam",
        pincode:67899,
        contact:108
    }
}

console.log(student2.skills[3]);
console.log(student2.skills[3][1]);
console.log(student2.address);
console.log(student2.skills[2]);



//Product details

let Product ={
    productName:"Iphone 17 pro max",
    price:100000,
    brand:"Apple",
    inStock:true,
    colors:["Black","Blue","Silver"],
    specifications:{
        ram:"128Gb",
        storage:"256gb",
        display:"6.5 inch"
    },
    discount:10,
    rating:4.5,
    warranty:null,
    deliveryDate:undefined,
    category:"Mobile Phone"

};

console.log(Product);
console.log(Product.productName);
console.log(product.price);
console.log(product.colors);
console.log(product.specifications.ram);

//employee


let employee={
    employeeId:"TY1234",
    name:"Arjun",
    age:25,
    salary:32000,
    isActive:true,
    skills:["HTML","CSS","JavaScript","React"],
    experience:{
        years:undefined,
        company:"ABC Technologies",
        address:{
            branch:"Kochi",
            pincode:65434
        },
        role:"Frontend developer"
    },
    married:false,
    manager:null,
    joiningDate:undefined,
    location:"Hydrabad"

}

console.log(employee);
console.log(employee.name);
console.log(employee.salary);
console.log(employee.skills);
console.log(employee.experience.company);
console.log(employee.experience.address.branch);



//Order details

let order={
    orderId:"ORDD123",
    customerId:"Kiran",
    amount:2599,
    paymentSuccesful:true,
    products:[
        "T-shirts",
        "Jeans",
        "shoes"
    ],
    deliveryAddress:{
        houseNo:"12-45",
        street:"Main Road",
        city:"Vijayawada",
        pincode:65479

    },
    couponApplied:false,
    discountAmount:200,
    deliveryCharge:50,
    "tracking-Id":null,
    expectedDelivery:undefined,
    "payment-Method":"UPI"
};



console.log(order["payment_Method"]);
console.log(order);
console.log(order.orderId);
console.log(order.amount);
console.log(order.products);
console.log(order.deliveryAddress.city);



let mahaguruVictim={
    victim:"Rose",
    vId:101
}
console.log("Details Of victim",mahaguruVictim);
console.log(mahaguruVictim.vId);
console.log(mahaguruVictim["vId"]);

// mahaguruVictim.college="Mahaguru";  //Adding property
// console.log(mahaguruVictim);

// mahaguruVictim.vId=301;  //Updating Property
// console.log(mahaguruVictim);

// delete mahaguruVictim.college;
// console.log(mahaguruVictim); //deleting Property

// delete mahaguruVictim;
// console.log(mahaguruVictim);

// mahaguruVictim=null;
// console.log(mahaguruVictim);



let product={
    item:"Mobile",
    price:75000
}
console.log("Before Seal",product);

Object.seal(product)
product.brand="Samsung Galaxy";  //Adding Not possible
console.log(product);


product.price=55000;//Update Possible
console.log(product);

delete product.price;
console.log(product);//We cannot delete
















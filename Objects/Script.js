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



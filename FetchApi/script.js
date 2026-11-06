// let promise1=fetch("https://fakestoreapi.com/users")
// // console.log(promise1); //promise object
// promise1.then((response)=>{
//     console.log(response); //response object
//     let promise2= response.json()
//     // console.log(promise2); //again promise object
//     promise2.then((value)=>{
//         console.log(value[1]); //giving 2 element{}
//         console.log(value[1].username);
//         console.log(value[1].email);
//         console.log(value[1].name);
//         console.log(value[1].name.firstname);
//     })
    
// })
// .catch((reason)=>{
//     console.log(reason);
    
// })





// let promise1=fetch("https://fakestoreapi.com/products")
// promise1.then((response)=>{
//     let promise2= response.json()
//     promise2.then((value)=>{
//         // console.log(value);
//         value.forEach((ele)=>{
//             // console.log(ele); //Giving 20 objects
//             console.log("Product id:",ele.id);
//             console.log("Category:",ele.category);
//             console.log("Price",ele.price);
//             // console.log(ele.rating); //rating object
            
//             console.log("Rating:",ele.rating.rate);
            
            
            
            
            
//         })
        
//     })
// })



// let promise1 = fetch("https://fakestoreapi.com/carts");
// promise1.then((response) => {
//     let promise2 = response.json();
//     promise2.then((value) => {
//         value.forEach((ele) => {
//             console.log(ele);
//             console.log("User id:", ele.userId);
//             ele.products.forEach((product) => {
//                 console.log("Product ID:", product.productId);
//                 console.log("Quantity:", product.quantity);
//             });
//         });
//     }).catch((reason) => {
//         console.log(reason);
//     });
// }).catch((reason) => {
//     console.log(reason);
// });





///


//how to send data to the server
//Sending new data

// let promise1=fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         name:"arjun",
//         course:"React"
//     })

// })
// promise1.then((response)=>{
//     let promise2=response.json()
//     promise2.then((value)=>{
//         console.log(value);
        
//     })
// })
// .catch((error)=>{
//     console.log(error);
    
// })





//Updating the existing data

// let promise1=fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"PUT",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         title:"Kochi Students",
//         body:"Javascript is going to end"
//     })
// })
// promise1.then((response)=>{
//     let promise2=response.json()
//     promise2.then((value)=>{

//     })
// })



///Deleting existing data
// let promise1=fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"Delete",
// })
// promise1.then((response)=>{
//     let promise2=response.json()
//     promise2.then((value)=>{
//         console.log(value);
        
//     })
// })
// .catch((error)=>{
//     console.log(error);
    
// })



//

let promise1 = fetch("https://api.tvmaze.com/singlesearch/shows?q=girls");

promise1.then((response) => {
    let promise2 = response.json();
    promise2.then((value) => {

        console.log(value);

        console.log("Show Name:", value.type);
        console.log("time:", value.schedule.time);
        console.log("Status:", value.status);
        console.log("days:", value.schedule.days);

    });

})
.catch((reason) => {
    console.log(reason);
});
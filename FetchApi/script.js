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





let promise1=fetch("https://fakestoreapi.com/products")
promise1.then((response)=>{
    let promise2= response.json()
    promise2.then((value)=>{
        // console.log(value);
        value.forEach((ele)=>{
            // console.log(ele); //Giving 20 objects
            console.log("Product id:",ele.id);
            console.log("Category:",ele.category);
            console.log("Price",ele.price);
            // console.log(ele.rating); //rating object
            
            console.log("Rating:",ele.rating.rate);
            
            
            
            
            
        })
        
    })
})
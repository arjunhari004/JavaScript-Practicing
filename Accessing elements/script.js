//accessing elements


// let h1=document.getElementById("company")
// console.log(h1);

// let p=document.getElementsByClassName("x")
// console.log(p);
// console.log(p[0]);
// console.log(p[1]);
// console.log(p[2]);
// console.log(p.length);


// let btn=document.getElementsByTagName("Button")
// console.log(btn); //[b,b,b]
// let div=document.getElementsByTagName("Div")
// console.log(div); //[div,div]



// let h2=document.querySelector("h2") //tagname
// let h2=document.querySelector(".a") //class
// let h2=document.querySelector("#head") //id
// console.log(h2);


let h2=document.querySelectorAll("h2")
console.log(h2);
console.log(h2[2]);
console.log(h2[1]);
h2.forEach((ele,ind)=> {
    console.log(ind);
    console.log(ele);
    
    
});












// //innerhtml-it is used to get or change the html content
// //inside and element,including html tags

// // let h1=document.getElementById("heading")
// // console.log(h1);
// // console.dir(h1); //it gives object
// // console.log(h1.innerHTML); //getting the data
// // h1.innerHTML="Hero Unni"; //Adding new content(onlytext)
// // console.log(h1.innerHTML);
// // //adding new content(text and tag)

// // h1.innerHTML="welcome to qspiders kochi <span> Hero Unnii</span>"
// // console.log(h1);



// // let h1=document.getElementById("heading")
// // console.log(h1.innerHTML); //returns content + html tag
// // console.log(h1.innerHTML); //returns content only


// // //changing content using innerHtml
// // h1.innerHTML="Thottappally <i>Main rocket</i>"
// // console.log(h1.innerHTML);


// // //changing content using innerText
// // h1.innerText="Thottappally <i>Main rocket Abhinand</i>"  //Here we cannot add italic tags lie <i> </i>
// // console.log(h1.innerText);


// let div=document.getElementById("box")
// console.log(div.innerText);  //It returns only visible content


// //getting the content using textcontent

// console.log(div.textContent);

// //changing content using textcontent

// div.textContent="Bye Bye qspiders"

// //it returns all the contents including the hiding content



// // innerHtml -> it is used to get or change the Html content inside sn element,  including Html tags

// // let h1=document.getElementById("heading")
// // console.log(h1);
// // console.dir(h1); // it gives object
// // console.log(h1.innerHTML); // getting the data
// // h1.innerHTML="hero venkit"; // adding new content (only text)
// // console.log(h1.innerHTML);
// // adding new content (text or tag)
// // h1.innerHTML="Welcome to qspider <span>Hero abu</span>"
// // console.log(h1);



// //innerHtml and innetext

// // let h1=document.getElementById("heading")
// // console.log(h1.innerHTML); // returns content + html tags
// // console.log(h1.innerText); // returns only content


// // changing the content using innerHtml
// // h1.innerHTML="alapuzha <i> don <i>"
// // console.log(h1.innerHTML);

// // changing content using innerText
// // h1.innerText="alapuzha <i> don <i>"
// // console.log(h1.innerText);


// ////////////////////////////////////////////////////////////////////////////////////////


// // let div=document.getElementById("Box")
// // // console.log(div.innerText);
// // // it returns only visible content


// // // getting the content using textContent
// // console.log(div.textContent);
// // // //changing content using textContent
// // div.textContent="miss you machuuussssssss"

// //it returns all the content including the hide content also




// //////////////////////////////////
// // chnaging or adding style using javascript

// // let h1=document.getElementById("company")
// // function victims(){
// //     h1.innerText="Testyantra...😴"
// //     h1.style.color="orange";
// //     h1.style.fontSize="30px";
// //     h1.style.fontStyle="italic";
// //     h1.style.backgroundColor="black"
// //     // alert("Hello victims how are you.....")
// // }




// //9/11/26

// // let h1=document.getElementsByTagName("h1")
// // console.log(h1[0]);
// // h1[0].classList.add("x") //adding
// // console.log(h1[0]);


// // h1[0].classList.remove("x") //removing
// // console.log(h1[0]);


// // h1[0].classList.toggle("x") //toggle
// // //(if class is present it removes,if not present it will add)
// // console.log(h1[0]);




// // function f1(){
// //     let body=document.getElementsByTagName("Body")
// //     // console.log(body[0]);   change mode
// //     body[0].classList.toggle("x")
    
// // }




// // IMP: CreateElement and remove element

// let p=document.createElement("p")
// console.log(p);
// p.innerText="Lunch Time"
// console.log(p);

// //Inserting inside the body

// document.body.append(p,"m16 batch")
// document.body.appendChild(p,"m16")



// let div=document.getElementById("container")
// let i=document.createElement("i")
// i.innerText="Mahaguru institute"

// //INSERTING INSIDE THE DIV





// //10/11/2026

// // let h1=document.getElementById("kalam")
// // console.log(h1);
// // console.log(h1.classList.contains("victims"));


// //remove element

// // let h1=document.getElementById("kalam")
// // h1.remove()


// // let img=document.getElementById("x")
// // console.log(img);
// // console.log(img.getAttribute("src"));
// // img.setAttribute("alt","actor")
// // img.removeAttribute("src")



// //Inline Event Handling

// function f1(){
//     alert("Hello Guys.....")
// }


// //using dom event properties
// let btn=document.getElementById("btn")
// btn.onclick=function(){
//     alert("qspiders Jspiders")
// }

// //addevenrlistner()

// let btn=document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     alert("Lunch Break")
// })



//Events

//Mouseevents(mouseover,mouseout)

// let div=document.getElementById("hen")
// div.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="Blue";
//     div.innerText="Arjun.."
// })
// div.addEventListener("mouseout",()=>{
//     document.body.style.backgroundColor="Yellow";
//     div.innerText="Hari.."
// })    





//user typing ui entry


// let input=document.getElementById("x")
// input.addEventListener("input",()=>{
//     console.log(input.value);
    
// })

// let input=documen.getElementById("x")
// input.addEventListener("change",()=>{
//     console.log(input.value);
    
// })

// let input=document.getElementById("x")
// input.addEventListener("input",()=>{
//     let p=document.getElementById("p")
//     p.innerText="User Typing:"+input.value;
    
// })



//form


// let input=document.getElementById("x")
// let form=document.getElementById("myform")
// form.addEventListener("submit",(event)=>{
//     //it stops browser default behaviour(page reload)
//     event.preventDefault()
//     console.log(input.value);
//     console.log("Form Submitted");
    
    
// })


// let sec = document.createElement("section");
// let para = document.createElement("p");
// let span = document.createElement("span");
// para.innerHTML = "Testyantra";
// span.innerHTML = "QSPIDERS";
// sec.append(para);
// sec.append(span);
// console.log(sec);

// document.body.append(sec);



// Inline Event Handling
// (Writing the event directly inside the html elemnent )
//NOTE: we can not use same event multiple times
// function f1(){
//     console.log("Ticket Booked Succesfully");

// }
// function f2(){
//     console.log("Payment Succesful");
    
// }



// Using dom event properties

//NOTE: we can not use same event multiple times
//If u try to use,it takes only latest one

let btn=document.getElementById("btn")
btn.onclick=function(){
    console.log("Added to the cart succesfully");
    
}
btn.onclick=function(){
    console.log("Item is not available");
    
}
btn.onclick=function(){
    console.log("Using Dom event properties,it takes latest one");
    
}

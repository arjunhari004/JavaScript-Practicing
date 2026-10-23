function cart(item1,...x){
    console.log(item1);
    console.log(x);
    
    
}
cart("Laptop","Headphones","Watch")

// Note:Rest


// Spread Operator(...)
// by using this we can copy an array/object


let mahaGuru=["Arjun","Abin","Abhinand","Arunima"]
console.log("Original Array:",mahaGuru);

let copiedArray=["Bazim",...mahaGuru,"Akhu"]
console.log("Copied Array:",copiedArray);


let kochiBranch={
    areaName:"Palarivettom",
    noOfStudents:450,
    BranchHead:undefined
}
console.log("Original Object:",kochiBranch);


let copiedObject={...kochiBranch}
console.log("Copied Object:",copiedObject);





// this keyword

let student={
    user:"Liya",
    age:23,
    display:function liya(){
        console.log(this);
        console.log(this.user);
        
        
    }
}
student.display()



// Non-strict mode

function f1(){
    console.log(this); //this points to windowwindow
    
}f1()

"Use strict"
function f1(){
    console.log(this);  //this keyword value will be undefined
    
}
f1()

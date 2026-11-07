//innerhtml-it is used to get or change the html content
//inside and element,including html tags

let h1=document.getElementById("heading")
console.log(h1);
console.dir(h1); //it gives object
console.log(h1.innerHTML); //getting the data
h1.innerHTML="Hero Unni"; //Adding new content(onlytext)
console.log(h1.innerHTML);
//adding new content(text and tag)

h1.innerHTML="welcome to qspiders kochi <span> Hero Unnii</span>"
console.log(h1);



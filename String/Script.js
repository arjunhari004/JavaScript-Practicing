// //Strings-sequence of characters used to represent text data.
// //using Single Quotes

// let city='Kochi';
// console.log("Using singke quote",city);


// //Using Double Quote

// let state="Kerala";
// console.log("Using Double Quote",state);


// let message="Its Javascript class";
// console.log(message);


// let information='We have two days leave for "Navarathri"';
// console.log(information);

// //using Backtick(template literal)

// let info=`we have e days
// holiday`
// console.log(info);


//HOw to access String Characters

// let name="Arjun";
// console.log(name);
// console.log(name[0]);//accessing
// console.log(name[5]);//accessing
// console.log(name[7]);//Undefined-Output
// console.log(name[-1]);//Undefined
// name[0]="b"//Cant change using index position
// name="belbert"//re-assigning
// console.log(name);



//String-Interpolation->inserting variables or expressions inside string

// let name="Karthik";
// let age=23;
// console.log("my name is",name,"and i am ",age,"years old");
// console.log(`my name is ${name}and i am ${age}years old`);


// let a=10;
// let b=20;
// console.log(`sum of ${a} and ${b} is ${a+b}`);



// let password="Secret"; //012345
// console.log(password.length);
// if(password.length>8){
//     console.log("Valid Password");
    
// }
// else{
//     alert("Invalid Format")

// }


// let user="kalam"
// user.toUpperCase()//returning nre string but we are not storing inside a variable
// console.log(user);


// let user="kalam";
// let result=user.toUpperCase()//Storing in a variable
// console.log(user);
// console.log(result);


// let user ="kalam";
// console.log(user);
// user=user.toUpperCase()//Storing in existing variable
// console.log(user);





// //Trim(To remove the space)

// let student="   ARJUN    ";
// console.log(student.length);
// student=student.trim()
// console.log(student.length);


//Qn1

// let product ="Laptop";
// let price = 55000;
// let message = `Product: ${product},Price: ${price}`;
// console.log(message);
// //Product:Laptop,Price:55000



//23/09/2026(Strings)


// let user="Kalam"//01234

// let result=user.charAt(-4)
// console.log(user);
// console.log(result);


// let user="Kalam"//01234
// let a=user.indexOf("1")
// console.log(a);


// let user="KalamVenkat"//01234567890
// let a=user.charCodeAt(6);
// console.log(a);



//Replaceall()

// let message="I like icecream.icecream is tasty...."
// message=message.replace("icecream","chocolate");
// message=message.replaceAll("icecream","chocolate");
// console.log(message);



let company="Wipro";
let res=company.startsWith("w")
// let res=company.endsWith("O")
console.log(res);


















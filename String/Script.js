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



// let company="Wipro";
// let res=company.startsWith("w")
// // let res=company.endsWith("O")
// console.log(res);


// let contact="9879";
// let notification=contact.padStart(10,"X")
// console.log("OTP sent to your mobile number ends with:",notification);



// let contact="9879";
// let notification=contact.padEnd(10,"X")
// console.log("OTP sent to your mobile number ends with:",notification);



// let first="Hello";
// let second="World";
// let newString=first.concat("",second)
// console.log(newString);//using concat method
// console.log(first+""+second); //using + operator
// console.log(newString);
// console.log(first);
// console.log(second);



//Length

//use find the number of characters

// function checkPassword(password){
//     if (password.length>=8){
//         return "Password is strong";
//     }else{
//         return "Password must contain at least 8 characters";
//     }
// }
// console.log(checkPassword("Java@1234"));




//CONCAT
//USE:JOIN STRINGS TOGETHER
//EXAMPLE

// function createname(firstName,lastName){
//     let fullName = firstName.concat("",lastName);
//     if (fullName.length>0){
//         return "Full name:" +fullName;
//     }else{
//         return"Name
//     }
// }


//Example 2

function createMessage(name,city){
    let message = "Hello".concat(name,",welcome to",city);
    if(message.includes("welcome")){
        return message;
    }else{
        return "Message Error";
    }
}
console.log(createMessage("Ravi","Kochi"));



//Repeat()
//use:Repeat a string a specified number of times

//Example


// function generateStars(count){
//     let stars = "+".repeat(count);
//     if(count>0){
//         return "Rating:" + stars;
//     }else{
//         return "No rating";
//     }
// }
// console.log(generateStars(5));


//example 2

function createDivider(count){
    let line = "-".repeat(count);
    if(count>=5){
        return line;
    }else{
        return "Divider too short";
    }
}
console.log(createDivider(10));



//padStart() - add characters at the begining untill a target length is reached
//example - 1
function formatOTP(otp){
  let formatted = otp.padStart(6,"0");
  if (formatted.length === 6){
    return "Your OTP is " +formatted;
  }
  else{
    return "Invalid OTP";
  }
}
console.log(formatOTP("123456"));





















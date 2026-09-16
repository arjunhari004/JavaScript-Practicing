// function outer(){
//     console.log("This is outer Function");
//     function inner(){
//         console.log("This is inner Function");
        
//     }
//     inner()
// }
// outer()



// function outer(){
//     let branch="Kochi"
//     function inner(){
//         console.log(branch);

        
//     }inner()
// }
// outer()



function f1(){
    function f2(){
        return "Hello This is kalam"
    }
    let res = f2()
        console.log(res);
        return res;

        
}let x=f1()
console.log(x);

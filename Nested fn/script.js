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



// function f1(){
//     function f2(){
//         return "Hello This is kalam"
//     }
//     let res = f2()
//         console.log(res);
//         return res;

        
// }let x=f1()
// console.log(x);





function calculateSalary(sal){
    function calculateBonus(){
        let Bonus= sal*10/100;
        // console.log(Bonus);
        return Bonus
        
    }
    let res=calculateBonus()
        // console.log(res);
        return res+sal //5000+50000=55000
        
}let totalSalary=calculateSalary(50000)
console.log(totalSalary);


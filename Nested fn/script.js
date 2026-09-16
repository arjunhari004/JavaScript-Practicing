function outer(){
    console.log("This is outer Function");
    function inner(){
        console.log("This is inner Function");
        
    }
    inner()
}
outer()



function outer(){
    let branch="Kochi"
    function inner(){
        console.log(branch);

        
    }inner()
}
outer()
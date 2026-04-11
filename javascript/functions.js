// function declaration

function f1(){ //no arg function
    console.log("Hello World!");
    
}
f1(); //function calling 

function f2(name){ // arg function+
    console.log(`my name is ${name}`);
    
}
f2("Pranith");

//function expression

let f3=function(){
    console.log("function expression");
    
}
f1();

//arrow function or shorter syntax for function
let f4=()=>{
    console.log("Arrow function");
    
}
f4();

//anonymous function
setTimeout(()=>{
    console.log("Anonymous function");
    
},5000)
// function declaration

function f1(){ //no arg function
    console.log("Hello World!");
    
}
f1(); //function calling 

function f2(name){ // arg function+
    console.log(`my name is ${name}`);
    
}
f2("Pranith");

// //function expression

let f3=function(){
    console.log("function expression");
    
}
f3();

// //arrow function or shorter syntax for function
let f4=()=>{
    console.log("Arrow function");
    
}
f4();

// //anonymous function
setTimeout(()=>{
    console.log("Anonymous function");
    
},5000)

// //call back functions
function isSuccess(){
        console.log("authentication success");
        
}

function isFailure(){
        console.log("login failure");
        
}

function isAuthenticate(username,password,success,failure){
    if(username=='user' && password=='user@123'){
        success();
    }else{
        failure()
    }
}

isAuthenticate('user','user@123',isSuccess,isFailure);

// // constructor function
function Student(name,email,phone,rollno){
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.rollno=rollno;
    

}
let s1=new Student('Pranith','mamidipranith0088@gmail.com',8309118113,36);
let s2=new Student('XYZ','xyz@gmail.com',1234567890,8);
console.log(s1);
console.log(s2);


//IIFE-Immediately invoked function expression

(
    function(){
        console.log("IIFE");
        
    }
)();

(
    function(name){
        console.log("IIfe",name);
        
    }
)('xyz');

// Generator Function
// function* generator(){
//     yield 'hello';
//     yield 'students';
//     yield 'bye';
//     yield 'bye students';
// }

// let g=generator();
// console.log(g);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// // ExcelR

// function* excelrgenenrator(){
//     let value=1;
//     while(value<=50){
//         yield `ExcelR_00${value}`;
//         value++;
//     }
// }
// let g2=excelrgenenrator();
// let num=1;
// while(num<=50){
//     console.log(g2.next().value);
//     num++;
// }

// return value
function f5(){
    console.log('hello world');
    
}
f5();

function f6(){
    return 'function return vslue'
}
let result=f6();
console.log(result);


// Higher order function

function calculator(a,b,operation){
    return operation(a,b);
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
console.log(calculator(10,20,add));
console.log(calculator(30,20,sub));


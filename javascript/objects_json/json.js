// let obj={
//     'name':'tej',
//     'email':'tej@gmail.com',
//     'phone':'987654'
// }
// let json=JSON.stringify(obj);//converts obj into json
// // console.log(obj);
// // console.log(json);

// let obj2=JSON.parse(json);//converts json to object
// console.log(json);
// console.log(obj2);

// let jsonData={
//     name:'pranith',
//     address:{
//         street:'unr street'
//     }
// }

// let arrayJsonData=[
//     {},{},{}
// ]


// async function fetchData(){
//     let res=await fetch('https://jsonplaceholder.typicode.com/users/1');
//     let user=await res.json();
//     console.log(user);
//     console.log(user.name);
//     console.log(user['username']);

//     // re-initialize
//     user.name='new Name'
//     console.log(user.name);

//     // delete
//     console.log(user.email);

    // let obj1={
    //     'FirstName':'Mamidi'
    // }
    // let obj2={
    //     'FirstName':'M',
    //     'LastName':'Pranith'
    // }
    // // let combine={...obj1,...obj2};
    // let combine=Object.assign(obj1,obj2);
    // console.log(combine);
    
    
// } fetchData();

// let obj1={
//     'name':'pranith',
//     'email':'pranith@gmail.com',
//     'phone':9876543231
// }
// console.log(obj1);
// //destructing the object
// let {name,email}=obj1;
// console.log(name);
// console.log(email);
// // destructing and renaming
// let{name:username,email:userEmail}=obj1;
// console.log(username);
// // add new values
// let{address="hyderabad"}=obj1;
// console.log(address);

// console.log(obj1);

async function fetchData(){
    let res=await fetch('https://jsonplaceholder.typicode.com/users/1');
    let user=await res.json();
    // console.log(user);
    

    // //printing only keys
    for(let key in user){
    console.log(key);
    
    }
    // printing only values
    for(const key in user){
        console.log(user[key]);
        
    }
    // printing key-value pairs
    for(const key in user){
        console.log(key,"--",user[key]);
        
    }

    // forEach function
    // iterating keys using
    Object.keys(user).forEach(
        (key)=>{
            console.log(key);
            
        }
    )

    // iterating values
    Object.values(user).forEach(
        (value)=>{
            console.log(value);
            
        }
    )
    // iterating key -value pair
    Object.entries(user).forEach(
        (pair)=>{
            console.log(pair);
            
        }
    )

}fetchData();


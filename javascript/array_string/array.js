// creation of array
// array literal
// let arr=[10,20,30];
// console.log(arr);
// console.log(arr,length);//size or length
// console.log(arr[0]);
// console.log(arr[-3]);

// let arr2=[10,"mango",true,{'name':"raj"}];
// console.log(arr2);

// // using new keyword
// let arr3=new Array(10,20,30,40);
// console.log(arr3);
// let arr4=new Array(4);//[_,_,_] empty
// console.log(arr4);

// // from function
// let value="hello world!";
// let arr5=Array.from(value);
// console.log(arr5);

// let arr6=Array.of(10,20,30,40);
// console.log(arr6);
// let arr7=Array.of(2);
// console.log(arr7            );

// let arr=[10,20,30];
// // accessing values from array
// console.log(arr[0]);//10
// console.log(arr[3]);//undefined
// console.log(arr[-1]);//undefined

// console.log(arr.at(0));//10
// console.log(arr.at(-2));//20
// console.log(arr.at(4));//undefined

// // adding values
// arr[4]='hello';
// console.log(arr); 
// // updating values   
// arr[2]='welcome';
// console.log(arr);

// console.log(arr[3]);//undefined
// console.log(arr);
// arr.push('end');//adds value at the end of an array
// console.log(arr);
// arr.unshift('start');
// console.log(arr);//adds value at the starting of an array

// // deleting values
// let first=arr.shift();
// console.log('first element :',first);
// console.log(arr);
// let last=arr.pop();
// console.log('last element :',last);
// console.log(arr);
// delete arr[1]
// console.log(arr);

// let arr=['hello','students','welcome','to','array','session'];
// console.log(arr.length);

// let index=0;
// do{
//     console.log(arr[index]);
//     index++;
    
// }while(index<arr.length)

// for(index;index<arr.length;index++){
//     console.log(arr[index]);
    
// }    
// no need for index position , it directly deals with array values
// arr.forEach((value)=>{
//         console.log(value);    
//     }
// )

// for (const index in arr) {
//     console.log(arr[index]);
       
// }

// for (const value of arr) {
//     console.log(value);
    
// }

// let arr=[2,4,6,9,10];
// arr.forEach((value)=> {
//     console.log(value*value); 
// });

// let squareArr=arr.map((value)=>value*value);
// console.log(squareArr);

// arr.forEach((value)=>{
//     if(value%2==0){
//         console.log(value);    
//     }
// })
// let evenArr=arr.filter(
//    (value)=>{
//     return value%2==0;
//    }
// )
// console.log(evenArr);

// // filter and returns first result
// let find=arr.find((value)=> value%2==0)
// console.log(find);
// // filter and returns last result
// let findlast=arr.findLast((value)=> value%2==0)
// console.log(findlast);

// // filter and returns true if it is matching with all values or else return false
// let every=arr.every((value)=> value%2==0)
// console.log(every);
// // filter and returns true if it is matching with some of the    values or else return false
// let some=arr.some((value)=> value%2==0)
// console.log(some);

// sum
// let arr=[1,2,3,4,5];
// let sum=arr.reduce((sum,value)=>{
//     return sum+value;
// },0);
// console.log(sum);

// // product
// let arr1=[1,2,3,4,5];
// let product=arr.reduce((product,value)=>{
//     return product*value;
// },1);
// console.log(product);

// // even and sum

// let res=arr.filter((value)=>{
//     return value%2==0;
// }).reduce((sum,value)=>{
//     return sum+value;
// },0);
// console.log(res);

// let sum1=0;
// for(let index=0;index<arr.length;index++){
//     const element=arr[index];
//     if(element%2==0){
//         sum1+=element;
//     }
// }
// console.log(sum1);
// console.log(arr);
// console.log(arr.reverse());

// let findlast=arr.findIndex((value)=> value%2==0)
// console.log(findlast);

// let arr=['hello','students','nice','to','meet','you'];
// console.log(arr.indexOf('hello'));//0
// console.log(arr.lastIndexOf('helloo'));//-1
// console.log(arr);//['hello', 'students', 'nice', 'to', 'meet', 'you']
// arr.splice(1,3);//from that index position it will delete all the elements till the end
// arr.splice(1,1,'dear');
// console.log(arr);

// let output=arr.slice(1,4)//['students', 'nice', 'to']
// let output=arr.slice(2);//['nice', 'to', 'meet', 'you']
// console.log(output);

// console.log(arr.toString());//hello,students,nice,to,meet,you
// console.log(arr.join(':'));//hello:students:nice:to:meet:you

// let arr=[10,20,30,20,30];
// console.log(arr.indexOf(20));//1
// console.log(arr.lastIndexOf(20));//3
// console.log(arr.fill(100));//[100, 100, 100, 100, 100]
// console.log(arr.fill(100,4));//[10,20,30,20,100]
// console.log(arr.fill(100,2,4));//[10,20,100,100,30]


// let str="    hello    ";
// console.log(str);
// console.log(str.padEnd(10,'*'));
// console.log(str.padStart(20,'*'));
// console.log(str.length);//13
// let str2=str.trimEnd();
// console.log(str2.length);//5
// console.log(str.trimStart().length);//9
// console.log(str.trim().length);//5

// let str="hi";
// console.log(str.repeat(3));//hihihi
// console.log(str.replace('i','ello'));//hello

// let str="hello,students,nice,to,meet,you";
// console.log(str);//hello,students,nice,to,meet,you
// console.log(str.split(','));//['hello', 'students', 'nice', 'to', 'meet', 'you']
// console.log(str.substring(0,5));//hello












let arr=[107,3,432,23,44];

// ======================Find Sum of array elements========================
   //1.Iterating a loop
   //2.Reduce function 

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum); 


let  sum=arr.reduce(
    (sum,value)=>{
        return sum+value;
    },0
);
console.log(sum);

// =============find Maximum number=====================
        //    1.Sorted

        let sorted=arr.sort((a,b)=>a-b); // default ascending order
        console.log(sorted);
        
        console.log('maixmum ',sorted[arr.length-1]);
        console.log('minimum ',sorted[0]);

        // or Math functions

        let max=Math.max(...arr);
        console.log('maximum',max);
        let min=Math.min(...arr);
        console.log('minimum',min);
        
        
// =================sort users based on marks=================
   let users=[
    {"name":"studentA", marks:78},
    {"name":"studentB", marks:88},
    {"name":"studentC", marks:98},
    {"name":"studentD", marks:92},  
   ]
  
//    higher to lower marks
    let sortedUsers= users.sort((a,b)=>b.marks-a.marks);
     console.log(sortedUsers);

     sortedUsers.reverse();

// =================Remove duplicates in an array==========
let arr2=["apple",'ball','apple','carrot','dog','dog']
    let unique= new Set(arr2);
    console.log(arr2);
    console.log(unique);

// ===============Find second largest number in an array==============
    let arr3=[10,34,12,34,44,44];
    let uniqureArray=[...new Set(arr3)]; // converting array into set and storing set in array format
    uniqureArray.sort((a,b)=>b-a); // sorted in descending order    
    console.log('second maximum',uniqureArray[1]);  //printing secong largest number based on index
    console.log('second minimum',uniqureArray[uniqureArray.length-2]);  //printing secong smallest number based on index
    

    // or

    let flargest=-Infinity;
    let slargest=-Infinity;
    for (let index = 0; index < arr3.length; index++) {
        const element = arr3[index];
        if(element>flargest){
            slargest=flargest;
            flargest=element;
        }
        else if(element>slargest&&element!==flargest){    //10 7 8 9
             slargest= element;
        }
        
    }
    console.log(flargest);
    console.log(slargest);
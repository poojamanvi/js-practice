// Normal function

//  function getSumOfEvenNumbers(){
//   let sum=0   
//     for(let i=a;i<=b;i++){
//         if(i%2==0)
//         sum+=i
        
//     }
//     return(sum)
//     console.log(ans)

// }
//     let ans = getSumOfEvenNumbers(10,20)
    

// //Arrow function

// let sumofeven=(a,b)=>{
//     let sum=0 
    
//       for(let i=a;i<=b;i++){
//           if(i%2==0)
//           sum+=i
          
//       }
//       return(sum)
  
//   }
//       console.log(sumofeven(10,20))
  
  
 //  IIFE FUNCTION 


//  let ans=(function sumofeven(a,b){
//       let sum=0   
//         for(let i=a;i<=b;i++){
//             if(i%2==0)
//             sum+=i
            
//         }
//         return(sum)
    
//     })(10,20);
//         console.log(ans)



//  // Annoymous arrow function

//  ((a,b)=>{
//      return a+b
//  })(5,7);
    

// Function is a first class citizen

// 
// function a(x,y){
//     return x+y;

// }
// let a=b
// console.log(b(6,7))

// HIGHER ORDER FUNCTION

function b(x,y){
    return x+y

}
function a(b){
    return b(6,7)
}
console.log(a(b));




// function a(){
//     console.log("hello, world")
// }
// setTimeout(a,2000)


// console.log("pooja")
// setTimeout(()=>{
//     console.log("inside");
// },0)
// console.log("vasant");
// function  getFactorial(num) {
//     if(num==1){
//         return 1;
//  } if(num<0){
//      return -1
//  }
//     return num*getFactorial(num-1);
// }
// console.log(getFactorial(-1));

// find sum of the range 5-10

function getSumOfRange(first,last) {
    if(first === last){
     return 0;
    }

    return first + getSumOfRange(first+1,last)
}
console.log(getSumOfRange(5,10))
 

// power of number

function getPower(num,exponential) {
    if(num===0){
        return 1
    }

    return num*getPower(num,exponential-1)
    
}
console.log(getPower(2,4))

// flatten array
let flattenedArray = []

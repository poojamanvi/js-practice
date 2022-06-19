// assignment question
// Question no - 1

// Using a loop print all odd numbers up to and including n. Don’t include 0.


for(let i=1;i<=25;i++){
    if(i%2!=0){
    console.log(i)
}

}
// Question no. 2
// Print the sum of all even numbers in a range from a to b. (Including a,b)
let sum = 0;
for( let i=1; i<=30; i++){
    if(i%2==0){
         sum+=i
    }
   
}
 console.log(sum);


// Question No. 3
// Write a program to read the first and last digit of a number

let n,firstDigit,lastDigit;
n = 12345789410
lastDigit = (n%10)

console.log("last Digit",
    lastDigit
)


while(n>=10){
    firstDigit=Math.floor(n/10)
    n/=10;
    
}
console.log("first digit",firstDigit)


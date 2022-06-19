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
var sum = 0;
for( let i=1; i<=30; i++){
    if(i%2==0){
         sum+=i
    }
   
}
 console.log(sum);


// // Question No. 3
// // Write a program to read the first and last digit of a number

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

// Question-4
// Check whether the given number is an armstrong number or not. 

var number,numberOfDigit, sum;
number=153;
numberOfDigit = Number.length
sum=0
while(number>0){
    var reminder = number%10
    sum+=reminder**numberOfDigit


}
if(sum==number){

    console.log("Number is a armstrong number:",number)
} else{
    console.log("Number is not a armstrong number:",number)
}



// Question-5
// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range): 
// Condition 1 - Second last digit of number is 4
// Condition 2 - Numbers should be even 
var sum =0
var num1=40
var num2=50

for(i=num1; i<=num2; i++){
        number=Math.floor(i/10)
        lastSecond=number%10
        if(lastSecond==4){
           if(i%2==0)
            sum+=i
       

    }  
}
console.log(i)


//Question no-6
// take a number and return all the even digits of the number
var number = 144
let x = Math.floor(number/10)
firstDigit=Math.floor(x/10)
let secondDigit = x%10
lastDigit = number%10

for( i=firstDigit; i<=lastDigit;){
    if(i%2==0){
        console.log(i);
    }else{
        console.log("odd")
    }
}

//Question no-7
//check wheater the given number is equal to is reverse number are not
num=101
x=Math.floor(num/10)
firstDigit=Math.floor(x/10)
secondDigit=x%10
lastDigit=num%10

let reverseNO=firstDigit*100+secondDigit*10+lastDigit

if(num==reverseNO){
    console.log("Given number is equal to  reverse number")
}else{
    console.log("Given number is not equal to  reverse number") 
}
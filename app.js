// Practice problems
// 1. Write a  program to accept two integers and check whether they are equal or not.
// Test Data : 15 15
// Expected Output :
// Number1 and Number2 are equal
/* Your answer here*/
let a,b,c
 a = 15;
 b = 15;
if( a==b){
    console.log("Number1 and Numbar2 are equal ")
}
else{
    console.log("Number1 and Numbar2 are not equal") 
}
// 2. Write a  program to check whether a given number is even or odd.
// Test Data : 15
// Expected Output :
// 15 is an odd integer
/* Your answer here
*/
 a = 15

 if(a % 2 == 0){
     console.log(a+" is an Even Integer ")
 }else{
     console.log(a+ " is an odd integer")
 }

 
// 3. Write a  program to check whether a given number is positive or negative.
// Test Data : 15
// Expected Output :
// 15 is a positive number
/* Your answer here
*/
a = 15

if(a>0){
    console.log(a+ " is a Positive Number")
}else{
    console.log(a+" is a Negitive Number ")
}
// 4. Write a  program to find whether a given year is a leap year or not.
// Test Data : 2016
// Expected Output :
// 2016 is a leap year.
/* Your answer here
*/
a = 2016

if(a%4==0){
    console.log(a+ " is a leap year")
}else{
    console.log( a+ " is not a leap year")
}
// 5. Write a  program to read the age of a candidate and determine whether it is eligible for casting his/her own vote.
// Test Data : 21
// Expected Output :
//  Congratulation! You are eligible for casting your vote.
/* Your answer here
*/
a = 21

if(a>18){
    console.log("Congratulation! You are eligible for casting your vote.")
}else{
    console.log("sorry, You are not eligible for casting the vote.")
}
// 6. Write a program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 0 when m is 0 and -1 when m is less than 0.
// Test Data : -5
// Expected Output :
// The value of n = -1
/* Your answer here
*/
m = -5

if(m>0){
    console.log("The value of n = 1")
}else if(m<0){
    console.log("The value of n = -1")
}else{
    console.log("The value of n = 0")
}
// 7. Write a  program to accept the height of a person in centimeter and categorize the person according to their height.
// Test Data : 135
// Expected Output :
// The person is Dwarf.
/* Your answer here
*/
a = 135

if(a<=150){
    console.log("The person is Dwarf.")
}else{
    console.log("The person is Normal.")
}

// 8. Write a program to find the largest of three numbers.
// Test Data : 12 25 52
// Expected Output :
// 1st Number = 12,        2nd Number = 25,        3rd Number = 52
// The 3rd Number is the greatest among three
/* Your answer here
*/
 a = 12
 b = 25
 c = 52

if( a>b && a>c){
     console.log(a)

}else if (b>a && b>c) {
    console.log(b)
}else{
    console.log(c)
    
}

// 9. Write a  program to accept a coordinate point in a XY coordinate system and determine in which quadrant the coordinate point lies.
// Test Data : 7 9
// Expected Output :
// The coordinate point (7,9) lies in the First quadrant.
/* Your answer here
*/
a = 7
b = 9

if(a>0 && b>0){
    console.log("The coordinate point (7,9) lies in the First quadrant.")
}else if(a<0 && b>0){
    console.log("The coordinate point (-7,9) lies in the Second quadrant.")
}else if(a<0 && b<0){
    console.log("The coordinate point (-7,-9) lies in the Third quadrant.")
}else {
    console.log("The coordinate point (7,-9) lies in the Fourth quadrant.")
}
// 10. Write a  program to find the eligibility of admission for a professional course based on the following criteria:
// Eligibility Criteria : Marks in Maths >=65 and Marks in Phy >=55 and Marks in Chem>=50 and Total in all three subject >=190 or Total in Maths and Physics >=140
// Input the marks obtained in Physics :65
// Input the marks obtained in Chemistry :51
// Input the marks obtained in Mathematics :72
// Total marks of Maths, Physics and Chemistry : 188
//  Total marks of Maths and Physics : 137
// Expected Output :
// The candidate is not eligible for admission.
/* Your answer here
*/
let Physics_Marks = 65
let Chemistry_Marks = 51
let Mathematices_Marks = 72
let Total_in_all_three_subject = 188
let Total_in_Maths_and_Physics = 137

if ((Mathematices_Marks >= 65 && Physics_Marks >= 55 && Chemistry_Marks >= 50  ) && (Total_in_all_three_subject >= 190 ||Total_in_Maths_and_Physics>=140)){
    console.log("The candidate is eligible for admission.")
}else{
    console.log("The candidate is not eligible for admission.") 
}

// 11. Write a program to calculate the root of a Quadratic Equation.
// Test Data : 1 5 7
// Expected Output :
// Root are imaginary;
// No solution.
/* Your answer here
*/
let root1, root2, Discriminant , Denominator

a = 1
b = 5
c = 7
Discriminant = Math.sqrt(b*b-4*a*c)
Denominator = 2*a
root1 = (-b + Discriminant)/ (Denominator)
root2 = (-b - Discriminant)/ (Denominator)

if(Discriminant >= 0){
      console.log(" The roots are real")
      console.log("root1")
      console.log("root2")
 }else{
    
    console.log("Roots are imaginary;")
    console.log("No solution.")
}

// 12. Write a program to read roll no, name and marks of three subjects and calculate the total, percentage and division.
// Test Data :
// Input the Roll Number of the student :784
// Input the Name of the Student :James
// Input the marks of Physics, Chemistry and Computer Application : 70 80 90
// Expected Output :
// Roll No : 784
// Name of Student : James
// Marks in Physics : 70
// Marks in Chemistry : 80
// Marks in Computer Application : 90
// Total Marks = 240
// Percentage = 80.00
// Division = First
/* Your answer here
*/
let RollNo,Name, Physics, Chemistry,Computer_Application,total_marks, Percentage,Division
RollNo = 784
Name = "James"
Physics =70
 Chemistry=80
 Computer_Application=90
 total_marks= (Physics + Chemistry + Computer_Application )
  Percentage= (total_marks*100)/300
  Division=" first"


  if(RollNo = 784){
      console.log("Roll No : 784")
      console.log("Name of Student : James")
      console.log("Marks in Physics : 70")
      console.log("Marks in Chemistry : 80")
      console.log("Marks in Computer Application : 90")
      console.log("Total Marks = ",total_marks )
      console.log("Percentage  = ", Percentage )

      if( Percentage >= 60 &&  Percentage <= 80){
          console.log("Division = First")
      }else{
        console.log("Not Defind")
      }

 }else{
     console.log("Not Defind")
 }
// 13. Write a program to read temperature in centigrade and display a suitable message according to temperature state below :
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal in Temp
// Temp 30-40 then Its Hot
// Temp >=40 then Its Very Hot
// Test Data :
// 42
// Expected Output :
// Its very hot.
/* Your answer here
*/
let temp = 42
if(temp <0){
    console.log(" Freezing weather")
} else if(temp>=0 && temp<=10){
    console.log(" Very Cold weather")
}else if(temp>10 && temp<=20){
    console.log(" Cold weather")
}else if(temp>20 && temp<=30){
    console.log("Normal in Temp")
}else if(temp>30 && temp<40){
    console.log("Its Hot")
}else if (temp >=40){
    console.log("Its Very Hot")
}else{
    console.log("Not Defind")
}


// 14. Write a program to check whether a triangle is Equilateral, Isosceles or Scalene.
// Test Data :
// 50 50 60
// Expected Output :
// This is an isosceles triangle.
/* Your answer here
*/
 a = 50
 b = 50
 c = 60

 if((a==b && b==c && c==a) && (a!=0 && b!=0 && c!=0)){
     console.log("Equilateral Triangle")
 }else if((a==b || b==c ||c==a) && (a!=0 && b!=0 && c!=0)){
    console.log("Isosceles Triangle")
}else if((a!=b || b!=c ||c!=a) && (a!=0 && b!=0 && c!=0)){
    console.log("Scalene Triangle")
}else{
    console.log("Not a Triangle") 
}



// 15. Write a program to check whether a triangle can be formed by the given value for the angles.
// Test Data :
// 40 55 65
// Expected Output :
// The triangle is not valid.
/* Your answer here

*/
 a = 40
 b = 55
 c = 65
 if(a+b+c==180){
    console.log("The triangle is valid.") 
 }else{
    console.log("The triangle is not valid.") 
 }
// 16. Write a program to check whether a character is an alphabet, digit or special character.
// Test Data :
// @
// Expected Output :
// This is a special character.
// Hint: ASCII character
/* Your answer here
*/
var character = '@'
if(character>= 0 && character<= 9){
    console.log("This is a number")
}else if(character>= a && character<=z){
    console.log("This is a alphabet")
}else{
    console.log("This is a special character")
}
    

// 17. Write a  program to check whether an alphabet is a vowel or consonant.
// Test Data :
// k
// Expected Output :
// The alphabet is a consonant.
/* Your answer here
*/
 character = "k" 

if( character == "a"|| character =="e"||character =="i"||character =="o"||character =="u"){
    console.log("The alphabet is a vowel")
}else{
    console.log("The alphabet is a consonant")
}




// 18. Write a program to calculate profit and loss on a transaction.
// Test Data :
// Input buy price: 500
// Input sell price: 700
// Expected Output :
// You can booked your profit amount : 200
/* Your answer here
*/
let buy = 500;
let sell = 700;
let profit = (sell-buy);
let loss = buy-sell;
if(sell>buy){
    console.log("Profit",profit)
}else{
    console.log("Loss",loss)
}

// 19. Write a program  to calculate and print the Electricity bill of a given customer. The customer id., name and unit consumed by the user should be taken from the keyboard and display the total amount to pay to the customer. The charge are as follow :
// Unit Charge/unit
// upto 199 @1.20
// 200 and above but less than 400  @1.50
// 400 and above but less than 600  @1.80
// 600 and above    @2.00
// If bill exceeds Rs. 400 then a surcharge of 15% will be charged and the minimum bill should be of Rs. 100/-
// Test Data :
// 1001
// James
// 800
// Expected Output :
// Customer ID-NO :1001
// Customer Name :James
// unit Consumed :800
// Amount Charges @Rs. 2.00 per unit : 1600.00
// Surchage Amount : 240.00
// Net Amount Paid By the Customer : 1840.00
/* Your answer here
*/
// let ElectricityUnit,BillAmount;
// ElectricityUnit = 800;

// if(ElectricityUnit <= 199){
//     console.log(BillAmount=ElectricityUnit*1.20)
// }else if(ElectricityUnit>=200 && ElectricityUnit<400){
//     console.log(BillAmount= 199*1.20 + (ElectricityUnit - 199)*1.50)
// }else if(ElectricityUnit>=400 && ElectricityUnit<600){
//     console.log(BillAmount= 199*1.20 + 200*1.50 + (ElectricityUnit - 399)*1.80)
// }else if(ElectricityUnit>=600 ){
//     console.log(BillAmount= 199*1.20 + 200*1.50 +200*1.80 + (ElectricityUnit - 599)*2)

//     if(BillAmount>400){
//       console.log(BillAmount = BillAmount + BillAmount*0.15)
//     }else{
//      console.log(BillAmount=BillAmount)
//     }
// }else{
//     console.log("Error")
// }


// // 20. Write a program to accept a grade and declare the equivalent description :
// // Grade    Description
// // E    Excellent
// // V    Very Good
// // G    Good
// // A    Average
// // F    Fail
// // Test Data :
// // Input the grade :A
// // Expected Output :
// // You have chosen : Average
// /* Your answer here
// */
// let grade = "A";
// switch(grade){
//     case "E":
//         console.log("You have chosen :Excellent")
//         break;
//     case "v":
//         console.log("You have chosen :Very Good")
//         break;
//     case "G":
//         console.log("You have chosen :Good")
//         break;
//     case "A":
//         console.log("You have chosen :Average")
//         break;
//     case "F":
//         console.log("You have chosen :Fail")
//         break;
//     default:
//         console.log("Invalid grade")
        



// }
// // 21. Write a program to read any day number in integer and display day name in the word.
// // Test Data :
// // 4
// // Expected Output :
// // Thursday
// /* Your answer here
// */
// let day = "4" ;
// switch(day){
//     case "0":
//         console.log("Sunday")
//         break;
//     case "1":
//         console.log("Monday")
//         break;
//     case "2":
//         console.log("Tuesday")
//         break;
//     case "3":
//         console.log("Wednesday")
//         break;
//     case "4":
//         console.log("Thursday")
//         break;
//     case "5":
//         console.log("Friday")
//         break;
//     case "6":
//         console.log("Saturday")
//         break;
//     default:
//         console.log("No Day")
// }
// // 22. Write a program to read any digit, display in the word.
// // Test Data :
// // 4
// // Expected Output :
// // Four
// /* Your answer here
// */
// let digit = 4
// switch(digit){
//     case 0:
//         console.log("Zero")
//         break;
//     case 1:
//         console.log("One")
//         break;
//     case 2:
//         console.log("Two")
//         break;
//     case 3:
//         console.log("Three")
//         break;
//      case 4:
//         console.log("Four")
//         break;
//      case 5:
//         console.log("Five")
//         break;
//     case 6:
//         console.log("Six")
//         break;
//     case 7:
//         console.log("Seven")
//         break;
//     case 8:
//         console.log("Eight")
//         break;
//     case 9:
//         console.log("Nine")
//         break;
//     default:
//         console.log("no digit")
//         break;
// }
// // 23. Write a program to read any Month Number in integer and display Month name in the word.
// // Test Data :
// // 4
// // Expected Output :
// // April
// /* Your answer here

// */
// let Month = 4
// switch(Month){
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("February")
//         break;
//     case 3:
//         console.log("March")
//         break;
//      case 4:
//         console.log("April")
//         break;
//      case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("june")
//         break;
//     case 7:
//         console.log("july")
//         break;
//     case 8:
//         console.log("August")
//         break;
//     case 9:
//         console.log("september")
//         break;
//     case 10:
//         console.log("Octber")
//             break; 
//     case 11:
//         console.log("November")
//         break; 
//     case 12:
//         console.log("December")
//         break;  
//     default:
//         console.log("no month")                                          
// }
// // 24. Write a program to read any Month Number in integer and display the number of days for this month.
// // Test Data :
// // 7
// // Expected Output :
// // Month have 31 days
//  Month = 7
// switch(Month){
//     case 1:
//         console.log(" Month have 31 days")
//         break;
//     case 2:
//         console.log(" Month have 28 days")
//         break;
//     case 3:
//         console.log(" Month have 31 days")
//         break;
//      case 4:
//         console.log(" Month have 30 days")
//         break;
//      case 5:
//         console.log(" Month have 31 days")
//         break;
//     case 6:
//         console.log(" Month have 30 days")
//         break;
//     case 7:
//         console.log(" Month have 31 days")
//         break;
//     case 8:
//         console.log(" Month have 31 days")
//         break;
//     case 9:
//         console.log(" Month have 30 days")
//         break;
//     case 10:
//         console.log(" Month have 31 days")
//             break; 
//     case 11:
//         console.log(" Month have 30 days")
//         break; 
//     case 12:
//         console.log(" Month have 31 days")
//         break;  
//     default:
//         console.log("no day")                                          
// }

function b(x,y){
    return x+y

}
function a(b){
    return b(6,7)
}
console.log(a(b));

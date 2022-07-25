// object

// let  circle = {
//     radius:1,
//     location: {
//         x:2,
//         y:2,

//     },
//     draw: function () {
//         console.log("Drawing circle")
        
//     }
// };
//     console.log(circle[radius])  //for oprater we use []
//     // console.log(circle.draw())  //for function we use dot operater


//     let  circle2 = {
//         radius1:4,
//         location: {
//             x:5,
//             y:6,
    
//         },
//         draw: function () {
//             console.log("Drawing circle")
            
//         }
//     };
//         console.log(circle2[radius1])  //for oprater we use []
//         // console.log(circle.draw())  //for function we use dot operater
    


// ==========factory Method===============
// example first
// function createCircle(radius,location) {
//     let  circle = {
//             radius: radius, // variable is property
//             location: location,
//             // draw() {        // draw here become method
//              draw :function(){
//                 return "Drawing circle"
                
//             }
//         };
//     return circle
// }

// let circle1 = createCircle(4,{
//     x:2,
//     y:5,

// })
// let circle2 = createCircle(6,{
//     x:3,
//     y:7,

// })
// console.log(circle1)
// console.log(circle2)

// // example second

// function personDetails(name,job,location){
//     return{
//     name:name,
//     job:job,
//     location:location
// }
// }
// let person1=personDetails("pooja","hr","delhi")
// let person2=personDetails('dev','selfowned','delhi')

// console.log(person1)
// console.log(person2)


// // variable persent inside the object call property
// // function inside the object call method

//================= constructor method==================================

// function CircleCreate(radius){                 ////for class we use pascal case
  
//       this.radius=radius
//       this.draw=function(){
//           return  "draw circle";
//       }
//       return this;
//   } 
  
//   let circle1 = new CircleCreate(10);
//   console.log(circle1,circle1.draw())



let car = {
    company: "BMW" ,
    modle: "Q3",
    year: 2022 ,
    type: "SUV"
}

 for(Let key in car){
    console.log(key);
}
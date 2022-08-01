// alert("hi");
//         document.getElementsByTagName('li')[0].innerText=10;
//         document.getElementsByTagName('li')[3].innerText=100;
//         console.log("pooja")
// console.log(document.querySelectorAll("ul li"))
// document.querySelectorAll("ul li").innerText = "good,bye . The class is over" ;

// let list = document.querySelectorAll("ul li")
// list[0].innerText="good,bye . The class is over" 
// list[3].innerText="good,bye . The class is over" 
// let list = document.querySelectorAll("ul li")
// for(let i=0;i<list.length;i++){
//     // console.log(list[i].innerText)
//     if(list[i].innerText === "7"){
//         list[i].innerText = "22" ;
//     }
// }


// console.log(document.querySelector("div.container").innerText);
// console.log(document.querySelector("div .box").innerText);


// document.querySelector("h1").style.color = 'red'
// document.querySelector("div").style.backgroundColor = 'green'
// document.querySelector("div div p").style.fontSize = '50px'

// // select anchor tag

// document.querySelector("a").style.color = 'green'
// // document.querySelector("a").setAttribute('href','https://redis.io')

// document.querySelector("a")[2].setAttribute('href','https://redis.io')

// const grandParent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child")
// const btn  = document.querySelector(".btn")

// // grandParent.addEventListener("click", (event)=>{
// //    console.log("grand parent bubbling");
   
// },
// {once: true}
// );
// parent.addEventListener("click", (event)=>{
//     // event.stopPropagation();
//     console.log("parent bubbling");65

//     // alert("parent clicked")
//  }
//  );

//  child.addEventListener("click", (event)=>{
//     console.log("child bubbling");
//     // alert("child clicked")
//  });

//  document.querySelector("body").addEventListener("click", ()=>{
//     console.log("body");
    
//  });

//  document.querySelector("html").addEventListener("click", ()=>{
//     console.log("html");
    
//  });

//  document.addEventListener("click", ()=>{
//     console.log("document");
    
//  });

// grandParent.addEventListener("click", ()=>{
//     console.log("grand parent capturing");
//     alert("grand parent clicked")
//  },
//  { capture: true}
//  );
 
//  parent.addEventListener("click", ()=>{
//      console.log("parent capturing");
//      alert("parent clicked")
//   },
//   {capture: true}
//   );
 
//   child.addEventListener("click", ()=>{
//      console.log("child capturing");
//      alert("child clicked")
//   },
//   {capture: true}
//   );

// function printGrandParent() {
//    console.log("grant parent bubbling");
// }
// function printOnHover() {
//     console.log("hovering");
// }

// grandParent.addEventListener("click",printGrandParent);
// grandParent.addEventListener("mouseover",printOnHover);

// function removeGrandParent() {
//   setTimeout(() => {
//       console.log("removing grandparent");
//       grandParent.removeEventListener("click",printGrandParent);
//   }, 2000);
// }

// btn.addEventListener("click",removeGrandParent)


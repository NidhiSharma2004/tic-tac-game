var container = document.querySelector(".container");
var items = document.querySelectorAll(".item")
console.log(items);
// items.forEach(function(item){
//   if(item){
//     item.addEventListener("click",(e)=>{
//         console.log(e.target)
//        var zeroicn = e.target.children[0]
//        zeroicn.classList.add("show")
//     })
    
//   }
// });
items.forEach(function(item){
    if(item){
      item.addEventListener("click",()=>{
        var zeroicn=item.childNodes[1];
        zeroicn.classList.add("show")
      })
      
    }
  });
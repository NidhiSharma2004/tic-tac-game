var container = document.querySelector(".container");
// var zeroIcn = document
// console.log()
var items = document.querySelectorAll(".item")
console.log(items);
items.forEach(function(item){
  if(item){
    item.addEventListener("click",(e)=>{
       var zeroicn = e.target.children[0]
       zeroicn.classList.add("show")
    })
  }
  
  
});

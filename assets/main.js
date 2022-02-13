var container = document.querySelector(".container");
var items = document.querySelectorAll(".item");
items.forEach(function (item) {
  if (item) {
    item.addEventListener("click", function () {
      var zeroicn = item.childNodes[1];
      zeroicn.classList.add("show");
    var randomId = Math.floor((Math.random()) * 10);
    var closeIcn = container.children[randomId].lastElementChild;
    var firstChild = container.children[randomId].firstElementChild;

    console.log(closeIcn.classList);
    console.log(firstChild.classList);
    // closeIcn.classList.add("show");
    if(firstChild.classList.contains("show")){
        // closeIcn.classList.add("show");
    }else{
        closeIcn.classList.add("show");
    }
    // console.log(randomId)
    });
  }
});


// function randomNumber() {
//   var randomId = Math.floor((Math.random()) * 10);
// //   console.log(container.children[1]);
// console.log(randomId)
// }

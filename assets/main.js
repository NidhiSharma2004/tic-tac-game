var container = document.querySelector(".container");
var items = document.querySelectorAll(".item");
items.forEach(function (item) {
  if (item) {
    item.addEventListener("click", function () {
      var firstChildNode = item.childNodes[1];
      var secondChildNode = item.childNodes[3];
      if(!secondChildNode.classList.contains("show")){
        firstChildNode.classList.add("show")
      }else{

      }
    var randomId = Math.floor((Math.random()) * 10);
    var closeIcn = container.children[randomId].lastElementChild;
    var firstChild = container.children[randomId].firstElementChild;
    if(firstChild.classList.contains("show")){
    }else{
        closeIcn.classList.add("show");
    }
    });
  }
});
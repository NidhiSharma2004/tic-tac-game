var container = document.querySelector(".container");
var items = document.querySelectorAll(".item");
items.forEach(function (item) {
  if (item) {
    item.addEventListener("click", function () {
      var firstChildNode = item.childNodes[1];
      var secondChildNode = item.childNodes[3];
      if (!secondChildNode.classList.contains("show")) {
        firstChildNode.classList.add("show");
      } else {
      }
      items.forEach(function (lastItem) {
        if (lastItem == item) {
        }
      });
      var randomId = Math.floor(Math.random() * 10);
      console.log(randomId)
      var lastChild = container.children[randomId].lastElementChild;
      var firstChild = container.children[randomId].firstElementChild;
      setTimeout(() => {
        if (
          firstChild.classList.contains("show") ||
          lastChild.classList.contains("show")
        ) {
        } else {
          lastChild.classList.add("show");
        }
      }, 200);
    });
  }
});

function winnner() {}

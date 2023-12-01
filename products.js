// Selecting menu icon and close nav

var menuicon = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})
var closenav = document.getElementById("closenav")
closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {

    var enteredValue = event.target.value.toUpperCase()
    for (count = 0; count < productList.length; count = count + 1) {
        var productName = productList[count].querySelector("h1").textContent
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none"
        }
        else {
            productList[count].style.display = "block"
        }
    }
})
// Selecting menu icon and close nav

var menuicon = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})
var closenav = document.getElementById("closenav")
closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})
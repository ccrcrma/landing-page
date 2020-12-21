
var navbar = document.getElementById("navbar")
window.addEventListener("load", function(event){
    document.onscroll = function(event){
        console.log("scrolled");
        console.log(document.body.scrollTop);
        if(document.body.scrollTop >=50  || document.documentElement.scrollTop >=50){
            navbar.classList.add("colored-navbar");
        }else {
            navbar.classList.remove("colored-navbar");
        }
    }
});
    
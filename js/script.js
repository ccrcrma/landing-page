
var navbar = document.getElementById("navbar")
window.addEventListener("load", function(event){
    document.onscroll = function(event){
        if(document.body.scrollTop >=50  || document.documentElement.scrollTop >=50)
        {
            navbar.classList.add("colored-navbar");
        }
        else 
        {
            navbar.classList.remove("colored-navbar");
        }
    }

    Object.values(document.querySelectorAll(".form-control")).forEach(function(elem){
        elem.onfocus = function(){
            console.log(elem.previousElementSibling.firstChild)
            elem.previousElementSibling.firstChild.classList.add("blue-icon");
        }
    });

});
  
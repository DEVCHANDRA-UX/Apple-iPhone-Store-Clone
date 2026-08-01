window.addEventListener("load", function(){

    document.querySelector(".loader").classList.add("hide");

});

const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.1)";

    }

    else{

        header.style.boxShadow = "none";

    }

});
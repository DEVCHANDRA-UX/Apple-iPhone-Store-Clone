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

const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll", function(){

    let height = document.documentElement.scrollHeight - window.innerHeight;

    let percent = (window.scrollY / height) * 100;

    progress.style.width = percent + "%";

});

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


const links = document.querySelectorAll("nav a");

links.forEach(function(link){

    link.addEventListener("click", function(e){

        e.preventDefault();

        let id = this.getAttribute("href");

        document.querySelector(id).scrollIntoView({

            behavior:"smooth"

        });

    });

});
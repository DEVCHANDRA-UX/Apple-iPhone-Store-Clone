const products = [

{
    id:1,
    name:"iPhone 17",
    price:799,
    image:"images/iphone1.png",
    rating:4.8,
    badge:"New"
},

{
    id:2,
    name:"iPhone 17 Pro",
    price:999,
    image:"images/iphone2.png",
    rating:5,
    badge:"Best Seller"
},

{
    id:3,
    name:"Apple Watch",
    price:399,
    image:"images/watch.png",
    rating:4.7,
    badge:"Popular"
},

{
    id:4,
    name:"AirPods Pro",
    price:249,
    image:"images/airpods.png",
    rating:4.9,
    badge:"Top Rated"
}

];

const container=document.querySelector(".product-container");

function displayProducts(){

container.innerHTML="";

products.forEach(function(product){

container.innerHTML+=`

<div class="card">

<span class="badge">${product.badge}</span>

<img src="${product.image}">

<h3>${product.name}</h3>

<p>$${product.price}</p>

<p>⭐ ${product.rating}</p>

<div class="buttons">

<button class="cart-btn"
onclick="addCart(${product.id})">

Add To Cart

</button>

<button class="wish-btn"
onclick="addWishlist(${product.id})">

❤️

</button>

</div>

</div>

`;

});

}

displayProducts();

let cart=[];

function addCart(id){

const product=products.find(function(item){

return item.id===id;

});

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

toast(product.name+" added to cart");

}

let wishlist=[];

function addWishlist(id){

const product=products.find(function(item){

return item.id===id;

});

wishlist.push(product);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

toast(product.name+" added to wishlist");

}

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

const sections = document.querySelectorAll(".fade-up");

function reveal(){

    sections.forEach(function(section){

        let top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

const menu = document.querySelector(".menu");

menu.addEventListener("click", function(){

    document.querySelector("nav ul").classList.toggle("active");

});

const toastBox=document.querySelector(".toast");

function toast(message){

toastBox.innerHTML=message;

toastBox.classList.add("show");

setTimeout(function(){

toastBox.classList.remove("show");

},2000);

}

const savedCart=localStorage.getItem("cart");

if(savedCart){

cart=JSON.parse(savedCart);

}

const savedWish=localStorage.getItem("wishlist");

if(savedWish){

wishlist=JSON.parse(savedWish);

}
//array
const food = [
    {
        id:1,
        name:"burger",
        category:"snacks",
        price: 20.9,
        img:"../image/burger.png",
    },
    {
        id:2,
        name:"fried chicken",
        category:"chicken",
        price:30.9,
        img:"./image/5.jpeg",
    },
    {
        id:3,
        name:"southern fried egg",
        category:"eggs",
        price:6.99,
        img:"./image/9.jpeg",
    },
    {
        id:4,
        name:"Fufu",
        category:"swallow",
        price:28.9,
        img:"./image/19.png",
    },
    
    {
        id:1,
        name:"shawarma",
        category:"snacks",
        price:30.9,
        img:"./image/2.jpeg",
    },
    {
        id:2,
        name:"cripsy chicken",
        category:"chicken",
        price:55.9,
        img:"./image/6.jpeg",
    },
    {
        id:3,
        name:"americo fried egg",
        category:"eggs",
        price:8.99,
        img:"./image/10.jpeg",
    },
    {
        id:4,
        name:"pounded yam",
        category:"swallow",
        price:28.9,
        img:"./image/17.jpeg",
    },
    {
        id:1,
        name:"meat pie",
        category:"snacks",
        price:15.9,
        img:"./image/3.jpeg",
    },
    {
        id:2,
        name:"chinese fried chicken",
        category:"chicken",
        price:55.9,
        img:"./image/7.jpeg",
    },
    {
        id:3,
        name:"bread & egg",
        category:"eggs",
        price:9.99,
        img:"./image/11.jpeg",
    },
    {
        id:4,
        name:"amala",
        category:"swallow",
        price:29.9,
        img:"./image/18.jpeg",
    },
    {
        id:3,
        name:"albanio egg",
        category:"eggs",
        price:15.99,
        img:"./image/15.jpeg",
    },
    {
        id:3,
        name:"crumbles egg",
        category:"eggs",
        price:13.99,
        img:"./image/14.jpeg",
    },
    {
        id:1,
        name:"Spring roll",
        category:"snacks",
        price:25.9,
        img:"./image/4.jpeg",
    },
    {
        id:2,
        name:"americo fried chicken",
        category:"chicken",
        price:57.9,
        img:"./image/8.jpeg",
    },
    {
        id:3,
        name:"chinese fried egg",
        category:"eggs",
        price:19.99,
        img:"./image/12.jpeg",
    },
    {
        id:3,
        name:"egg sourcage",
        category:"eggs",
        price:12.99,
        img:"./image/13.jpeg",
    },
]



//selectors
const sectionCenter = document.querySelector(".section-center");
const filterBtn = document.querySelector(".filter-btn")
const date = document.querySelector("#date")
const toggleBtn = document.querySelector(".toggle")
const linksContainer = document.querySelector(".nav-container")
const links = document.querySelector(".nav-links")



//Eventlistener
date.innerHTML = new Date().getFullYear()

window.addEventListener("DOMContentLoaded",  function(){
    displayMenuItems(food);
    displayButton(food);
    
})
toggleBtn.addEventListener("click", function(){
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if(containerHeight===0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height = 0
    }
})
const backToTop = document.querySelector(".back-to-top")
window.addEventListener("scroll",function(){
const scrollHeight = window.pageYOffset
console.log(backToTop);
console.log(scrollHeight);
if(scrollHeight > 600){
    backToTop.classList.add("show-arrow-up")
    
}else{
    backToTop.classList.remove("show-arrow-up")
}
})
const navbar = document.querySelector(".nav-bar-nav")
const scrollLinks = document.querySelectorAll(".scroll")
scrollLinks.forEach(function (link){
    link.addEventListener("click", function(e){
        e.preventDefault()
        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        //calculate height
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        
        let position = element.offsetTop-navHeight;
        if(navHeight > 66){
            position = position + containerHeight
        }
        window.scrollTo({
            left:0,
            top:position,
        })
        linksContainer.style.height =0;
    })
})

//function

function displayMenuItems(menuItem){
    const displayMenu = menuItem.map(function(item){
        return `<div class="card">
                    <img src=${item.img} alt=${item.name}>
                    <div class="content">
                        <div class="food">
                          ${item.name}
                         </div>
                        <div class="rate">
                          $${item.price}
                        </div>
                        <div class="order">ORDER<i class="fas fa-shipping-fast"></i></div>
                    </div>
                </div>`
    }).join("")
    sectionCenter.innerHTML = displayMenu
}

function displayButton(menuItem){
    const categories = ["all", ...new Set(menuItem.map((item)=> item.category))]

    const filter = categories.map((category)=>{
        return`<button data-id=${category}>${category}</button>`
    }).join("")
    filterBtn.innerHTML = filter
     
    const filterButtons = filterBtn.querySelectorAll("button")
    filterButtons.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            const active =e.currentTarget.classList
            const category = e.currentTarget.dataset.id
            const filterMenu = food.filter((menu)=>{
                if(menu.category === category){
                    
                   return menu;
                }

            })
            
            if(category === "all"){
                displayMenuItems(food)
            }else{
                displayMenuItems(filterMenu)
            }
        })
    })
}


new Swiper("#slider",{
    slidesPerView:1.5,
    spaceBetween:24,
    loop:true,
    autoplay:true,
    lazyLoading:true,
    keyboard:{
        enable:true
    }
})


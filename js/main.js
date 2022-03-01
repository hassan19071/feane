var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
  wrap: false
})

// when we click to make menubar rotate;
let menuBtn = document.querySelector(".navbar .navbar-toggler");
let spanInBtn = document.querySelectorAll(".navbar .navbar-toggler span");

menuBtn.onclick = ()=>{
   
     if (menuBtn.classList.contains("rotate")){
         menuBtn.classList.remove("rotate");
         menuBtn.classList.add("xrotate");
         spanInBtn[0].classList.remove("x")
         spanInBtn[1].classList.remove("dis");
         spanInBtn[2].classList.remove("xt");
     }else{
        menuBtn.classList.add("rotate");
        menuBtn.classList.remove("xrotate");
        spanInBtn[0].classList.add("x")
        spanInBtn[1].classList.add("dis");
        spanInBtn[2].classList.add("xt");
     }
}

// to choose between meals types:
let meals = document.querySelectorAll(".menu .meal");
let mealsBtns = document.querySelectorAll(".menu .spans span");

for (let i =0 ; i < mealsBtns.length;i++){
  mealsBtns[i].addEventListener("click",function(){
    mealsBtns.forEach((el)=>{
      el.classList.remove("active");
    })
    this.classList.add("active");
    
    for (let x = 0; x < meals.length;x++){
      if (mealsBtns[i].getAttribute("data-food") == meals[x].getAttribute("data-food")){
        meals[x].classList.remove("close");
      }else{
        meals[x].classList.add("close")
      }
    }
   mealsBtns[0].onclick = ()=>{
     meals.forEach((el)=>{
       el.classList.remove("close")
     })
   }
  })
}

// for owl carousel:

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:2,
          nav:true,
          loop:true
      }
  }
})
 




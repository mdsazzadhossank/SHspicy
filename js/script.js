// menu 
let menu =document.querySelector('.main_menu');
let menuIcon= document.querySelector('#menu_open');
let menuBtn= document.querySelector('.navbar-toggler') 

menuBtn.addEventListener('click', ()=>{
    menuIcon.classList.toggle('bx-x')
})

window.addEventListener('scroll',()=>{
    let scrolling = this.scrollY
    if(scrolling > 200){
        menu.classList.add('menu_fixed')
    }
    else{
        menu.classList.remove('menu_fixed') 
    }
})


// slider

$('.slider_cards').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots:true
  });
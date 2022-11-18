const CS=document.querySelector('.header .nav-bar .nav-list .CS');
const mobile_menu=document.querySelector('.header .nav-bar .nav-list ul');
const btns = document.querySelectorAll('.nav-btn');
const slides=document.querySelectorAll('.video-slide');


CS.addEventListener('click',()=>{
    CS.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


var sliderNav=function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove('active');
    });
    slides.forEach((slide)=>{
        slide.classList.remove('active');
    });

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
};

btns.forEach((btn,i)=>{
    BroadcastChannel.addEventListener('click',()=>{
        sliderNav(i);
    });
});



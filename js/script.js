gsap.registerPlugin(ScrollTrigger);

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#blur")

// Navbar  -------------------------------------------------
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x -7+ "px";
    crsr.style.top = dets.y-7 + "px";
    blur.style.left = dets.x -150 + "px";
    blur.style.top = dets.y- 150 + "px";
})

var h4all =  document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.cursor = "pointer"
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.cursor = "defualt"
        crsr.style.border = "0px solid #A8DA22"
        crsr.style.backgroundColor = "#A8DA22"
    })
})


gsap.to("#nav",{
    backgroundColor: "#000",
    duration : 0.5,
    delay: 1,
    height: "5.5rem",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
}) 
gsap.to("#footer #f h3",{
    backgroundColor: "#000",
    duration : 0.5,
    delay: 1,
    height: "5.5rem",
    scrollTrigger:{
        trigger: "#footer",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
}) 
 gsap.to("#hero",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#hero",
        scroller: "body",
        start:"top -50%",
        end: "top -100%",
        scrub: 2
    }

})


//About us  -------------------------------------------------
gsap.from("#aboutus-in ,#page3 img",{
    y:50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#page3",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub:2
    }
} )

// items  -------------------------------------------------
gsap.from("#page4 , #page4 item",{
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger:"#page4",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub:2
    }
} )

// Quotation  -------------------------------------------------
gsap.from("#page6 #q1",{
    x:-50,
    y:-50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger: "#page6",
        scroller: "body",
        start: "top 60%",
        end:"top 70%"
    }
})

gsap.from("#page6 #q2",{
    x:50,
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger: "#page6",
        scroller: "body",
        start: "top 30%",
        end:"top 20%"
    }
})

// Quotation  -------------------------------------------------
gsap.from("#page7 .elem",{
    y:70,
    scrollTrigger:{
        trigger: "#elem",
        scroller: "body",
        start: "top 10%",
        end:"top 40%",
        scrub: 2,
    }
})

// Footer  -------------------------------------------------

var fall =  document.querySelectorAll("#footer #f h3")
fall.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.cursor = "pointer"
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.cursor = "defualt"
        crsr.style.border = "0px solid #A8DA22"
        crsr.style.backgroundColor = "#A8DA22"
    })
})


// // hamburger menu
// document.addEventListener('DOMContentLoaded', function () {
//     const hamburger = document.querySelector('.hamburger');
//     const nav = document.querySelector('#nav');

//     hamburger.addEventListener('click', () => {
//         nav.classList.toggle('active');
//     });

//     const navItems = document.querySelectorAll('#nav h4');
//     navItems.forEach((item, index) => {
//         item.style.opacity = 0;
//         gsap.from(item, {
//             opacity: 0,
//             x: -50,
//             duration: 0.8,
//             delay: 0.5 + index * 0.2,
//             ease: 'power2.out',
//         });
//     });
// });


//smooth scroling logic

// function locoscroll() {
//   gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".container"),
//     smooth: true,
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);

//   // tell ScrollTrigger to use these proxy methods for the ".container" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy(".container", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector(".container").style.transform
//       ? "transform"
//       : "fixed",
//   });

//   // --- RED PANEL ---

//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();
// }
//  locoscroll();
//curser logic
var blurcsr = document.querySelector(".curserblur");
// var curser = document.querySelector(".curser");
document.addEventListener("mousemove", function (e) {
//   curser.style.left = e.clientX - + "px";
//   curser.style.top = e.clientY + window.scrollY + "px";

  blurcsr.style.left = e.x - 150 + "px";
  blurcsr.style.top = e.y - 150  + window.scrollY  + "px";


//   gsap.to(curser,{
//     x:e.clientX,
//     y:e.clientY

// })
// gsap.to(blurcsr,{
//     x:e.clientX,
//     y:e.clientY

// })
});
//hovering effect on nav bar
let navul=document.querySelectorAll('nav li')
console.log(navul);
navul.forEach(e => {
    e.addEventListener('mouseenter',function(){
       blurcsr.style.scale=3
       blurcsr.style.border="1px solid #fff"
       blurcsr.style.backgroundColor="transparent"
    })
    e.addEventListener('mouseleave',function(){
       blurcsr.style.scale=1
       blurcsr.style.border="0px solid #fff"
       blurcsr.style.backgroundColor="#96c11eb0"
    })

});


//scrolltriger effect








//page transitiion logic
// gsap.registerPlugin(ScrollTrigger);

//nav fixed rahy ga
gsap.to("nav", {
  backgroundColor: "black",
  duration: 0.5,
  height: "120px",

  scrollTrigger: {
    trigger: "nav",
    scroller: "body",

    start: "top -6%",
    end: "top -11%",
    //scrub scrlling ky base py kar deta hy
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -35%",
    end: "top -90%",
    //scrub for smooth scrolling
    scrub: 2,
  },
});

//paragraph pertransition hy usefulhy
gsap.from(".page1-bottom img,.para",{

    y:50,
    opacity:0,
    duration:1,
    //stagger chizu ko ak ak kar ky
    stagger:0.5,
    scrollTrigger:{
        trigger:".page1-bottom",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4
    }

})
//cards per scrolltreger effect
gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    //stagger chizu ko ak ak kar ky
stagger:0.5,
    scrollTrigger:{

        trigger:".cards",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }

})
//ye code hy colons ko dur sy kareb lany ka
gsap.from("#colon1",{
    y:-80,
    x:-80,
    //stagger chizu ko ak ak kar ky

    scrollTrigger:{

        trigger:"#colon1",
        scroller:"body",
       // markers:true,
        start:"top 65%",
        end:"top 55%",
        scrub:4
    }

})
gsap.from("#colon2",{
    y:-80,
    x:-80,
    //stagger chizu ko ak ak kar ky

    scrollTrigger:{

        trigger:"#colon2",
        scroller:"body",
       // markers:true,
        start:"top 85%",
        end:"top 65%",
        scrub:4
    }

})

gsap.from("#page4 h1",{
    y:50,
     scrollTrigger:{

        trigger:"#page4 h1",
        scroller:"body",
       // markers:true,
        start:"top 75%",
        end:"top 65%",
        scrub:3
    }
})


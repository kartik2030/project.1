var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){

 crsr.style.left=dets.x+"px"
 crsr.style.top=dets.y+"px"
   
})

var crsrblr = document.querySelector("#cursorblur")
document.addEventListener("mousemove",function(dets){

 crsrblr.style.left=dets.x- 150 +"px"
 crsrblr.style.top=dets.y-150+"px"
   
})




gsap.to("#nav",{
    backgroundColor: "#000",
    height :"80px",
    duration:.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
         markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})



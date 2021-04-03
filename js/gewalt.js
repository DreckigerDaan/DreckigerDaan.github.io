

gsap.registerPlugin(ScrollTrigger); 


gsap.to(".schreiMann" , {
    scrollTrigger: {
        trigger: ".schreiMann",
        toggleActions: "restart none none none"
    },
    x:200,
    duration: 2
});



gsap.to(".schreiFrau" , {
    scrollTrigger: {
        trigger: ".schreiFrau",
        toggleActions: "restart none none none"
    },
    x:- 150,
    duration: 2
});


gsap.to(".würgerMann" , {
    scrollTrigger: {
        trigger: ".würgerMann",
        toggleActions: "restart none none none"
    },
    x:100,
    duration: 2
});

gsap.to(".würgerFrau" , {
    scrollTrigger: {
        trigger: ".würgerFrau",
        toggleActions: "restart none none none"
    },
    x:-100,
    duration: 2
});





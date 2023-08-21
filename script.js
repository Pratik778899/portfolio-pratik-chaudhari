function hello() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

};

hello();


let tl = gsap.timeline();

tl.from("#nav-logo", {
    y: -100,
    opacity: 0,
    delay: .1,
    duration: 0.5,
})
tl.from("#nav-mid li", {
    y: -100,
    opacity: 0,
    delay: .2,
    duration: 0.5,
    stagger: 0.3
})
tl.from("#nav-right", {
    y: -100,
    opacity: 0,
    duration: 0.5,
})

gsap.from(".n", {
    x: -70,
    opacity: 0,
    duration: 1.3,
    delay: .2,
})
gsap.from(".n1", {
    x: 70,
    opacity: 0,
    duration: 1.3,
    delay: .2,
})


gsap.from("#heroimaa img", {
    y: -100,
    opacity: 0,
    duration: 1.3,
    delay: 0.5,
})

let mm = gsap.timeline();

mm.from("#pragraph p, #pragraph a", {
    y: -10,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.5
})

mm.from("#aess img", {
    y: -100,
    opacity: 0,
    delay: -.5,
    duration: 1,
})
mm.from("#product h1", {
    y: -20,
    opacity: 0,
    delay: -.7,
    duration: 1,
})
mm.from("#product p", {
    y: 20,
    opacity: 0,
    delay: -.7,
    duration: 1,
})
mm.from("#exp h1", {
    y: -20,
    opacity: 0,
    delay: -.7,
    duration: 1,
})
mm.from("#exp p", {
    y: 20,
    opacity: 0,
    delay: -.7,
    duration: 1,
})

gsap.from("#hii h3", {
    y: -10,
    opacity: 0,
    delay: .3,
    duration: 1,
})
gsap.from(".ri-html5-fill,.ri-css3-fill,.ri-javascript-fill,.ri-git-merge-fill,.ri-github-fill,.ri-quill-pen-fill,.ri-bug-fill,.ri-terminal-box-fill,.ri-drop-fill,.ri-code-box-fill", {
    y: 50,
    opacity: 0,
    delay: 1,
    duration: 1,
})


gsap.from("#master img", {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        // markers:true,
        start: "top 30%",
        end: "top 51%"
    }
})

gsap.from("#lelem img", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: .2,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        // markers:true,
        start: "top 30%",
        end: "top 51%"
    }
})

gsap.from("#relem h1,#relem h4,#relem p,#prt1 li,#prt2 li,#relem a", {
    y: -15,
    delay: .5,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        // markers:true,
        start: "top 30%",
        end: "top 51%"
    }
})

gsap.from("#features-m h2", {
    y: -50,
    opacity: 0,
    duration: .5,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers:true,
        start: "top 65%",
        end: "top 51%"
    }
})

gsap.from(".cards", {
    x: -20,
    opacity: 0,
    delay: .5,
    duration: 1,
    stagger: .2,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers:true,
        start: "top 65%",
        end: "top 51%"
    }
})


gsap.from("#look h2", {
    x: -100,
    opacity: 0,
    delay: 0.5,
    duration: 0.3,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        // markers:true,
        start: "top 75%",
        end: "top 51%",
        scrub: 2
    }
})
gsap.from("#get a", {
    x: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.3,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        // markers:true,
        start: "top 75%",
        end: "top 51%",
        scrub: 2
    }
})

gsap.from(".img1 , .img3, .img5", {
    x: -100,
    opacity: 0,
    delay: .5,
    duration: 0.3,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        // markers:true,
        start: "top 75%",
        end: "top 0",
        scrub: 2
    }
})
gsap.from(".img2 , .img4, .img6", {
    x: 100,
    opacity: 0,
    delay: .5,
    duration: 0.3,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        // markers:true,
        start: "top 75%",
        end: "top 0%",
        scrub: 2
    }
})

gsap.from("#text-hai h2", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: .2,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        // markers:true,
        start: "top 50%",
        end: "top 51%"
    }
})

gsap.from("#card-master", {
    y: -50,
    opacity: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        // markers:true,
        start: "top 50%",
        end: "top 51%"
    }
})
gsap.from("#bas h3,#bas h5,#bas p", {
    x: -30,
    opacity: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        // markers:true,
        start: "top 50%",
        end: "top 51%"
    }
})
gsap.from("#line", {
    y: -100,
    opacity: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        // markers:true,
        start: "top 50%",
        end: "top 51%"
    }
})
gsap.from("#link a", {
    x: -50,
    opacity: 0,
    delay: 1,
    duration: 1,
    stagger: .2,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        // markers:true,
        start: "top 50%",
        end: "top 51%"
    }
})


gsap.from("#bgcon", {
    x: -50,
    opacity: 0,
    delay: 1,
    duration: 1,
    stagger: .2,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        // markers:true,
        start: "top 50%",
        end: "top 51%"
    }
})

gsap.from("#text-hello", {
    y: -100,
    opacity: 0,
    delay: .3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        // markers:true,
        start: "top 70%",
        end: "top 51%"
    }
})
gsap.from("#mahe,#email,#pho,#com,#pro", {
    x: -100,
    opacity: 0,
    delay: .3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        // markers:true,
        start: "top 70%",
        end: "top 51%"
    }
})






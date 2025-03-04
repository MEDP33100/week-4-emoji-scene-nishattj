document.addEventListener("DOMContentLoaded", (event) => {

    gsap.to('.spin', {
        duration: 1, 
        rotation: 360,
        repeat: -1,
        ease: 'linear'
    })
    gsap.to('.cloud1', {
        x: 600, 
        duration: 12, 
        repeat: -1, 
        ease: 'linear' 
    });

    gsap.to('.cloud2', {
        x: 600,
        duration: 15,
        repeat: -1,
        ease: 'linear'
    });

    gsap.to('.cloud3', {
        x: 600,
        duration: 18,
        repeat: -1,
        ease: 'linear'
    });

    gsap.to('.cloud4', {
        x: 600,
        duration: 21,
        repeat: -1,
        ease: 'linear'
    });

    gsap.to('.cloud5', {
        x: 600,
        duration: 24,
        repeat: -1,
        ease: 'linear'
    });

    gsap.to('.cloud6', {
        x: 600,
        duration: 28,
        repeat: -1,
        ease: 'linear'
    });
    
    gsap.to('.bounce', {
        x: 300,      
        y: -300,     
        duration: 10, 
        ease: 'power1.out', 
        repeat: -1,
    });
});
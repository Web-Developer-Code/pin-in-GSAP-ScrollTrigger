gsap.from('.box',{
    scrollTrigger:{
        trigger:'.images',
        start:'top top',
        end:'bottom bottom',
        pin:'.title'
    }
})
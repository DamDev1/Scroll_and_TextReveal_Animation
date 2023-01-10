const text = new SplitType('#myText')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.1,
    duration: .1
})

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElement = document.querySelectorAll(".hidden")
hiddenElement.forEach((el) => observer.observe(el))

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID, TemplateID, #form, publicKey
    emailjs.sendForm('service_ixfkugq','template_geac2hi','#contact-form','mxQXET9Jkckm3C1z2')

    .then(() =>{
        //sent message
        contactMessage.textContent = 'Message sent successfully! ✅'

        //remove message after 5s
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        //clear input field
        contactForm.reset()
    }, () =>{

        //error message
        contactMessage.textContent = 'Message not sent ❌ (service error), Please try again.'
    })
}
contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
        // scroll higher than 350 viewport height, add show scroll class
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                                    :scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else { 
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, 

})

sr.reveal(`.profile, .contact__form`)
sr.reveal(`.info`, {origin: 'left', delay:800})
sr.reveal(`.skills`, {origin: 'left', delay:1000})
sr.reveal(`.about`, {origin: 'right', delay:1200})


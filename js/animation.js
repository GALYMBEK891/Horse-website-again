window.addEventListener('scroll', function () {
    const section = document.querySelector('.what-we-do')
    const sectionPosition = section.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3
    if (sectionPosition < screenPosition) {
            section.classList.add('active')
        }

    const jameco = document.querySelector('.events-container')
    const jamecoPosition = jameco.getBoundingClientRect().top
    const jamecoScreenPosition = window.innerHeight / 1.5
    if (jamecoPosition < jamecoScreenPosition) {
            jameco.classList.add('active')
        }


    const store = document.querySelector('.store-container')
    const storePosition = store.getBoundingClientRect().top
    const storeScreenPosition = window.innerHeight / 1.7
    if (storePosition < storeScreenPosition) {
            store.classList.add('active')
        }

        
    const aboutus = document.querySelector('.about-section')
    const aboutusPosition = aboutus.getBoundingClientRect().top
    const aboutusScreenPosition = window.innerHeight / 1.4
    if(aboutusPosition < aboutusScreenPosition) {
        aboutus.classList.add('active')
    }
})


// suret changed etu
document.querySelectorAll('.team-member').forEach(biradam => {
    biradam.addEventListener('mouseenter', () => {
        biradam.classList.add('ustinde');
    });

    biradam.addEventListener('mouseleave', () => {
        biradam.classList.remove('ustinde');
    });
});



// fag
const faqItems = document.querySelectorAll(".faq-item");

for (let i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener("click", () => {
        faqItems[i].classList.toggle("active");
    });
}


const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    
    const scrollY = window.pageYOffset;
    

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight, 
            sectionTop = current.offsetTop - 58,      
            sectionId = current.getAttribute("id");   
    
      
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector("a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document
                .querySelector("a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

// ScrollReveal
ScrollReveal().reveal('.headline',{ 
    delay: 500,
    origin: 'left',
    distance: '50px',
    interval: 200,
    scale: 0.85,
    rset: true,
 });
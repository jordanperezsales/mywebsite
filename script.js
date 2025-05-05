document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const imageStack = document.querySelector(".image-stack");
    const prevButton = document.querySelector(".prev"); 
    const nextButton = document.querySelector(".next"); 
    
    function moveSlide(step) {
        console.log(`Button clicked: ${step}`);

        index += step;

        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        console.log(`Current index: ${index}`);
        imageStack.style.transform = `translateX(-${index * 100}%)`;
    }

    // Ensure buttons are selected and listening for clicks
    if (prevButton) {
        prevButton.addEventListener("click", () => moveSlide(-1));
    } else {
        console.error("Left button (.prev) not found");
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => moveSlide(1));
    } else {
        console.error("Right button (.next) not found");
    }
});

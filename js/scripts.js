const imagens = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return

        const images = entry.target

        images.src = images.src.replace("w=10" , "w=1000")

        observer.unobserve(images)
    })
}, {})

imagens.forEach((image) => {
    observer.observe(image)
});

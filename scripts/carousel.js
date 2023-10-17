$(document).ready(() => {
    const carouselContainer = document.getElementById('carouselImages');
    
    const images = [
        { src: "media/dorms/bush.jpg", text: "Bush Hall" },
        { src: "media/dorms/carm.jpg", text: "Carmichael Hall" },
        { src: "media/dorms/harleston.jpg", text: "Harleston Hall" },
        { src: "media/dorms/hodge.jpg", text: "Hodgedon Hall" },
        { src: "media/dorms/miller.jpg", text: "Miller Hall" },
        { src: "media/dorms/sophia.jpg", text: "Sophia Gordon Hall" },
        { src: "media/dorms/tilton.jpg", text: "Tilton Hall" },
        { src: "media/dorms/houston.jpg", text: "Houston Hall" },
        { src: "media/dorms/hill.jpg", text: "Hill Hall" }
    ];

    const populateCarousel = image => {
        const imageContainer = document.createElement('ul');
        imageContainer.className = 'image-container';

        const img = document.createElement('img');
        img.src = image.src;
        img.className = 'carousel-slide';
        imageContainer.appendChild(img);

        const overlayText = document.createElement('span');
        overlayText.className = 'overlay-text';
        overlayText.textContent = image.text;
        imageContainer.appendChild(overlayText);

        carouselContainer.appendChild(imageContainer);
    };
    
    /* adding two copies of each image to allow for smooth scrolling */
    for (let i = 0; i < 2; i++) {
        images.forEach(populateCarousel);
    }
});


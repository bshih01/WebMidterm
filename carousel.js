$(document).ready(() => {
    const carouselContainer = document.getElementById('carouselImages');
    
    const images = [
        { src: "media/bush.jpg", text: "Bush Hall" },
        { src: "media/carm.jpg", text: "Carmichael Hall" },
        { src: "media/harleston.jpg", text: "Harleston Hall" },
        { src: "media/hodge.jpg", text: "Hodgedon Hall" },
        { src: "media/miller.jpg", text: "Miller Hall" },
        { src: "media/sophia.jpg", text: "Sophia Gordon Hall" },
        { src: "media/tilton.jpg", text: "Tilton Hall" },
        { src: "media/houston.jpg", text: "Houston Hall" },
        { src: "media/hill.jpg", text: "Hill Hall" }
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


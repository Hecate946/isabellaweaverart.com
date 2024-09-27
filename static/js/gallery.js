// JavaScript for image carousel functionality

// Get the modal element
const modal = document.getElementById('carouselModal');
const modalImg = document.querySelector('.carousel-image');
const images = document.querySelectorAll('.gallery-image');
let currentIndex = 0;

// Create an element to display the image details
const imageDetails = document.createElement('div');
imageDetails.classList.add('image-details');
modal.querySelector('.carousel-content').appendChild(imageDetails);

// Function to parse image filename
function parseFilename(filename) {
    const parts = filename.replaceAll("%20", " ").split('_');
    return {
        title: parts[0],
        year: parts[1],
        medium: parts[2],
        dimensions: parts[3].replace('.jpg', '').replace('.png', '') // remove the file extension
    };
}

// Function to display image details
function displayImageDetails(filename) {
    const { title, year, medium, dimensions } = parseFilename(filename);
    imageDetails.innerHTML = `
        <p class="painting-description">${title}</p>
        <p class="painting-description">${year}</p>
        <p class="painting-description">${medium}</p>
        <p class="painting-description">${dimensions}</p>
    `;
}

// Open the modal and display the clicked image and details
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src;
        currentIndex = index;

        // Extract the filename from the image src and display details
        const filename = image.src.split('/').pop(); // get the filename part of the image src
        displayImageDetails(filename);
    });
});

// Close the modal
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Change slide function
function changeSlide(n) {
    currentIndex += n;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    modalImg.src = images[currentIndex].src;

    // Extract the new image filename and display details
    const filename = images[currentIndex].src.split('/').pop();
    displayImageDetails(filename);
}

// Close modal on outside click
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

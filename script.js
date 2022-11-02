// Random image (without repetition between previous image and current image)

const images = ["images/river0.jpg", "images/river1.jpg", "images/river2.jpg", "images/river3.jpg", "images/river4.jpg","images/river5.jpg", "images/river6.jpg"]
console.log(images.length);

randomIndex = Math.floor(Math.random() * images.length);
let previousRandomIndex = randomIndex;

function randomImage(){
    previousRandomIndex = randomIndex;
    randomIndex = Math.floor(Math.random() * images.length);

    while (randomIndex == previousRandomIndex) {
        randomIndex = Math.floor(Math.random() * images.length);
    }
    console.log('Random Index: '+randomIndex);
    document.getElementById("images").src = images[randomIndex];
}
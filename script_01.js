// Random image (with repetition between previous image and current image)

const images = ["images/river1.jpg", "images/river2.jpg", "images/river3.jpg", "images/river4.jpg","images/river5.jpg", "images/river6.jpg"]
let randomIndex = Math.floor(generateRandomNumber(0, images.length));

function generateRandomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}  

function randomImage(){
    console.log(images.length);
    randomIndex = Math.floor(generateRandomNumber(0, images.length));
    console.log('Random Index: '+randomIndex);
    document.getElementById("images").src = images[randomIndex];
}
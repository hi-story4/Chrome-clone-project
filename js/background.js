const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
//<img src ="img/Eifel-towel.jpg"></img>와 같은 역할.

document.body.appendChild(bgImage);

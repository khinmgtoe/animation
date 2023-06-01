const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("image")[0];
const originalImageSrc = image.src;
const imageArray = [
  "images/Rare Gallery wallpaper.png",
  "images/my.jpg",
]
let counter = 0;

const myFunction = () =>{
  if(counter === 2){
    image.src = originalImageSrc;
    counter = 0;
    return;
  }
  const imageLink = imageArray[counter];
  image.src = imageLink;
  counter += 1;
  console.log("counter",counter);
}

myButton.addEventListener("click",myFunction);

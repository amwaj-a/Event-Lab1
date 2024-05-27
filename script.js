let value = document.getElementById("value");
let color = document.getElementById("color");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let bg = document.getElementById("bg");

let button = document.getElementsByTagName("button");
color.addEventListener("click", () => {
  value.style.color = "burlywood";
});
button[0].addEventListener("click", () => {
  value.innerText = "Nobody Here";
});
let count = 1;
increase.addEventListener("click", () => {
  value.style.fontSize = `${++count}rem`;
});
decrease.addEventListener("click", () => {
  value.style.fontSize = `${--count}rem`;
});

bg.addEventListener("click", () => {
  value.style.backgroundColor = "rgb(83, 150, 150)";
});

let btnImg = document.getElementById("btnImg");
let div = document.getElementById("imgs");
btnImg.addEventListener("mouseover", () => {
  div.src =
    "https://images.pexels.com/photos/19782827/pexels-photo-19782827/free-photo-of-man-walking-on-a-path-by-the-shore-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"; //   div.src =
  //     "https://images.pexels.com/photos/19782827/pexels-photo-19782827/free-photo-of-man-walking-on-a-path-by-the-shore-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
});
btnImg.addEventListener("click", () => {
  div.src =
    "https://images.pexels.com/photos/19796646/pexels-photo-19796646/free-photo-of-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
});

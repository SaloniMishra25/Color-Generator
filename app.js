let btn = document.querySelector("button");
let colorBox = document.querySelector(".color-box");

btn.addEventListener("click", function () {
    let randomColor = getRandomColor();
    colorBox.innerText = randomColor;
    colorBox.style.backgroundColor = randomColor;
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}


const container = document.querySelector('#container');


for(i = 0; i < 256; i++) {
    box = document.createElement('div');
    box.className += "box";
    container.appendChild(box);
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
        box.style.backgroundColor = rgb;
    }
    box.addEventListener('mouseover', () => {
        
        randomColor();
    });
});

















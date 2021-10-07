
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

resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    boxes.forEach(box => {
        box.style.backgroundColor = 'white';
    });
});


resetButton.addEventListener('click', () => {
    for(i=0; i < 256; i++) {
    container.removeChild(boxes[i]);
    }
    
    x = parseInt(prompt('enter number of boxes'));
    width = (320 - (2*x)) / x;
    height = (320 - (2*x)) / x;
    
    for(i = 0; i < (x*x); i++) {
        box = document.createElement('div');
        box.className += "box";
        box.style.width = width + 'px';
        box.style.height = height + 'px';
        container.appendChild(box);
    }



    
    boxes.forEach(box => {
        box.style.width = width + 'px';
        box.style.height = width + 'px';
        
    });
    


});





















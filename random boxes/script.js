const target_box = document.querySelectorAll('.box');
const body = document.querySelector('body');


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

target_box.forEach(element => {
    element.style.backgroundColor = getRandomColor();
});


target_box.forEach(element => {
    element.addEventListener('click', function() {
        body.style.backgroundColor = window.getComputedStyle(element).getPropertyValue('background-color');
    });
});


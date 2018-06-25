const animation = document.querySelector("#heart");
let beat = 100;
let dir = 1;

function animation_heart() {
    if (beat > 200) dir = -1
    else if (beat < 100) dir = 1
    beat=beat + 5 * dir;
    animation.style.height = beat + 'px';
    animation.style.width = beat + 'px';

    requestAnimationFrame(animation_heart);
}

requestAnimationFrame(animation_heart);



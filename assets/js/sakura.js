function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const size = Math.random() * 10 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;

    petal.style.left = `${Math.random() * window.innerWidth}px`;
    const fallingDuration = Math.random() * 4 + 4;
    petal.style.animationDuration = `${fallingDuration}s`;

    document.getElementById('home').appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, fallingDuration * 2000);
}

setInterval(createPetal, 300);
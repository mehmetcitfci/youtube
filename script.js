document.getElementById('animateButton').addEventListener('click', function() {
    const box = document.getElementById('animatedBox');
    let positionX = 0;
    let positionY = 0;
    const interval = setInterval(() => {
        if (positionX >= 300 && positionY >= 300) {
            clearInterval(interval);
        } else {
            if (positionX < 300) {
                positionX += 5;
            }
            if (positionY < 300) {
                positionY += 3; 
            }
            box.style.transform = `translate(${positionX}px, ${positionY}px)`;
        }
    }, 50);
});

document.getElementById('shootButton').addEventListener('click', function() {
    const x = parseFloat(document.getElementById('xCoord').value);
    const y = parseFloat(document.getElementById('yCoord').value);
    const shape = document.getElementById('shape').value;
    const resultElement = document.getElementById('result');
    const targetElement = document.getElementById('target');

    if (isNaN(x) || isNaN(y)) {
        resultElement.textContent = "Введите корректные координаты!";
        return;
    }

    setTargetShape(shape);

    let hit = false;
    if (shape === 'circle') {
        hit = checkCircleHit(x, y);
    } else if (shape === 'square') {
        hit = checkSquareHit(x, y);
    } else if (shape === 'diamond') {
        hit = checkDiamondHit(x, y);
    } else if (shape === 'star') {
        hit = checkStarHit(x, y);
    }

    if (hit) {
        resultElement.textContent = "Попал!";
    } else {
        resultElement.textContent = "Мимо!";
    }
});

function setTargetShape(shape) {
    const target = document.getElementById('target');
    target.className = 'target'; 
    if (shape === 'circle') {
        target.classList.add('circle');
    } else if (shape === 'square') {
        target.classList.add('square');
    } else if (shape === 'diamond') {
        target.classList.add('diamond');
    } else if (shape === 'star') {
        target.classList.add('star');
    }
}

function checkCircleHit(x, y) {
    const targetX = 0; 
    const targetY = 0; 
    const radius = 100; 
    const distance = Math.sqrt(Math.pow(x - targetX, 2) + Math.pow(y - targetY, 2));
    return distance <= radius;
}

function checkSquareHit(x, y) {
    const halfSize = 100;
    return x >= -halfSize && x <= halfSize && y >= -halfSize && y <= halfSize;
}

function checkDiamondHit(x, y) {
    const halfSize = 100; 
    return Math.abs(x) + Math.abs(y) <= halfSize;
}

function checkStarHit(x, y) {
    return checkCircleHit(x, y);
}
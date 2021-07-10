const yourship = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area')
//movimentação é desparo da nave
function flyAhip(event) {

    if(event.key === "ArrowUp") {
        event.preventDefault();
        moveUp();
    }else if (event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if (event.key === " ") {
        event.preventDefault();
        fireLaser();
    }
}

//função de subir

function moveUp() {
    let topPosition = getComputedStyle(yourship).getPropertyValue('top');
    if(topPosition === "0px") {
        return
    }else {
        let position = parseInt(topPosition);
        position -= 50;
        yourship.style.top = `${position}px`
    }
}

//função de descer 

function moveDown() {
    let topPosition = getComputedStyle(yourship).getPropertyValue('top');
    if(topPosition === "510PX") {
        return
    } else {
        let position = parseInt(topPosition);
        position += 50;
        yourship.style.top = `${position}px`;
    }
}

//funcionalidade de tiro

function fireLaser() {
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
}

function createLaserElement() {
    let xPosition = parseInt(window.getComputedStyle(yourship).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(yourship).getPropertyValue('top'));
    let newLaser = document.createElement('img');
    newLaser.src = 'imgs/shoot.png';
    newLaser.classList.add('laser');
    newLaser.style.left = `${xPosition}px`
    newLaser.style.top = `${yPosition - 10}px`;
    return newLaser;
}

function moveLaser(laser) {
    let laserInterval = setInterval(() => {
        let xPosition = parseInt(laser.style.left);

        if (xPosition === 340) {
            laser.remove();
        }else {
            laser.style.left = `${xPosition + 8}px`;
        }
    }, 10);

}

window.addEventListener('keydown', flyAhip);
class Bird {
    constructor() {
        this.gameScreen = document.getElementById('game-play');
        this.speed = 3;
        this.left = 550;
        this.top = 500;
        this.width = 95;
        this.height = 95;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement('img');
        this.element.src = "images/bird.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.element);
    }

    moveBird() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        if (this.top + this.height + this.directionY <= 650 && this.top + this.directionY >= 0) { 
            this.top += this.directionY; }

        if (this.left + this.directionX >= 0 && this.left + this.width + this.directionX <= 1150)  {
           this.left += this.directionX; }
        }

    collisionDetection(tree) {
        const birdRect = this.element.getBoundingClientRect();
        const treeRect = tree.element.getBoundingClientRect();

        if 
        ( birdRect.left < treeRect.right && birdRect.right > treeRect.left && birdRect.top < treeRect.bottom && birdRect.bottom > treeRect.top ) {
        return true;
        } else {
        return false;
        }
    }

    speedDetection(tornado) {
        const birdRect = this.element.getBoundingClientRect();
        const tornadoRect = tornado.element.getBoundingClientRect();

        if 
        ( birdRect.left < tornadoRect.right && birdRect.right > tornadoRect.left && birdRect.top < tornadoRect.bottom && birdRect.bottom > tornadoRect.top ) {
        return true;
        } else {
        return false;
        }
    }
    }
